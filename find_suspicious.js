
const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\HARMONY\\Desktop\\portfolioarchi-main\\src\\app\\pages\\parcours\\parcours.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes("')\"") || line.includes("') />")) {
        console.log(`Line ${i + 1}: ${line}`);
    }
});
