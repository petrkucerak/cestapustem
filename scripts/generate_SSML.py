import os
from ruamel.yaml import YAML
import re

INPUT_FOLDER = "../src/content/den"  # Replace with the folder containing Markdown files
OUTPUT_FOLDER = "tmp"  # Replace with the folder for SSML files


class MarkdownObject:
    def __init__(self, front_matter, body, filename):
        self.front_matter = front_matter
        self.body = body
        self.filename = filename

    def __repr__(self):
        return f"<MarkdownObject filename={self.filename} front_matter={self.front_matter.keys()} body_length={len(self.body)}>"


def load_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.match(r"---\n(.*?)\n---\n(.*)", content, re.DOTALL)
    if not match:
        raise ValueError(f"The file {filepath} does not contain valid Markdown with front matter.")

    front_matter, body = match.groups()

    yaml = YAML(typ='safe')
    parsed_front_matter = yaml.load(front_matter)

    return MarkdownObject(front_matter=parsed_front_matter, body=body.strip(), filename=os.path.basename(filepath))


def load_markdown_files_from_folder(folder_path):
    markdown_objects = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            filepath = os.path.join(folder_path, filename)
            try:
                markdown_obj = load_markdown_file(filepath)
                markdown_objects.append(markdown_obj)
            except ValueError as e:
                print(f"Skipping file {filename}: {e}")
    return markdown_objects


def generate_ssml(content, output_file):
    ssml_template = f"""<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Vítej u dnešního zamyšlení na Tvé cestě Adventem! Dnes je {content.front_matter.get('dayName', 'Neznámý den')} a autorem zamyšlení je {content.front_matter.get('author', 'Neznámý autor')}.
      <break strength="weak" />
    </prosody>
    <audio src="https://38-migrate-project-from-next.adventnicesta.pages.dev/audio/utils/01_adventni_cesta-intro.mp3" />
    <break strength="medium" />
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-5%" pitch="-5%">Úryvek z Bible
      <break strength="medium" />{content.front_matter.get('bibleQuote', '').replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ')}
    </prosody>
    <audio src="https://38-migrate-project-from-next.adventnicesta.pages.dev/audio/utils/02_adventni_cesta-break1.mp3"/>
  </voice>
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Zamyšlení
      <break strength="medium" />{content.body.replace("&nbsp;", " ").replace("»", "").replace("«", "").replace("„", "").replace("“", "").replace(";", ',').replace(" - ", ',').replace("…", '.').replace(" (", ', ').replace(")", ', ')}
    </prosody>
    <audio src="https://38-migrate-project-from-next.adventnicesta.pages.dev/audio/utils/03_adventni_cesta-break2.mp3"/>
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-15%" pitch="-5%">Závěrečná modlitba
      <break strength="medium" />{content.front_matter.get('prayer', '').replace("&nbsp;", " ")}
    </prosody>
    <audio src="https://38-migrate-project-from-next.adventnicesta.pages.dev/audio/utils/01_adventni_cesta-intro.mp3" />
  </voice>
</speak>"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ssml_template)
    print(f"SSML file written to {output_file}")


def create_ssml_files_from_markdowns(folder_path, output_folder):
    os.makedirs(output_folder, exist_ok=True)
    markdown_objects = load_markdown_files_from_folder(folder_path)

    for content in markdown_objects:
        output_file = os.path.join(output_folder, content.filename.replace('.md', '.ssml'))
        generate_ssml(content, output_file)


# Example usage
if __name__ == "__main__":
    input_folder = INPUT_FOLDER
    output_folder = OUTPUT_FOLDER

    create_ssml_files_from_markdowns(input_folder, output_folder)
