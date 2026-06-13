const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\HARMONY\\Desktop\\portfolioarchi-main\\src\\assets";
const categories = {
    "COMMERCE": "COMMERCE",
    "HOTEL": "HÔTEL",
    "RESIDENCE": "RÉSIDENCE",
    "BATIMENT MULTIFONCTIONNEL": "BÂTIMENT MULTIFONCTIONNEL",
    "UNIVERSITAIRE": "UNIVERSITAIRE"
};

function getFiles(catFolder) {
    const fullPath = path.join(baseDir, catFolder);
    let allFiles = [];
    if (!fs.existsSync(fullPath)) return [];

    function walkSync(currentDir) {
        fs.readdirSync(currentDir).forEach(file => {
            const filePath = path.join(currentDir, file);
            if (fs.statSync(filePath).isDirectory()) {
                walkSync(filePath);
            } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
                const relPath = path.relative(baseDir, filePath);
                const encodedPath = relPath.split(path.sep).map(p => encodeURIComponent(p)).join('/');
                allFiles.push({
                    url: `assets/${encodedPath}`,
                    caption: file.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' ').trim()
                });
            }
        });
    }
    walkSync(fullPath);
    return allFiles;
}

let tsCode = "  projects: ProjectGroup[] = [\n";
Object.entries(categories).forEach(([folder, label]) => {
    const images = getFiles(folder);
    const catId = label.toLowerCase().replace(/ /g, '-').replace(/ô/g, 'o').replace(/é/g, 'e').replace(/â/g, 'a');
    
    tsCode += `    // ─── ${label} ──────────────────────────────────────────────────────────\n`;
    tsCode += `    {\n`;
    tsCode += `      id: '${catId}',\n`;
    tsCode += `      tag: '${label}',\n`;
    tsCode += `      title: '${label === 'BATIMENT MULTIFONCTIONNEL' ? 'Bâtiments Multifonctionnels' : label}',\n`;
    tsCode += `      description: \`<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>${label.toLowerCase()}</strong>.</p><p>Découvrez nos rendus 3D, plans de masse et photographies de chantiers.</p>\`,\n`;
    tsCode += `      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],\n`;
    tsCode += `      images: [\n`;
    images.forEach(img => {
        tsCode += `        { url: '${img.url}', caption: '${img.caption}' },\n`;
    });
    tsCode += `      ]\n`;
    tsCode += `    },\n`;
});
tsCode += "  ];";

console.log(tsCode);
