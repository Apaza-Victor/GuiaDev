/**
 * migrate-content.js
 * Herramienta de verificación y reparación de contenido de GuiaDev.
 *
 * Modos:
 *   node migrate-content.js extract   -> extrae fullContent de data.js hacia archivos HTML
 *                                        en content/ y reescribe data.js con solo estructura + contentFile.
 *   node migrate-content.js repair    -> repara los HTML existentes:
 *                                        - elimina <p>/</p> inyectados dentro de <pre><code>
 *                                        - envuelve secuencias de <li> huerfanos en <ul>
 *   node migrate-content.js verify    -> valida que todos los contentFile existan y estén limpios.
 */
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);
const CONTENT_DIR = path.join(BASE, 'content');
const DATA_FILE = path.join(BASE, 'js', 'data.js');

const mode = process.argv[2] || 'verify';

function readData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const match = raw.match(/const DOCS_DATA\s*=\s*(\{[\s\S]*?\n\};)/);
  if (!match) throw new Error('No se encontró DOCS_DATA en data.js');
  const dataStr = raw.replace(/const DOCS_DATA = /, '').replace(/;\s*const STATS[\s\S]*/, ';');
  return new Function('return ' + dataStr)();
}

/* ------------------------------------------------------------------ */
/* EXTRACT: fullContent (markdown) -> HTML por secciones               */
/* ------------------------------------------------------------------ */

function escapeCode(code) {
  return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function convertMarkdownToHTML(md) {
  if (!md || !md.trim()) return '<p>Contenido pendiente.</p>';

  // 1. Extraer bloques de codigo ANTES de cualquier otro reemplazo,
  //    para que el paso de parrafos no los toque (bug de la v1).
  const codeBlocks = [];
  md = md.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = escapeCode(code);
    const langAttr = lang ? ` class="language-${lang}"` : '';
    codeBlocks.push(`<pre><code${langAttr}>${escaped}</code></pre>`);
    return `\u0000CODE${codeBlocks.length - 1}\u0000`;
  });

  let html = md;

  // Tablas (antes de listas y parrafos)
  html = html.replace(/(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g, (m, header, sep, body) => {
    const th = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row =>
      `<tr>${row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
    ).join('');
    return `<table><thead><tr>${th}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  // Inline: bold, italic y codigo
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|\s)\*([^*]+)\*(?=\s|$|[.,;:!?])/g, '$1<em>$2</em>');

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // Listas: marcar items para envolverlos en <ul>/<ol> despues
  html = html.replace(/^- (.+)$/gm, '<li data-list="ul">$1</li>');
  html = html.replace(/^\d+\. (.+)$/gm, '<li data-list="ol">$1</li>');

  // Parrafos solo para lineas de texto plano (los <li>, headers, tablas y
  // placeholders de codigo ya empiezan con "<" o son marcadores)
  html = html.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<') || trimmed.startsWith('\u0000')) return line;
    return `<p>${trimmed}</p>`;
  }).join('\n');

  // Envolver corridas de <li> del mismo tipo en su lista contenedora
  html = html.replace(/(?:<li data-list="(ul|ol)">[\s\S]*?<\/li>\n?)+/g, (block, type) => {
    const tag = type === 'ol' ? 'ol' : 'ul';
    const inner = block.replace(/ data-list="(ul|ol)"/g, '');
    return `<${tag}>\n${inner.trimEnd()}\n</${tag}>`;
  });

  // Restaurar bloques de codigo
  html = html.replace(/\u0000CODE(\d+)\u0000/g, (_, i) => codeBlocks[Number(i)]);

  return html;
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
    .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function lessonToHTML(lesson) {
  const sections = lesson.sections || Object.keys(lesson.fullContent);
  return sections.map(secName => {
    const htmlContent = convertMarkdownToHTML(lesson.fullContent[secName]);
    return `  <section id="${slugify(secName)}">
    <h2>${secName}</h2>
    <div class="doc-content">
${htmlContent}
    </div>
  </section>`;
  }).join('\n\n');
}

