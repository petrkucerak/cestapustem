import os
from datetime import date, timedelta

# Directory to save the Markdown files
output_directory = "..\src\content\den"
os.makedirs(output_directory, exist_ok=True)

# Template content for the Markdown files
template = """---
dayName: "TODO"
date: "{date}"
author: 'TODO'
authorDetails: "TODO"

bibleQuote: "TODO"
source: "TODO"

prayer: "TODO"

---

TODO
"""

# Start and end dates
start_date = date(2025, 3, 5)
end_date = date(2025, 4, 20)

# Loop through each day in the date range
current_date = start_date
while current_date <= end_date:
    filename = current_date.strftime("%Y-%m-%d.md")
    file_path = os.path.join(output_directory, filename)

    # Write the template with the specific date to the file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(template.format(date=current_date.strftime("%Y-%m-%d")))

    print(f"Created: {file_path}")
    current_date += timedelta(days=1)

print("All Markdown files created successfully!")
