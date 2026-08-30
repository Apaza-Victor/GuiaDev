# GuiaDev

Plataforma web de documentación técnica para aprender y consultar conceptos de programación, bases de datos, frameworks, ingeniería de software y más. Construida 100% con HTML, CSS y JavaScript vanilla, sin dependencias de build ni frameworks.

> **Sitio en línea:** https://apaza-victor.github.io/GuiaDev/ — desplegado en GitHub Pages con actualización automática en cada push a `main`.

## Características

- **737 lecciones** organizadas en **11 categorías** temáticas
- Navegación SPA basada en hash con scroll-spy y tabla de contenidos automática
- **Hub de acceso rápido en Recursos**: todo el directorio de enlaces en una sola vista con filtro instantáneo, sin navegar lección por lección
- **Glosario de programación**: 234 términos con buscador en vivo y filtros por letra y por tema
- Tema claro/oscuro con persistencia en `localStorage`
- Buscador global con atajo `Ctrl+K`
- Fondos animados con un efecto único por sección (Vanta.js, GitGraph.js, tsParticles y canvas propio), visibles solo en las vistas principales de cada categoría
- Resaltado de sintaxis por lenguaje con highlight.js: gramática PlantUML propia, alias para JSX/Vue/Astro/TOML/Blade y etiqueta de lenguaje con color distintivo en cada bloque
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
| GitGraph.js + tsParticles + Canvas 2D | Fondos temáticos (Git, Inglés, Recursos, Glosario) |
| highlight.js + `hljs-extra.js` | Resaltado de sintaxis (40+ lenguajes, gramática PlantUML propia) |
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
│   ├── recursos-hub.js     ← RecursosHub (extiende CategoryPage): directorio con búsqueda en vivo
│   ├── glosario.js         ← GlosarioPage (extiende CategoryPage): tarjetas con búsqueda y filtros
│   ├── glosario-data.js    ← 234 términos del glosario (GLOSSARY_DATA) y temas (GLOSSARY_THEMES)
│   ├── shared.js           ← Funciones compartidas GuiaDev.* (header nav, búsqueda, TOC)
│   ├── animations.js       ← Animaciones GuiaDevAnimations.*
│   ├── bg3d.js             ← Fondos animados por sección (Vanta/GitGraph/tsParticles)
│   ├── bg-custom.js        ← Efectos canvas propios (letras, palabras del Glosario)
│   └── hljs-extra.js       ← Alias de lenguajes y gramática PlantUML para highlight.js
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
│   ├── recursos.html
│   └── glosario.html
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
| Lenguajes | SQL (8), PHP (13), Java (11), Python (11), HTML (10), CSS (11), JavaScript (20), TypeScript (8), C# (8), C++ (8), Go (8), Rust (8), Kotlin (8), Swift (8), Bash (6), C (6), R (6), Ruby (6), Dart (6), Scala (6), Perl (6), Lua (6), Julia (6), F# (6), Elixir (6), Haskell (6), Groovy (6), PowerShell (6) | 224 |
| Frameworks | React (16), Astro (12), Vue 3 (18), Java Swing (6), Alpine.js (10), Laravel (17), Inertia (12), FastAPI (11), Spring (26) | 128 |
| Base de Datos | Oracle (12), MySQL (9), SQL Server (15) | 36 |
| UML | Fundamentos (2), Clases (5), Casos de Uso (5), Secuencia (5), Actividades (4), Componentes (5), Despliegue (5), Entidad-Relación (5), Objetos (2), Estados (2), Paquetes (2), Comunicación (2), Tiempos (2), Herramientas (3) | 49 |
| Entrevistas Laborales | JavaScript, React, Java, Spring, TypeScript | 15 |
| Ingeniería de Software | Fundamentos (6), Requerimientos (5), Ciclo de Vida (5), Diseño de Software (5), Pruebas (4), Gestión de Proyectos (4), Calidad (4) | 33 |
| Utilidades | Librerías (27), Bibliotecas (84), Python (12), Ziggy (6), NPM (1), PNPM (1) | 131 |
| Inglés | Básico A1-A2 (12), Intermedio B1-B2 (10), Avanzado C1-C2 (5), Habilidades Clave (6), Para Devs (6) | 39 |
| Control de Versiones | GitHub (7), GitLab (4), Bitbucket (3), Azure DevOps (4), Gitea (3), Clientes Gráficos (5), GitHub CLI (3), Git LFS (2), Calidad de Commits (3), CI/CD (4) | 38 |
| Recursos | Docs oficiales (2), Herramientas (2), Práctica (2), Comunidades (3), Aprendizaje (1), Software Gratuito (1), Multimedia (1), Hosting y Despliegue (1), APIs y Datos (1), Inteligencia Artificial (1), Referencia Rápida (2), Fundamentos (1), VS Code (1) | 19 |
| Glosario | Términos por tema: Fundamentos (36), POO (26), Web (21), Algoritmos (18), Paradigmas (18), Estructuras de Datos (17), Bases de Datos (15), Concurrencia (15), Arquitectura y Diseño (15), DevOps (14), Testing (11), Redes (12) | 234 términos* |
| **Total** | | **737** |

## Fondos animados por sección

Cada sección principal tiene un efecto único, sin repetirse. Los fondos solo se muestran en la vista general de cada categoría; al entrar a una subcategoría o lección se detienen para no distraer.

| Sección | Efecto | Tecnología |
|:---|:---|:---|
| Inicio | Globo 3D de partículas | Vanta.js + three.js |
| Lenguajes | Puntos conectados | Vanta.js + three.js |
| Frameworks | Topología de red | Vanta.js + p5.js |
| Base de Datos | Neblina atmosférica | Vanta.js + three.js |
| Git | Grafo de commits que crece con branches y merges | GitGraph.js |
| UML | Malla de nodos | Vanta.js + three.js |
| Ingeniería de Software | Halo luminoso | Vanta.js + three.js |
| Utilidades | Anillos concéntricos | Vanta.js + three.js |
| Entrevistas | Bandada de pájaros | Vanta.js + three.js |
| Inglés | Letras A-Z flotando con vaivén | Canvas 2D propio (`bg-custom.js`) |
| Recursos | Luciérnagas doradas | tsParticles (preset Firefly) |
| Glosario | Palabras y términos de programación flotando | Canvas 2D propio (`bg-custom.js`) |

Todos respetan el tema claro/oscuro, se desactivan con `prefers-reduced-motion` y en pantallas menores a 900px. Los efectos Vanta requieren WebGL; los de tsParticles y Canvas 2D no.

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