function extract() {
  const data = readData();
  let htmlCount = 0;
  let sectionCount = 0;

  for (const cat of data.categories) {
    for (const sub of cat.subcategories || []) {
      for (const lesson of sub.lessons || []) {
        if (!lesson.fullContent || Object.keys(lesson.fullContent).length === 0) continue;

        const subDir = path.join(CONTENT_DIR, cat.id, sub.id);
        fs.mkdirSync(subDir, { recursive: true });

        const fullHTML = `<!-- ${lesson.title} - ${sub.title} (${cat.title}) -->
<!-- Auto-generated from data.js via migrate-content.js - DO NOT EDIT MANUALLY -->
${lessonToHTML(lesson)}
`;
        const filename = `${lesson.id}.html`;
        fs.writeFileSync(path.join(subDir, filename), fullHTML, 'utf8');
        htmlCount++;
        sectionCount += (lesson.sections || Object.keys(lesson.fullContent)).length;

        delete lesson.fullContent;
        lesson.contentFile = `content/${cat.id}/${sub.id}/${filename}`;
      }
    }
  }

  rewriteDataJs(data);
  console.log(`Extracción completada:`);
  console.log(`  - ${htmlCount} archivos HTML creados en content/`);
  console.log(`  - ${sectionCount} secciones extraídas`);
  console.log(`  - data.js reescrito con solo estructura + contentFile`);
}

function rewriteDataJs(data) {
  const categoriesStr = JSON.stringify(data.categories, null, 2);
  const totalLessons = data.categories.reduce((acc, c) =>
    acc + (c.subcategories || []).reduce((a, s) => a + (s.lessons || []).length, 0), 0);
  const newData = `const DOCS_DATA = {
  categories: ${categoriesStr}
};

const STATS = {
  lessons: "${totalLessons}",
  languages: "${data.categories.find(c => c.id === 'lenguajes')?.subcategories?.length || 0}",
  frameworks: "${data.categories.find(c => c.id === 'frameworks')?.subcategories?.length || 0}",
  diagrams: "${data.categories.find(c => c.id === 'uml')?.subcategories?.reduce((a, s) => a + (s.lessons || []).length, 0) || 0}"
};
`;
  fs.writeFileSync(DATA_FILE, newData, 'utf8');
}

/* ------------------------------------------------------------------ */
/* REPAIR: limpiar HTML ya generado                                    */
/* ------------------------------------------------------------------ */

function repairHtml(html) {
  let changes = 0;

  // 1. Quitar <p>/</p> dentro de bloques <pre>...</pre>
  html = html.replace(/<pre>([\s\S]*?)<\/pre>/g, (m, inner) => {
    const cleaned = inner.replace(/<p>|<\/p>/g, '');
    if (cleaned !== inner) changes++;
    return `<pre>${cleaned}</pre>`;
  });

  // 2. Envolver corridas de <li> huerfanos en <ul>
  //    (este contenido nunca genera <ul> legitimo, asi que toda corrida
  //    de <li> consecutivos fuera de una lista se envuelve)
  html = html.replace(/(^|\n)((?:[ \t]*<li>[\s\S]*?<\/li>\n)+)/g, (m, prefix, block) => {
    // Si la linea anterior abrio un <ul>/<ol>, no tocar
    const before = html.slice(0, html.indexOf(m));
    if (/<(ul|ol)[^>]*>\s*$/.test(before)) return m;
    changes++;
    return `${prefix}<ul>\n${block}</ul>`;
  });

  return { html, changes };
}

function repair() {
  const files = walk(CONTENT_DIR);
  let touched = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const { html, changes } = repairHtml(original);
    if (changes > 0) {
      fs.writeFileSync(file, html, 'utf8');
      touched++;
      console.log(`  reparado: ${path.relative(BASE, file)} (${changes} cambios)`);
    }
  }
  console.log(`Reparación completada: ${touched}/${files.length} archivos modificados.`);
}

function verify() {
  const data = readData();
  let missing = 0;
  let dirty = 0;
  let total = 0;

  for (const cat of data.categories) {
    for (const sub of cat.subcategories || []) {
      for (const lesson of sub.lessons || []) {
        if (!lesson.contentFile) continue;
        total++;
        const file = path.join(BASE, lesson.contentFile);
        if (!fs.existsSync(file)) {
          missing++;
          console.error(`  FALTA: ${lesson.contentFile}`);
          continue;
        }
        const c = fs.readFileSync(file, 'utf8');
        let dirtyPre = false;
        c.replace(/<pre>([\s\S]*?)<\/pre>/g, (m, inner) => {
          if (/<p>|<\/p>/.test(inner)) dirtyPre = true;
          return m;
        });
        if (dirtyPre) {
          dirty++;
          console.error(`  SUCIO (<p> en <pre>): ${lesson.contentFile}`);
        }
      }
    }
  }

  console.log(`Verificación: ${total} lecciones referenciadas, ${missing} faltantes, ${dirty} con código corrupto.`);
  process.exit(missing || dirty ? 1 : 0);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

switch (mode) {
  case 'extract': extract(); break;
  case 'repair': repair(); break;
  case 'verify': verify(); break;
  default:
    console.error('Modo desconocido. Usa: extract | repair | verify');
    process.exit(1);
}
