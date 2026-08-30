class CategoryPage {
  constructor(categoryId) {
    this.categoryId = categoryId;
    this.category = DOCS_DATA.categories.find((c) => c.id === categoryId);
    this.currentSub = null;
    this.currentLesson = null;
    this.theme = localStorage.getItem("gd-theme") || "light";
    this.mobileNavOpen = false;
    this.contentCache = {};
    this.init();
  }

  init() {
    this.applyTheme();
    this.handleHashNavigation();
    this.render();
    this.bindGlobalEvents();
  }

  handleHashNavigation() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const parts = hash.split("/");
      if (parts.length === 1) {
        this.selectSubcategory(parts[0]);
      } else if (parts.length === 2) {
        this.selectLesson(parts[0], parts[1]);
      }
    }
  }

  showCategoryOverview() {
    this.currentSub = null;
    this.currentLesson = null;
    history.replaceState(null, "", window.location.pathname);
    this.render();
  }

  renderSubPills() {
    return `
      <div class="sub-pills">
        ${this.category.subcategories
          .map(
            (s) => `
          <a class="sub-pill${s.id === this.currentSub ? " active" : ""}"
             href="#${s.id}"
             onclick="page.selectSubcategory('${s.id}'); return false;">
            <i class="${s.icon}"></i> ${s.title}
          </a>
        `
          )
          .join("")}
      </div>
    `;
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("gd-theme", this.theme);
    this.applyTheme();
    this.updateThemeToggle();
    const icon = document.querySelector("#theme-toggle i");
    if (typeof GuiaDevAnimations !== 'undefined') {
      GuiaDevAnimations.themeToggle(icon);
    }
  }

  updateThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.innerHTML = this.theme === "dark" ? this.sunIcon() : this.moonIcon();
    }
  }

  moonIcon() {
    return GuiaDev.moonIcon();
  }

  sunIcon() {
    return GuiaDev.sunIcon();
  }

  bindGlobalEvents() {
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        this.toggleSearch();
      }
      if (e.key === "Escape") this.closeSearch();
    });
    window.addEventListener("hashchange", () => this.handleRouteChange());
  }

  handleRouteChange() {
    const parts = window.location.hash.slice(1).split("/").filter(Boolean);

    if (parts.length === 0) {
      if (this.currentSub || this.currentLesson) this.showCategoryOverview();
      return;
    }
    if (parts.length === 1 && parts[0] !== this.currentSub) {
      this.selectSubcategory(parts[0]);
    } else if (parts.length === 2 && parts[1] !== this.currentLesson) {
      this.selectLesson(parts[0], parts[1]);
    }
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      this.renderSearchModal();
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
        if (typeof GuiaDevAnimations !== 'undefined') {
          GuiaDevAnimations.searchModalOpen();
        }
      }, 100);
    } else {
      this.closeSearch();
    }
  }

  closeSearch() {
    this.searchOpen = false;
    const modal = document.getElementById("search-modal");
    if (modal) modal.remove();
  }

  renderSearchModal() {
    let modal = document.getElementById("search-modal");
    if (modal) modal.remove();

    modal = document.createElement("div");
    modal.id = "search-modal";
    modal.className = "search-modal-overlay";
    modal.innerHTML = `
      <div class="search-modal">
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="search-input" placeholder="Buscar en ${this.category.title}..." autocomplete="off">
          <kbd>ESC</kbd>
        </div>
        <div id="search-results" class="search-results"></div>
      </div>
    `;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeSearch();
    });
    document.body.appendChild(modal);

    document.getElementById("search-input").addEventListener("input", (e) => {
      this.performSearch(e.target.value);
    });
  }

  performSearch(query) {
    const results = document.getElementById("search-results");
    if (!query.trim()) {
      results.innerHTML = `<div class="search-empty">Escribe para buscar...</div>`;
      return;
    }

    const matches = GuiaDev.searchCategory(this.category, query);

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">No se encontraron resultados para "${query}"</div>`;
      return;
    }

    results.innerHTML = matches
      .map(
        (m) => `
        <div class="search-result-item" onclick="page.selectLesson('${m.subcategory.id}', '${m.lesson.id}'); page.closeSearch();">
          <span class="search-result-icon"><i class="${this.category.icon}"></i></span>
          <div class="search-result-info">
            <div class="search-result-title">${m.lesson.title}</div>
            <div class="search-result-path">${m.subcategory.title}</div>
          </div>
        </div>
      `
      )
      .join("");

    if (typeof GuiaDevAnimations !== 'undefined') {
      GuiaDevAnimations.searchResults(results.querySelectorAll('.search-result-item'));
    }
  }

  selectSubcategory(subId) {
    this.currentSub = subId;
    this.currentLesson = null;
    window.location.hash = subId;
    this.render();
  }

  async selectLesson(subId, lessonId) {
    const prevLesson = this.currentLesson;
    this.currentSub = subId;
    this.currentLesson = lessonId;
    window.location.hash = `${subId}/${lessonId}`;
    this.closeSearch();
    if (this.mobileNavOpen) this.toggleMobileNav();
    this.render();

    if (prevLesson && prevLesson !== lessonId && typeof GuiaDevAnimations !== 'undefined') {
      const direction = this.getLessonDirection(subId, lessonId, prevLesson);
      GuiaDevAnimations.lessonNavigation(direction);
    }

    this.scrollToTop();

    const sub = this.category?.subcategories.find(s => s.id === subId);
    const lesson = sub?.lessons.find(l => l.id === lessonId);
    if (lesson?.contentFile) {
      await this.loadAndInjectContent(lesson);
    }
  }

  async loadAndInjectContent(lesson) {
    const html = await this.loadLessonContent(lesson);
    if (this.currentLesson !== lesson.id) return;
    const container = document.getElementById('lesson-external-content');
    if (!container) return;

    if (!html) {
      container.innerHTML = `
        <div class="doc-section">
          <h2>Contenido no disponible</h2>
          <p>No se pudo cargar el contenido de esta leccion. Verifica tu conexion e intenta recargar la pagina.</p>
        </div>
      `;
      return;
    }

    const parsed = this.parseSectionsFromHTML(html);
    container.innerHTML = parsed.map(sec => `
      <div class="doc-section">
        <h2 id="section-${sec.id}">${sec.title}</h2>
        ${sec.html}
      </div>
    `).join('');
    this.rebuildToc(parsed);
    if (typeof GuiaDev !== 'undefined' && typeof GuiaDev.highlightCode === 'function') {
      container.querySelectorAll('pre code').forEach(block => GuiaDev.highlightCode(block));
    }
  }

  rebuildToc(sections) {
    const tocNav = document.querySelector('.toc-nav');
    if (!tocNav || !sections.length) return;
    tocNav.innerHTML = `
      <a class="toc-link active" href="#section-overview" onclick="document.getElementById('section-overview')?.scrollIntoView({behavior:'smooth'}); return false;">Descripcion General</a>
      ${sections.map(sec => `
        <a class="toc-link" href="#section-${sec.id}" onclick="document.getElementById('section-${sec.id}')?.scrollIntoView({behavior:'smooth'}); return false;">${sec.title}</a>
      `).join('')}
    `;
  }

  getLessonDirection(subId, lessonId, prevLessonId) {
    const sub = this.category?.subcategories.find((s) => s.id === subId);
    if (!sub) return 'next';
    const lessons = sub.lessons;
    const newIdx = lessons.findIndex((l) => l.id === lessonId);
    const prevIdx = prevLessonId ? lessons.findIndex((l) => l.id === prevLessonId) : -1;
    if (newIdx === -1 || prevIdx === -1) return newIdx > 0 ? 'next' : 'prev';
    return newIdx > prevIdx ? 'next' : 'prev';
  }

  scrollToTop() {
    const content = document.getElementById("main-content");
    if (content) content.scrollTop = 0;
  }

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const nav = document.querySelector(".header-nav");
    if (nav) nav.classList.toggle("open", this.mobileNavOpen);
  }

  render() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div class="layout">
        <div class="main-wrapper">
          ${this.renderHeader()}
          <div class="main-area">
            ${this.renderContent()}
          </div>
        </div>
      </div>
    `;
    this.bindScrollEvents();
    this.triggerPageAnimations();
  }

  triggerPageAnimations() {
    if (typeof GuiaDevAnimations === 'undefined') return;
    requestAnimationFrame(() => {
      if (!this.currentSub) {
        GuiaDevAnimations.categoryCards();
      } else if (!this.currentLesson) {
        GuiaDevAnimations.lessonListEntrance();
      }
      GuiaDevAnimations.breadcrumbEntrance();
    });
  }

  renderHeader() {
    return `
      <header class="header">
        <div class="header-left">
          <button class="btn-icon mobile-menu-btn" onclick="page.toggleMobileNav()">
            <i class="fa-solid fa-bars"></i>
          </button>
          <a class="logo" href="../index.html">
            <span class="logo-icon"><i class="fa-solid fa-compass"></i></span>
            <span class="logo-text">GuiaDev</span>
          </a>
        </div>
        ${GuiaDev.renderHeaderNav(this.category.id, '../')}
        <div class="header-right">
          <button class="btn-icon" onclick="page.toggleSearch()" title="Buscar (Ctrl+K)">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="btn-icon" id="theme-toggle" onclick="page.toggleTheme()">
            ${this.theme === "dark" ? this.sunIcon() : this.moonIcon()}
          </button>
        </div>
      </header>
    `;
  }

  renderContent() {
    const sub = this.category.subcategories.find((s) => s.id === this.currentSub);
    const lesson = sub?.lessons.find((l) => l.id === this.currentLesson);

    if (!sub) {
      return this.renderCategoryOverview();
    }

    if (!lesson) {
      return this.renderSubcategoryOverview(sub);
    }

    return this.renderLessonPage(sub, lesson);
  }

  renderCategoryOverview() {
    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="hero">
            <div class="hero-badge"><i class="${this.category.icon}"></i> ${this.category.title}</div>
            <h1 class="hero-title">${this.category.title}</h1>
            <p class="hero-subtitle">Explora todas las lecciones de ${this.category.title}</p>
          </div>

          <section class="categories-section">
            <div class="categories-grid">
              ${this.category.subcategories
                .map(
                  (sub) => `
                <div class="category-card" onclick="page.selectSubcategory('${sub.id}')" style="--card-accent: ${this.category.color}">
                  <div class="category-card-header">
                    <span class="category-card-icon"><i class="${sub.icon}"></i></span>
                    <span class="category-card-count">${sub.lessons.length} lecciones</span>
                  </div>
                  <h3 class="category-card-title">${sub.title}</h3>
                  <div class="category-card-arrow">
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </section>
        </main>
      </div>
    `;
  }

  renderSubcategoryOverview(sub) {
    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="doc-breadcrumb">
            <a href="../index.html"><i class="fa-solid fa-house"></i> Inicio</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <a href="#" onclick="page.showCategoryOverview(); return false;">&nbsp;<i class="${this.category.icon}"></i> ${this.category.title}</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <span><i class="${sub.icon}"></i> ${sub.title}</span>
          </div>

          <div class="doc-header">
            <h1 class="doc-title"><i class="${sub.icon}"></i> ${sub.title}</h1>
          </div>

          ${this.renderSubPills()}

          <div class="doc-body">
            <div class="doc-section">
              <h2>Lecciones disponibles</h2>
              <div class="lessons-list">
                ${sub.lessons
                  .map(
                    (lesson) => `
                  <a class="lesson-card" href="#${sub.id}/${lesson.id}" onclick="page.selectLesson('${sub.id}', '${lesson.id}'); return false;">
                    <div class="lesson-card-content">
                      <h3>${lesson.title}</h3>
                      <p>${lesson.content}</p>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </main>
      </div>
    `;
  }

  renderLessonPage(sub, lesson) {
    const currentLessonIndex = sub.lessons.findIndex((l) => l.id === this.currentLesson);
    const prevLesson = currentLessonIndex > 0 ? sub.lessons[currentLessonIndex - 1] : null;
    const nextLesson = currentLessonIndex < sub.lessons.length - 1 ? sub.lessons[currentLessonIndex + 1] : null;

    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="doc-breadcrumb">
            <a href="../index.html"><i class="fa-solid fa-house"></i> Inicio</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <a href="#" onclick="page.showCategoryOverview(); return false;">&nbsp;<i class="${this.category.icon}"></i> ${this.category.title}</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <a href="#${sub.id}" onclick="page.selectSubcategory('${sub.id}'); return false;"><i class="${sub.icon}"></i> ${sub.title}</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <span>${lesson.title}</span>
          </div>

          <div class="doc-header">
            <h1 class="doc-title">${lesson.title}</h1>
            <p class="doc-description">${lesson.content}</p>
          </div>

          ${this.renderSubPills()}

          <div class="doc-body">
            ${lesson.contentFile ? `
              <div class="doc-section">
                <h2 id="section-overview">Descripcion General</h2>
                <p>${lesson.content}</p>
              </div>
              <div id="lesson-external-content">
                <div class="doc-section loading-content">
                  <div class="spinner"></div>
                  <p>Cargando contenido...</p>
                </div>
              </div>
            ` : `
            <div class="doc-section">
              <h2 id="section-overview">Descripcion General</h2>
              <p>${lesson.content}</p>
            </div>

            ${lesson.sections
              .map(
                (section, i) => `
              <div class="doc-section">
                <h2 id="section-${i}">${section}</h2>
                ${lesson.fullContent && lesson.fullContent[section] ? `
                  ${this.formatContent(lesson.fullContent[section])}
                ` : `
                  <p>En esta seccion aprenderas sobre <strong>${section}</strong> en el contexto de ${sub.title}.</p>
                `}
              </div>
            `
              )
              .join("")}
            `}

            <div class="doc-section tip-section">
              <div class="tip-header"><i class="fa-solid fa-lightbulb"></i> Consejo</div>
              <p>Practica estos conceptos escribiendo codigo. La mejor manera de aprender es experimentando.</p>
            </div>

            <div class="doc-section exercise-section">
              <div class="exercise-header"><i class="fa-solid fa-dumbbell"></i> Ejercicio</div>
              <p>Intenta crear un proyecto pequeno aplicando lo que has aprendido en esta leccion.</p>
            </div>
          </div>

          <div class="doc-navigation">
            ${prevLesson
              ? `
              <a class="nav-prev" href="#${sub.id}/${prevLesson.id}" onclick="page.selectLesson('${sub.id}', '${prevLesson.id}'); return false;">
                <i class="fa-solid fa-arrow-left"></i>
                <div>
                  <span class="nav-prev-label">Anterior</span>
                  <span class="nav-prev-title">${prevLesson.title}</span>
                </div>
              </a>
            `
              : "<div></div>"}
            ${nextLesson
              ? `
              <a class="nav-next" href="#${sub.id}/${nextLesson.id}" onclick="page.selectLesson('${sub.id}', '${nextLesson.id}'); return false;">
                <div>
                  <span class="nav-next-label">Siguiente</span>
                  <span class="nav-next-title">${nextLesson.title}</span>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            `
              : "<div></div>"}
          </div>
        </main>

        ${this.renderTableOfContents(lesson)}
      </div>
    `;
  }

  renderTableOfContents(lesson) {
    return GuiaDev.renderTableOfContents(lesson);
  }

  formatContent(content) {
    return GuiaDev.formatContent(content);
  }

  async loadLessonContent(lesson) {
    if (!lesson.contentFile) return null;
    if (this.contentCache[lesson.id]) return this.contentCache[lesson.id];

    try {
      const response = await fetch(`../${lesson.contentFile}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      this.contentCache[lesson.id] = html;
      return html;
    } catch (e) {
      console.warn(`No se pudo cargar ${lesson.contentFile}:`, e);
      return null;
    }
  }

  parseSectionsFromHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const sections = [];
    doc.querySelectorAll('section[id]').forEach(sec => {
      const h2 = sec.querySelector('h2');
      const clone = sec.cloneNode(true);
      if (h2) clone.querySelector('h2').remove();
      sections.push({
        id: sec.getAttribute('id'),
        title: h2 ? h2.textContent.trim() : sec.getAttribute('id'),
        html: clone.innerHTML
      });
    });
    return sections;
  }

  escapeHtml(text) {
    return GuiaDev.escapeHtml(text);
  }

  copyCode(btn) {
    GuiaDev.copyCode(btn);
  }

  bindScrollEvents() {
    GuiaDev.createBackToTop();
    const content = document.getElementById("main-content");
    if (content) {
      let ticking = false;
      content.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          this.highlightToc();
          GuiaDev.syncBackToTop();
        });
      }, { passive: true });
    }
  }

  highlightToc() {
    GuiaDev.highlightToc();
  }
}
