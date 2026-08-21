# GuiaDev

Plataforma web de documentación técnica para aprender y consultar conceptos de programación, bases de datos, frameworks, ingeniería de software y más. Construida 100% con HTML, CSS y JavaScript vanilla, sin dependencias de build ni frameworks.

## Características

- **408 lecciones** organizadas en **10 categorías** temáticas
- Navegación SPA basada en hash con scroll-spy y tabla de contenidos automática
- Tema claro/oscuro con persistencia en `localStorage`
- Buscador global con atajo `Ctrl+K`
- Fondo 3D animado por sección (Vanta.js) con detección de WebGL y modo reducido
- Iconos Font Awesome 6 y animaciones con anime.js
- Contenido externalizado: cada lección vive en su propio HTML dentro de `content/` y se carga vía `fetch()`
- Componentes de documentación: bloques de código con copiar, tabs, asides, steps, badges, diagramas PlantUML, demos HTML embebidas y pronunciación con Web Speech API
- Diseño responsive con menú móvil

## Tecnologías

| Tecnología | Uso |
|:---|:---|
| HTML5 / CSS3 / JavaScript vanilla | Base de la aplicación |
| Font Awesome 6 | Iconografía |
| anime.js | Animaciones |
| Vanta.js + three.js | Fondos 3D por sección |
| highlight.js | Resaltado de sintaxis |
| Web Speech API | Pronunciación (sección Inglés) |

## Estructura

```
GuiaDev/
├── index.html              ← Home (SPA, clase GuiaDevApp)
├── css/
│   └── style.css           ← Estilos globales (tema claro/oscuro)
├── js/
│   ├── data.js             ← Registro central: categorías, subcategorías y lecciones
│   ├── app.js              ← SPA del home
│   ├── page.js             ← Clase CategoryPage: carga lecciones desde content/ vía fetch
│   ├── shared.js           ← Funciones compartidas GuiaDev.* (header nav, búsqueda, TOC)
│   ├── animations.js       ← Animaciones GuiaDevAnimations.*
│   └── bg3d.js             ← Fondo 3D Vanta.js por sección
├── pages/                  ← Una página por categoría (usan CategoryPage)
│   ├── entrevistas.html
│   ├── db.html
│   ├── git.html
│   ├── lenguajes.html
│   ├── frameworks.html
│   ├── uml.html
│   ├── is.html
│   ├── utilidades.html
│   ├── ingles.html
│   └── recursos.html
├── content/                ← Contenido: content/{categoria}/{subcategoria}/{leccion}.html
├── migrate-content.js      ← Verificación y reparación de contenido
└── README.md
```

## Ejecución local

Es un sitio estático: basta con servirlo con cualquier servidor HTTP.

```bash
# Con Python
python -m http.server 8080

# Con Node (npx)
npx serve .

# Con PHP
php -S localhost:8080
```

Luego abre `http://localhost:8080`.

## Categorías

| Categoría | Subcategorías | Lecciones |
|:---|:---|:---|
| Lenguajes | SQL (8), PHP (13), Java (11), Python (11), HTML (10), CSS (11), JavaScript (20), TypeScript (8), C# (8), C++ (8), Go (8), Rust (8), Kotlin (8), Swift (8), Bash (6) | 146 |
| Frameworks | React (16), Astro (12), Vue 3 (18), Java Swing (6), Alpine.js (10), Laravel (17), Inertia (12), FastAPI (11), Spring (26) | 128 |
| Base de Datos | Oracle (12), MySQL (9), SQL Server (15) | 36 |
| UML | Clases, Casos de Uso, Secuencia, Actividades, Componentes, Despliegue, Entidad-Relación | 27 |
| Entrevistas Laborales | JavaScript, React, Java, Spring, TypeScript | 15 |
| Ingeniería de Software | Fundamentos (4), Requerimientos (5), Ciclo de Vida (3) | 12 |
| Utilidades | Librerías (9), Ziggy (6), NPM (1), PNPM (1) | 17 |
| Inglés | Básico A1-A2 | 12 |
| Control de Versiones | GitHub | 7 |
| Recursos | Docs oficiales (2), Herramientas (2), Práctica (2), Comunidades (2) | 8 |
| **Total** | | **408** |

## Formato de una lección

Cada lección se define en dos lugares:

1. **`js/data.js`** — metadatos: `id`, `title`, `content` (descripción corta), `sections` (títulos para el TOC) y `contentFile`.
2. **`content/.../{id}.html`** — el contenido, con una `<section id="slug">` por cada sección:

```html
<section id="mi-seccion">
  <h2>Mi sección</h2>
  <div class="doc-content">
    <p>...</p>
    <pre><code class="language-java">...</code></pre>
  </div>
</section>
```

> Importante: los ids de las secciones deben ser slugs únicos; `page.js` los usa para el TOC y el scroll-spy.

## Herramientas (Node)

```bash
node migrate-content.js verify   # valida que todos los contentFile existan y estén limpios
node migrate-content.js repair   # repara HTML generado (<p> dentro de <pre>, <li> huérfanos)
node migrate-content.js extract  # extrae fullContent de data.js hacia content/
```

## Agregar contenido

1. Crear el archivo HTML en `content/{categoria}/{subcategoria}/{id}.html` con el formato de sección anterior.
2. Registrar la lección en `js/data.js` (id, título, descripción, sections y contentFile).
3. Para una subcategoría nueva, agregarla dentro de su categoría con `id`, `title`, `icon` (clase Font Awesome) y el arreglo `lessons`.
4. Ejecutar `node migrate-content.js verify` para validar.
