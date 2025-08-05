"https://indown.io/private-downloader"


import re

json_text = """

"""


https_links = re.findall(r"https://[^\s\"']+", json_text)

file_path_with_gaps = "highlight8.txt"
with open(file_path_with_gaps, "w") as f:
    for link in https_links:
        f.write(link + "\n\n")  

file_path_with_gaps
