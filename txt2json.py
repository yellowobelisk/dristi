import json

def convert_txt_to_json(txt_path, json_path):
    with open(txt_path, 'r') as f:
        lines = [line.strip() for line in f if line.strip()]
    
    numbered_links = {str(i + 1): link for i, link in enumerate(lines)}

    with open(json_path, 'w') as f:
        json.dump(numbered_links, f, indent=2)
    
    print(f"✅ Converted {len(lines)} links to {json_path}")

# Example usage:
convert_txt_to_json("highlight2.txt", "links3.json")