import os
import re
import markdown
import yaml

MARKDOWN_PATH = "../src/content/den/"
TMP_PATH = "tmp"


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


def synthesize(text, target_path):
    print(target_path)
    print(text)


def synthesize_text(data):
    os.makedirs(TMP_PATH, exist_ok=True)
    for day in data:

        # Welcome
        welcome = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-AntoninNeural">
            <prosody rate="-15%" pitch="-5%">
                <break strength="medium" />
                Vítej u dnešního zamyšlení na Tvé cestě Půstem! Dnes je {day.get('dayName', 'Neznámý den')} a autorem zamyšlení je {day.get('author', 'Neznámý autor')}.
                <break strength="medium" />
            </prosody>
        </voice>
        </speak>
        """
        synthesize(welcome, f"{TMP_PATH}/01_welcome_{day.get('date')}")

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
        synthesize(quote, f"{TMP_PATH}/03_quote_{day.get('date')}")

        # Contemplation
        contemplation = f"""
        <speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
        <voice name="cs-CZ-AntoninNeural">
            <prosody rate="-15%" pitch="-5%">
                <break strength="medium" />
                Zamyšlení
                <break strength="medium" />
                {day.get('markdownText', '').replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace(" – ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ').replace("`", ', ')}
                <break strength="medium" />
            </prosody>
        </voice>
        </speak>
        """
        synthesize(contemplation, f"{TMP_PATH}/05_ct_{day.get('date')}")

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
        synthesize(prey, f"{TMP_PATH}/07_prey_{day.get('date')}")


if __name__ == "__main__":
    extracted_data = process_markdown_files()
    synthesize_text(extracted_data)


# 2. Synthesize all parts as a individual audio records

# 3. Connect synthesis records to final records for each day
