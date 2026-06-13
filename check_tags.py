
import re

def check_html_tags(content):
    # Very simple tag checker
    tags = re.findall(r'<(/?[a-zA-Z0-9]+)', content)
    stack = []
    for tag in tags:
        if tag.startswith('/'):
            if not stack:
                print(f"Balanise fermante inattendue: {tag}")
                continue
            last = stack.pop()
            if last != tag[1:]:
                print(f"Erreur de correspondance: ouvert {last}, fermé {tag}")
        else:
            # Self-closing tags in HTML templates (simplified list)
            if tag in ['img', 'br', 'hr', 'input', 'meta', 'link']:
                continue
            stack.append(tag)
    
    if stack:
        print(f"Balises non fermées: {stack}")
    else:
        print("Toutes les balises semblent équilibrées.")

with open(r'c:\Users\HARMONY\Desktop\portfolioarchi-main\src\app\pages\parcours\parcours.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    # Extract template content
    template_match = re.search(r'template: `(.*?)`', content, re.DOTALL)
    if template_match:
        check_html_tags(template_match.group(1))
    else:
        print("Template non trouvé")
