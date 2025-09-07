const fs = require('fs');
const path = 'cypress/reports/mochawesome/index.html';
const html = fs.readFileSync(path, 'utf8');
const date = new Date().toISOString();
const insert = `<div style="background:#e3e3e3;padding:10px;"><h2>Reporte generado: ${date}</h2></div>`;
const result = html.replace('<body>', `<body>${insert}`);
fs.writeFileSync(path, result);