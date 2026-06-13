
const fs = require('fs');

function checkHtmlTags(content) {
    const tagRegex = /<(\/?[a-zA-Z0-9]+)/g;
    let match;
    const stack = [];
    while ((match = tagRegex.exec(content)) !== null) {
        const tag = match[1];
        if (tag.startsWith('/')) {
            if (stack.length === 0) {
                console.log(`Unexpected closing tag: ${tag}`);
                continue;
            }
            const last = stack.pop();
            if (last !== tag.substring(1)) {
                console.log(`Mismatched tags: opened ${last}, closed ${tag}`);
            }
        } else {
            // Simplified self-closing list
            if (['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tag.toLowerCase())) {
                continue;
            }
            stack.push(tag);
        }
    }
    
    if (stack.length > 0) {
        console.log(`Unclosed tags: ${stack.join(', ')}`);
    } else {
        console.log("Tags seem balanced.");
    }
}

const content = fs.readFileSync('c:\\Users\\HARMONY\\Desktop\\portfolioarchi-main\\src\\app\\pages\\parcours\\parcours.ts', 'utf8');
const templateMatch = content.match(/template:\s*`(.*?)`/s);
if (templateMatch) {
    checkHtmlTags(templateMatch[1]);
} else {
    console.log("Template not found");
}
