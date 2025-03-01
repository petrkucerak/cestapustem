import os
import re
import markdown
import yaml
import time
from dotenv import load_dotenv
import azure.cognitiveservices.speech as speechsdk
from pydub import AudioSegment

MARKDOWN_PATH = "../src/content/den/"
TMP_PATH = "tmp"
OUTPUT_PATH = "../public/audio/"

# Load environment variables from .env file
load_dotenv()

# Azure Speech Services configuration
AZURE_SPEECH_KEY = os.getenv("SPEECH_KEY")
AZURE_SPEECH_REGION = os.getenv("SPEECH_REGION")

if not AZURE_SPEECH_KEY or not AZURE_SPEECH_REGION:
    raise ValueError(
        "SPEECH_KEY and SPEECH_REGION must be set in the .env file.")


def synthesize_audio_from_ssml(ssml_text, output_file, speech_key, speech_region):
    """Synthesizes speech from SSML text and saves it as an audio file."""
    try:
        # Create a speech configuration
        speech_config = speechsdk.SpeechConfig(
            subscription=speech_key, region=speech_region
        )
        speech_config.set_speech_synthesis_output_format(
            speechsdk.SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3
        )

        # Set up the speech synthesizer
        audio_config = speechsdk.audio.AudioOutputConfig(filename=output_file)
        synthesizer = speechsdk.SpeechSynthesizer(
            speech_config=speech_config, audio_config=audio_config)

        # Synthesize speech
        result = synthesizer.speak_ssml(ssml_text)

        # Check for errors
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print(f"Audio synthesized and saved to {output_file}")
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            print(f"Speech synthesis canceled: {cancellation_details.reason}")
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                if cancellation_details.error_details:
                    print(
                        f"Error details: {cancellation_details.error_details}")
                    print(
                        "Did you set the speech resource key and region values correctly?")
    except Exception as e:
        print(f"Error processing {output_file}: {e}")


def extract_metadata_and_text(md_content):
    """
    Parse markdown content and return it as a dictionary.
    """

    match = re.match(r'---\n(.*?)\n---\n(.*)', md_content, re.DOTALL)
    if not match:
        return None

    metadata_raw, markdown_text = match.groups()
    metadata = yaml.safe_load(metadata_raw)

    return {
        "dayName": metadata.get("dayName", ""),
        "date": metadata.get("date", ""),
        "author": metadata.get("author", ""),
        "bibleQuote": metadata.get("bibleQuote", ""),
        "prayer": metadata.get("prayer", ""),
        "markdownText": markdown_text.strip()
    }


def process_markdown_files():
    """
    Extract text from markdowns and returns list of dictionaries
    that contains extracted data from all markdown files.
    """
    result = []
    for filename in os.listdir(MARKDOWN_PATH):
        if filename.endswith(".md"):
            with open(MARKDOWN_PATH + filename, "r", encoding="utf-8") as file:
                content = file.read()
                extracted = extract_metadata_and_text(content)
                if extracted:
                    result.append(extracted)
    return result


def unify_day_records(file_list, output_file):
    """
    Connects multiple audio files into one output file.
    """
    try:
        # Load the first audio file as the base
        combined = AudioSegment.from_file(file_list[0])

        # Append each subsequent file
        for file in file_list[1:]:
            audio = AudioSegment.from_file(file)
            combined += audio

        # Export the final audio file
        combined.export(output_file, format="mp3", bitrate="192k")
        print(f"Audio files merged successfully into {output_file}")
    except Exception as e:
        print(f"Error merging audio files: {e}")


def synthesize(text, target_path):
    print("Start", target_path, "synthesize")
    synthesize_audio_from_ssml(
        text, target_path, AZURE_SPEECH_KEY, AZURE_SPEECH_REGION)


def synthesize_text(data):
    os.makedirs(TMP_PATH, exist_ok=True)
    for day in data:
        record_list = []
        # Welcome
        welcome = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-AntoninNeural">
            <prosody rate="-15%" pitch="-5%">
                <break strength="medium" />
                Vítej u dnešního zamyšlení na Tvé cestě Půstem! Dnes je {day.get('dayName', 'Neznámý den')} a autorem zamyšlení je {day.get('author', 'Neznámý autor')}.
                <break strength="weak" />
            </prosody>
        </voice>
        </speak>
        """
        filename = f"{TMP_PATH}/{day.get('date')}_01_welcome.mp3"
        synthesize(welcome, filename)
        record_list.append(filename)

        # Append intro audio
        record_list.append("../public/audio/utils/01_adventni_cesta-intro.mp3")

        # Quote
        quote = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-VlastaNeural">
            <prosody rate="-5%" pitch="-5%">
                <break strength="medium" />
                Úryvek z Bible
                <break strength="medium" />
                {day.get('bibleQuote', '').replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace(" – ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ')}
                <break strength="medium" />
            </prosody>
        </voice>
        </speak>
        """
        filename = f"{TMP_PATH}/{day.get('date')}_03_quote.mp3"
        synthesize(quote, filename)
        record_list.append(filename)

        # Append break audio
        record_list.append(
            "../public/audio/utils/02_adventni_cesta-break1.mp3")

        # Contemplation
        contemplation = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-AntoninNeural">
            <prosody rate="-15%" pitch="-5%">
                <break strength="medium" />
                Zamyšlení
                <break strength="medium" />
                {day.get('markdownText', '').replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace(" – ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ').replace("`", ', ').replace("**", '<break strength="weak" />')}
                <break strength="medium" />
            </prosody>
        </voice>
        </speak>
        """
        filename = f"{TMP_PATH}/{day.get('date')}_05_ct.mp3"
        synthesize(contemplation, filename)
        record_list.append(filename)

        # Append break audio
        record_list.append(
            "../public/audio/utils/03_adventni_cesta-break2.mp3")

        # Final prey
        prey = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-VlastaNeural">
            <prosody rate="-15%" pitch="-5%">
                <break strength="medium" />
                Závěrečná modlitba
                <break strength="medium" />
                {day.get('prayer', '').replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace(" – ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ').replace("`", ', ')}
                <break strength="medium" />
            </prosody>
        </voice>
        </speak>
        """
        filename = f"{TMP_PATH}/{day.get('date')}_07_prey.mp3"
        synthesize(prey, filename)
        record_list.append(filename)

        # Append outro audio
        record_list.append("../public/audio/utils/01_adventni_cesta-intro.mp3")

        unify_day_records(record_list, f"{OUTPUT_PATH}/{day.get('date')}.mp3")
        
        print("The record has been successful exported!\n\n")


if __name__ == "__main__":
    extracted_data = process_markdown_files()
    synthesize_text(extracted_data)


# 2. Synthesize all parts as a individual audio records

# 3. Connect synthesis records to final records for each day
