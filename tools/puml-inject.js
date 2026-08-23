/**
 * puml-inject.js
 * Reemplaza placeholders PUML_PLACEHOLDER por URLs hex-encoded de plantuml.com,
 * tomando el código @startuml...@enduml del <details class="plantuml-source">
 * que acompaña al <img> dentro de cada <div class="plantuml-figure">.
 *
 * Uso: node tools/puml-inject.js content/lenguajes/go [...más directorios]
 */
const fs = require('fs');
const path = require('path');

const dirs = process.argv.slice(2).map((d) => path.resolve(d));
if (dirs.length === 0) {
  console.error('Uso: node tools/puml-inject.js <dir1> [dir2 ...]');
  process.exit(1);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const FIGURE_RE = /<div class="plantuml-figure">\s*<img src="PUML_PLACEHOLDER"([^>]*)\/>\s*<details class="plantuml-source"><summary>[^<]*<\/summary>\s*<pre><code class="language-plantuml">([\s\S]*?)<\/code><\/pre>\s*<\/details>\s*<\/div>/g;

let total = 0;
for (const dir of dirs) {
  for (const file of walk(dir)) {
    const original = fs.readFileSync(file, 'utf8');
    let changed = 0;
    const html = original.replace(FIGURE_RE, (m, imgAttrs, codeEscaped) => {
      const puml = codeEscaped
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
        .trim();
      if (!puml.startsWith('@startuml')) return m;
      const hex = Buffer.from(puml, 'utf8').toString('hex');
      changed++;
      return m.replace(
        /<img src="PUML_PLACEHOLDER"([^>]*)\/>/,
        `<img src="https://www.plantuml.com/plantuml/svg/~h${hex}"$1 />`
      );
    });
    if (changed > 0) {
      fs.writeFileSync(file, html, 'utf8');
      console.log(`  ${path.relative(process.cwd(), file)}: ${changed} diagrama(s)`);
      total += changed;
    }
  }
}
console.log(`Total: ${total} placeholder(s) reemplazados.`);
