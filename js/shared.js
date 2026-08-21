const HC = {
  formatContent(content) {
    if (!content) return '';

    const lines = content.split('\n');
    let html = '';
    let inCodeBlock = false;
    let codeContent = '';
    let codeLang = '';

    lines.forEach(line => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          html += `
            <div class="code-block">
              <div class="code-header">
                <span class="code-lang">${codeLang || 'code'}</span>
                <button class="code-copy" onclick="HC.copyCode(this)">
                  <i class="fa-regular fa-copy"></i>
                  Copiar
                </button>
              </div>
              <pre><code>${HC.escapeHtml(codeContent.trim())}</code></pre>
            </div>
          `;
          codeContent = '';
          codeLang = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLang = line.replace('```', '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      if (line.trim() === '') {
        html += '<br>';
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!html.includes('<ul>')) html += '<ul>';
        html += `<li>${line.substring(2)}</li>`;
      } else if (line.match(/^\d+\./)) {
        const text = line.replace(/^\d+\.\s*/, '');
        if (!html.includes('<ol>')) html += '<ol>';
        html += `<li>${text}</li>`;
      } else {
        if (html.includes('<ul>') && !html.includes('</ul>')) html += '</ul>';
        if (html.includes('<ol>') && !html.includes('</ol>')) html += '</ol>';

        let formatted = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');
        html += `<p>${formatted}</p>`;
      }
    });

    if (html.includes('<ul>') && !html.includes('</ul>')) html += '</ul>';
    if (html.includes('<ol>') && !html.includes('</ol>')) html += '</ol>';

    return html;
  },

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  copyCode(btn) {
    const code = btn.closest('.code-block').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
      btn.classList.add('copied');
      if (typeof GuiaDevAnimations !== 'undefined') {
        GuiaDevAnimations.codeCopied(btn);
      }
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('copied');
      }, 2000);
    });
  },

  moonIcon() {
    return '<i class="fa-solid fa-moon"></i>';
  },

  sunIcon() {
    return '<i class="fa-solid fa-sun"></i>';
  },

  renderTableOfContents(lesson) {
    if (!lesson || !lesson.sections) return '';

    return `
      <aside class="toc">
        <div class="toc-header"><i class="fa-solid fa-list"></i> En esta pagina</div>
        <nav class="toc-nav">
          <a class="toc-link active" href="#section-overview" onclick="document.getElementById('section-overview')?.scrollIntoView({behavior:'smooth'}); return false;">Descripcion General</a>
          ${lesson.sections
            .map(
              (section, i) => `
            <a class="toc-link" href="#section-${i}" onclick="document.getElementById('section-${i}')?.scrollIntoView({behavior:'smooth'}); return false;">${section}</a>
          `
            )
            .join('')}
        </nav>
      </aside>
    `;
  },

  highlightToc() {
    const sections = document.querySelectorAll('.doc-section h2[id]');
    const tocLinks = document.querySelectorAll('.toc-link');
    const content = document.getElementById('main-content');

    if (!sections.length || !tocLinks.length || !content) return;

    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        current = section.id;
      }
    });

    tocLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${current}`;
      if (isActive && !link.classList.contains('active')) {
        link.classList.add('active');
        if (typeof GuiaDevAnimations !== 'undefined') {
          GuiaDevAnimations.tocHighlight(link);
        }
      } else {
        link.classList.toggle('active', isActive);
      }
    });
  },

  PAGE_MAP: {
    db: 'pages/db.html',
    git: 'pages/git.html',
    lenguajes: 'pages/lenguajes.html',
    frameworks: 'pages/frameworks.html',
    uml: 'pages/uml.html',
    is: 'pages/is.html',
    utilities: 'pages/utilidades.html',
    entrevistas: 'pages/entrevistas.html',
    ingles: 'pages/ingles.html',
    recursos: 'pages/recursos.html'
  },

  getPageUrl(categoryId) {
    return HC.PAGE_MAP[categoryId] || '#';
  },

  CATEGORY_ORDER: [
    'lenguajes',
    'frameworks',
    'db',
    'git',
    'uml',
    'is',
    'utilities',
    'entrevistas',
    'ingles',
    'recursos'
  ],

  orderedCategories() {
    const order = HC.CATEGORY_ORDER;
    return [...DOCS_DATA.categories].sort(
      (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
    );
  },

  SHORT_TITLES: {
    db: 'Base de Datos',
    git: 'Git',
    lenguajes: 'Lenguajes',
    frameworks: 'Frameworks',
    uml: 'UML',
    is: 'Ing. de Software',
    utilities: 'Utilidades',
    entrevistas: 'Entrevistas',
    ingles: 'Inglés',
    recursos: 'Recursos'
  },

  renderHeaderNav(currentCategoryId, prefix = '') {
    const link = (href, label, active) => `
      <a class="header-nav-link${active ? ' active' : ''}" href="${href}">
        <span>${label}</span>
      </a>
    `;

    const items = [
      link(`${prefix}index.html`, 'Inicio', !currentCategoryId)
    ];

    HC.orderedCategories().forEach(cat => {
      const label = HC.SHORT_TITLES[cat.id] || cat.title;
      items.push(
        link(prefix + HC.getPageUrl(cat.id), label, cat.id === currentCategoryId)
      );
    });

    return `<nav class="header-nav">${items.join('')}</nav>`;
  },

  speak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 0.9;
    speechSynthesis.speak(utter);
  },

  toggleThemeState: null,

  initTheme() {
    const theme = localStorage.getItem('hc-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  },

  saveTheme(theme) {
    localStorage.setItem('hc-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  getTheme() {
    return localStorage.getItem('hc-theme') || 'light';
  },

  renderSearchModalOptions(searchCallback) {
    let modal = document.getElementById('search-modal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'search-modal-overlay';
    modal.innerHTML = `
      <div class="search-modal">
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="search-input" placeholder="Buscar en la documentacion..." autocomplete="off">
          <kbd>ESC</kbd>
        </div>
        <div id="search-results" class="search-results"></div>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
    document.body.appendChild(modal);

    document.getElementById('search-input').addEventListener('input', (e) => {
      searchCallback(e.target.value);
    });
  },

  renderSearchResultsHTML(matches, onSelect) {
    if (matches.length === 0) {
      return '<div class="search-empty">No se encontraron resultados</div>';
    }

    return matches
      .map(m => `
        <div class="search-result-item" onclick="${onSelect(m)}">
          <span class="search-result-icon"><i class="${m.category.icon}"></i></span>
          <div class="search-result-info">
            <div class="search-result-title">${m.lesson.title}</div>
            <div class="search-result-path">${m.category.title} &gt; ${m.subcategory.title}</div>
          </div>
        </div>
      `)
      .join('');
  },

  searchAllCategories(query) {
    const matches = [];
    const q = query.toLowerCase();

    DOCS_DATA.categories.forEach(cat => {
      cat.subcategories.forEach(sub => {
        sub.lessons.forEach(lesson => {
          if (
            lesson.title.toLowerCase().includes(q) ||
            lesson.content.toLowerCase().includes(q) ||
            sub.title.toLowerCase().includes(q)
          ) {
            matches.push({ category: cat, subcategory: sub, lesson });
          }
        });
      });
    });

    return matches;
  },

  searchCategory(category, query) {
    const matches = [];
    const q = query.toLowerCase();

    category.subcategories.forEach(sub => {
      sub.lessons.forEach(lesson => {
        if (
          lesson.title.toLowerCase().includes(q) ||
          lesson.content.toLowerCase().includes(q)
        ) {
          matches.push({ subcategory: sub, lesson });
        }
      });
    });

    return matches;
  },

  renderLessonSections(lesson, sub, formatter) {
    const hasFullContent = lesson.fullContent;

    return `
      <div class="doc-body">
        <div class="doc-section">
          <h2 id="section-overview">Descripcion General</h2>
          <p>${lesson.content}</p>
        </div>

        ${lesson.sections
          .map(
            (section, i) => `
          <div class="doc-section">
            <h2 id="section-${i}">${section}</h2>
            ${hasFullContent && lesson.fullContent[section] ? `
              ${formatter(lesson.fullContent[section])}
            ` : `
              <p>En esta seccion aprenderas sobre <strong>${section}</strong> en el contexto de ${sub.title}.</p>
            `}
          </div>
        `
          )
          .join('')}

        <div class="doc-section tip-section">
          <div class="tip-header"><i class="fa-solid fa-lightbulb"></i> Consejo</div>
          <p>Practica estos conceptos escribiendo codigo. La mejor manera de aprender es experimentando.</p>
        </div>

        <div class="doc-section exercise-section">
          <div class="exercise-header"><i class="fa-solid fa-dumbbell"></i> Ejercicio</div>
          <p>Intenta crear un proyecto pequeno aplicando lo que has aprendido en esta leccion.</p>
        </div>
      </div>
    `;
  }
};
