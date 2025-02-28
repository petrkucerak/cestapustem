import os
import time
from dotenv import load_dotenv
import azure.cognitiveservices.speech as speechsdk

# Load environment variables from .env file
load_dotenv()

# Azure Speech Services configuration
AZURE_SPEECH_KEY = os.getenv("SPEECH_KEY")
AZURE_SPEECH_REGION = os.getenv("SPEECH_REGION")

if not AZURE_SPEECH_KEY or not AZURE_SPEECH_REGION:
    raise ValueError("SPEECH_KEY and SPEECH_REGION must be set in the .env file.")

# Input and output folder configuration
SSML_INPUT_FOLDER = "tmp"  # Folder containing SSML files
AUDIO_OUTPUT_FOLDER = "../public/audio"  # Folder to save synthesized audio files

def synthesize_audio_from_ssml(ssml_file, output_file, speech_key, speech_region):
    """Synthesizes speech from SSML file and saves it as an audio file."""
    try:
        # Create a speech configuration
        speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=speech_region)
        speech_config.set_speech_synthesis_output_format(speechsdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3)

        # Set up the speech synthesizer
        audio_config = speechsdk.audio.AudioOutputConfig(filename=output_file)
        synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)

        # Read SSML content
        with open(ssml_file, 'r', encoding='utf-8') as f:
            ssml_content = f.read()

        # Synthesize speech
      #   result = synthesizer.speak_ssml_async(ssml_content).get()
        result = synthesizer.speak_ssml(ssml_content)

        # Check for errors
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print(f"Audio synthesized and saved to {output_file}")
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            print(f"Speech synthesis canceled: {cancellation_details.reason}")
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                if cancellation_details.error_details:
                    print(f"Error details: {cancellation_details.error_details}")
                    print("Did you set the speech resource key and region values correctly?")
    except Exception as e:
        print(f"Error processing {ssml_file}: {e}")

def synthesize_audio_for_all_ssml(input_folder, output_folder, speech_key, speech_region):
    """Synthesizes audio for all SSML files in a folder."""
    os.makedirs(output_folder, exist_ok=True)

    for filename in os.listdir(input_folder):
        time.sleep(1)
        if filename.endswith(".ssml"):
            ssml_file = os.path.join(input_folder, filename)
            audio_file = os.path.join(output_folder, filename.replace(".ssml", ".mp3"))
            synthesize_audio_from_ssml(ssml_file, audio_file, speech_key, speech_region)

# Example usage
if __name__ == "__main__":
    synthesize_audio_for_all_ssml(SSML_INPUT_FOLDER, AUDIO_OUTPUT_FOLDER, AZURE_SPEECH_KEY, AZURE_SPEECH_REGION)
