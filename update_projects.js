const fs = require('fs');
const path = require('path');

const baseDir = "c:\\Users\\HARMONY\\Desktop\\portfolioarchi-main\\src\\assets";
const targetFile = "c:\\Users\\HARMONY\\Desktop\\portfolioarchi-main\\src\\app\\pages\\realisation\\realisation.ts";

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
        // Read directory and sort files numerically if they have numbers
        const entries = fs.readdirSync(currentDir).sort((a, b) => {
             return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
        });

        entries.forEach(file => {
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

let projectBlocks = [];
Object.entries(categories).forEach(([folder, label]) => {
    const images = getFiles(folder);
    const catId = label.toLowerCase().replace(/ /g, '-').replace(/ô/g, 'o').replace(/é/g, 'e').replace(/â/g, 'a');
    
    let block = `    // ─── ${label} ──────────────────────────────────────────────────────────
    {
      id: '${catId}',
      tag: '${label}',
      title: '${label === 'BÂTIMENT MULTIFONCTIONNEL' ? 'Bâtiments Multifonctionnels' : (label === 'HÔTEL' ? 'Complexes Hôteliers' : (label === 'COMMERCE' ? 'Espaces Commerciaux' : (label === 'RÉSIDENCE' ? 'Villas & Résidences' : 'Infrastructures Universitaires')))}',
      description: \`<p>Cet ensemble regroupe l'intégralité des projets et études réalisés dans le domaine : <strong>${label.toLowerCase()}</strong>.</p><p>Explorez une galerie complète de nos rendus 3D, plans de masse et photographies de chantiers (\${images.length} images).</p>\`,
      tech: ['ArchiCAD', 'Lumion', 'Conception', 'Suivi de chantier'],
      images: [\n`;
    
    images.forEach(img => {
        block += `        { url: '${img.url}', caption: '${img.caption}' },\n`;
    });
    
    block += `      ]
    }`;
    projectBlocks.push(block);
});

const projectsContent = "  projects: ProjectGroup[] = [\n" + projectBlocks.join(',\n\n') + "\n  ];";

// Read original file
let content = fs.readFileSync(targetFile, 'utf8');

// Use regex to replace the projects array block
// It starts with '  projects: ProjectGroup[] = [' and ends with '  ];'
const regex = /  projects: ProjectGroup\[\] = \[[\s\S]*?  \];/;
const newContent = content.replace(regex, projectsContent);

fs.writeFileSync(targetFile, newContent);
console.log("Successfully updated realisation.ts with " + projectBlocks.length + " categories and all images.");
