import os
import json
from urllib.parse import quote

base_dir = r"c:\Users\HARMONY\Desktop\portfolioarchi-main\src\assets"
categories = {
    "COMMERCE": "COMMERCE",
    "HOTEL": "HÔTEL",
    "RESIDENCE": "RÉSIDENCE",
    "BATIMENT MULTIFONCTIONNEL": "BÂTIMENT MULTIFONCTIONNEL",
    "UNIVERSITAIRE": "UNIVERSITAIRE"
}

def get_files(cat_folder):
    full_path = os.path.join(base_dir, cat_folder)
    all_files = []
    if not os.path.exists(full_path):
        return []
    for root, dirs, files in os.walk(full_path):
        for file in files:
            if file.lower().endswith(('.jpg', '.png', '.jpeg')):
                rel_path = os.path.relpath(os.path.join(root, file), base_dir)
                # URL encode the path but keep / as /
                encoded_path = "/".join([quote(p) for p in rel_path.split(os.sep)])
                all_files.append({
                    "url": f"assets/{encoded_path}",
                    "caption": file.split('.')[0].replace('_', ' ').replace('-', ' ').strip()
                })
    return all_files

results = {}
for folder, label in categories.items():
    images = get_files(folder)
    results[label] = images

# Output as TS-like string
ts_code = "  projects: ProjectGroup[] = [\n"
for label, images in results.items():
    cat_id = label.lower().replace(' ', '-').replace('ô', 'o').replace('é', 'e').replace('â', 'a')
    ts_code += f"    // ─── {label} ──────────────────────────────────────────────────────────\n"
    ts_code += "    {\n"
    ts_code += f"      id: '{cat_id}',\n"
    ts_code += f"      tag: '{label}',\n"
    ts_code += f"      title: '{label.title() if 'MULTIFONCTIONNEL' not in label else 'Bâtiments Multifonctionnels'}',\n"
    ts_code += f"      description: '<p>Sélection de projets dans le domaine : {label.lower()}.</p>',\n"
    ts_code += "      tech: ['ArchiCAD', 'Lumion', 'Conception'],\n"
    ts_code += "      images: [\n"
    for img in images:
        ts_code += f"        {{ url: '{img['url']}', caption: '{img['caption']}' }},\n"
    ts_code += "      ]\n"
    ts_code += "    },\n"
ts_code += "  ];"

print(ts_code)
