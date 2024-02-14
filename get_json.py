import re
import os
import json
from datetime import datetime

# Funkce pro převod českého názvu měsíce na číslo


def month_to_number(month_name):
    months = {
        'ledna': '01', 'února': '02', 'března': '03', 'dubna': '04',
        'května': '05', 'června': '06', 'července': '07', 'srpna': '08',
        'září': '09', 'října': '10', 'listopadu': '11', 'prosince': '12'
    }
    return months.get(month_name.lower(), '01')

# Funkce pro převod data z formátu "dd. měsíc" na "yyyy-mm-dd"


def pridat_nbsp(text):
    # Regex pattern pro nalezení jednopísmenných předložek s mezerou před nimi
    pattern = r"(?<=\s)([vskouziai])\s"

    # Nahrazení mezery před jednopísmennými předložkami symbolem &nbsp;
    return re.sub(pattern, r"\1&nbsp;", text)


def format_date_cz(date_str, year):
    day, month_name = re.match(r'(\d{1,2})\. (\S+)', date_str).groups()
    month = month_to_number(month_name)
    date_obj = datetime.strptime(f"{day}-{month}-{year}", '%d-%m-%Y')
    return date_obj.strftime('%Y-%m-%d')


# První krok je otevřít a přečíst obsah souboru, abychom mohli analyzovat jeho strukturu a rozdělit ho na jednotlivé dny.
file_path = 'clean-text-auto.txt'

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

# # Vypíšu prvních 500 znaků, abychom mohli lépe pochopit strukturu dat.
# content[:500]


def remove_breaks_if_no_dot(text):
    # Split the text into lines
    lines = text.split('\n')

    # Process each line
    processed_lines = []
    for line in lines:
        # If the line does not end with a dot, remove the trailing newline
        if not line.endswith('.') or not line.endswith(','):
            # Remove the newline and add to processed lines without line break
            processed_lines.append(" " + line)
        else:
            # Line ends with a dot, keep it and add a space for separation
            processed_lines.append(" " + line + " ")

    # Join the processed lines back into a single string
    processed_text = ''.join(processed_lines)

    return processed_text


# Rozdělení obsahu souboru na jednotlivé dny
days = content.split('xxx')

# Slovník pro ukládání JSON souborů
json_files = {}

for day in days:
    # Oddělení jednotlivých částí pro každý den
    parts = day.strip().split('\n-\n')
    if len(parts) >= 7:
        # Vytvoření slovníku pro JSON soubor
        date_formatted = format_date_cz(parts[0], 2024)
        day_data = {
            "dayName": parts[1],
            "date": date_formatted,
            "quote": pridat_nbsp(remove_breaks_if_no_dot(parts[3])).replace("  ", " ").replace("\n\n", "\n"),
            "source": parts[2],
            "reflexion": pridat_nbsp(remove_breaks_if_no_dot(parts[4])).replace("  ", " ").replace("\n\n", "\n"),
            "author": parts[5],
            "preayer": parts[6],
            "slug": date_formatted
        }

        # Uložení popisu autora do slovníku pro každý den
        author_description = parts[7] if len(parts) > 7 else ""
        day_data["authorDescription"] = author_description

        # Uložení JSON dat do slovníku
        json_files[date_formatted] = day_data

# Uložení JSON souborů na disk
for date, data in json_files.items():
    file_name = f"_days/{date}.json"
    with open(file_name, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)

# # Výpis názvů několika vytvořených souborů jako příklad
# example_files = list(json_files.keys())[:3]
# example_files_paths = [f"/test/{date}.json" for date in example_files]
# example_files_paths
