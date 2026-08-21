class GuiaDevApp {
  constructor() {
    this.currentPage = "home";
    this.currentCategory = null;
    this.currentSubcategory = null;
    this.currentLesson = null;
    this.theme = localStorage.getItem("gd-theme") || "light";
    this.searchOpen = false;
    this.mobileNavOpen = false;
    this.init();
  }

  init() {
    this.applyTheme();
    this.render();
    this.bindGlobalEvents();
    this.handleHashNavigation();
  }

  handleHashNavigation() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const parts = hash.split("/");
      if (parts.length === 1) {
        this.navigateTo(parts[0]);
      } else if (parts.length === 2) {
        this.navigateToSubcategory(parts[0], parts[1]);
      } else if (parts.length === 3) {
        this.navigateToLesson(parts[0], parts[1], parts[2]);
      }
    }
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
      if (e.key === "Escape") {
        this.closeSearch();
      }
    });
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
          <input type="text" id="search-input" placeholder="Buscar en la documentacion..." autocomplete="off">
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

    const matches = GuiaDev.searchAllCategories(query);

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">No se encontraron resultados para "${query}"</div>`;
      return;
    }

    results.innerHTML = GuiaDev.renderSearchResultsHTML(matches, (m) => {
      return `app.navigateToLesson('${m.category.id}', '${m.subcategory.id}', '${m.lesson.id}')`;
    });

    if (typeof GuiaDevAnimations !== 'undefined') {
      GuiaDevAnimations.searchResults(results.querySelectorAll('.search-result-item'));
    }
  }

  navigateTo(page) {
    this.currentPage = page;
    this.currentCategory = null;
    this.currentSubcategory = null;
    this.currentLesson = null;
    window.location.hash = page === "home" ? "" : page;
    this.render();
  }

  navigateToSubcategory(categoryId, subcategoryId) {
    this.currentPage = "doc";
    this.currentCategory = categoryId;
    this.currentSubcategory = subcategoryId;
    this.currentLesson = null;
    window.location.hash = `${categoryId}/${subcategoryId}`;

    this.render();
  }

  navigateToLesson(categoryId, subcategoryId, lessonId) {
    const prevLesson = this.currentLesson;
    this.currentPage = "doc";
    this.currentCategory = categoryId;
    this.currentSubcategory = subcategoryId;
    this.currentLesson = lessonId;
    window.location.hash = `${categoryId}/${subcategoryId}/${lessonId}`;

    this.closeSearch();
    if (this.mobileNavOpen) this.toggleMobileNav();

    this.render();

    if (prevLesson && prevLesson !== lessonId && typeof GuiaDevAnimations !== 'undefined') {
      const direction = this.getLessonDirection(categoryId, subcategoryId, lessonId);
      GuiaDevAnimations.lessonNavigation(direction);
    }

    this.scrollToTop();
  }

  getLessonDirection(categoryId, subcategoryId, lessonId) {
    const cat = DOCS_DATA.categories.find((c) => c.id === categoryId);
    const sub = cat?.subcategories.find((s) => s.id === subcategoryId);
    if (!sub) return 'next';
    const idx = sub.lessons.findIndex((l) => l.id === lessonId);
    return idx > 0 ? 'next' : 'prev';
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
    this.bindEvents();
    this.triggerPageAnimations();
  }

  triggerPageAnimations() {
    if (typeof GuiaDevAnimations === 'undefined') return;
    requestAnimationFrame(() => {
      if (this.currentPage === "home") {
        GuiaDevAnimations.heroEntrance();
        setTimeout(() => GuiaDevAnimations.categoryCards(), 300);
        setTimeout(() => GuiaDevAnimations.featureCards(), 600);
        GuiaDevAnimations.breadcrumbEntrance();
      } else if (this.currentPage === "doc") {
        GuiaDevAnimations.breadcrumbEntrance();
        GuiaDevAnimations.lessonListEntrance();
      }
    });
  }

  renderHeader() {
    return `
      <header class="header">
        <div class="header-left">
          <button class="btn-icon mobile-menu-btn" onclick="app.toggleMobileNav()">
            <i class="fa-solid fa-bars"></i>
          </button>
          <a class="logo" href="#" onclick="app.navigateTo('home'); return false;">
            <span class="logo-icon"><i class="fa-solid fa-compass"></i></span>
            <span class="logo-text">GuiaDev</span>
          </a>
        </div>
        ${GuiaDev.renderHeaderNav(this.currentCategory, '')}
        <div class="header-right">
          <button class="btn-icon" onclick="app.toggleSearch()" title="Buscar (Ctrl+K)">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="btn-icon" id="theme-toggle" onclick="app.toggleTheme()">
            ${this.theme === "dark" ? this.sunIcon() : this.moonIcon()}
          </button>
        </div>
      </header>
    `;
  }

  renderContent() {
    if (this.currentPage === "home") {
      return this.renderHome();
    }
    return this.renderDocPage();
  }

  renderHome() {
    return `
      <div class="content-area">
        <main class="main-content home" id="main-content">
          <div class="hero">
            <div class="hero-badge"><i class="fa-solid fa-book-open"></i> Plataforma de Documentacion Tecnica</div>
            <h1 class="hero-title">
              Bienvenidos a <span class="gradient-text">GuiaDev</span>
            </h1>
            <p class="hero-subtitle">
              Guias completas, ejemplos practicos y referencias detalladas sobre las tecnologias mas utilizadas en el desarrollo de software moderno.
            </p>
            <div class="hero-ctas">
              <a href="pages/lenguajes.html" class="btn btn-primary btn-lg">
                Comenzar a aprender
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <section class="stats-section">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">${STATS.lessons}</div>
                <div class="stat-label"><i class="fa-solid fa-book"></i> Lecciones</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${STATS.languages}</div>
                <div class="stat-label"><i class="fa-solid fa-code"></i> Lenguajes</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${STATS.frameworks}</div>
                <div class="stat-label"><i class="fa-solid fa-layer-group"></i> Frameworks</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${STATS.diagrams}</div>
                <div class="stat-label"><i class="fa-solid fa-project-diagram"></i> Diagramas UML</div>
              </div>
            </div>
          </section>

          <section class="categories-section">
            <h2 class="section-title">Explora por Categorias</h2>
            <div class="categories-grid">
              ${DOCS_DATA.categories.map((cat) => this.renderCategoryCard(cat)).join("")}
            </div>
          </section>

          <section class="features-section">
            <h2 class="section-title">Caracteristicas Destacadas</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-circle-check"></i></div>
                <h3>Contenido actualizado</h3>
                <p>Con las ultimas versiones de cada tecnologia</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-laptop-code"></i></div>
                <h3>Ejemplos praticos</h3>
                <p>Codigo ejecutable en cada leccion</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>Busqueda rapida</h3>
                <p>Encuentra lo que necesitas al instante</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                <h3>Diseno responsive</h3>
                <p>Funciona en cualquier dispositivo</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-moon"></i></div>
                <h3>Modo oscuro</h3>
                <p>Tema claro y oscuro para tu comodidad</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon"><i class="fa-solid fa-language"></i></div>
                <h3>En espanol</h3>
                <p>Contenido claro y profesional en espanol</p>
              </div>
            </div>
          </section>

          <footer class="home-footer">
            <div class="footer-content">
              <p><i class="fa-solid fa-compass"></i> GuiaDev - Plataforma de documentacion tecnica</p>
            </div>
          </footer>
        </main>
      </div>
    `;
  }

  renderCategoryCard(category) {
    const totalLessons = category.subcategories.reduce((acc, sub) => acc + sub.lessons.length, 0);
    const pageMap = {
      'db': 'pages/db.html',
      'git': 'pages/git.html',
      'lenguajes': 'pages/lenguajes.html',
      'frameworks': 'pages/frameworks.html',
      'uml': 'pages/uml.html',
      'is': 'pages/is.html',
      'utilities': 'pages/utilidades.html',
      'entrevistas': 'pages/entrevistas.html',
      'ingles': 'pages/ingles.html'
    };
    const pageUrl = pageMap[category.id] || '#';

    return `
      <a class="category-card" href="${pageUrl}" style="--card-accent: ${category.color}">
        <div class="category-card-header">
          <span class="category-card-icon"><i class="${category.icon}"></i></span>
          <span class="category-card-count">${totalLessons} lecciones</span>
        </div>
        <h3 class="category-card-title">${category.title}</h3>
        <div class="category-card-subcategories">
          ${category.subcategories.map((sub) => `<span class="category-chip"><i class="${sub.icon}"></i> ${sub.title}</span>`).join("")}
        </div>
        <div class="category-card-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </a>
    `;
  }

  renderDocPage() {
    const cat = DOCS_DATA.categories.find((c) => c.id === this.currentCategory);
    const sub = cat?.subcategories.find((s) => s.id === this.currentSubcategory);
    const lesson = sub?.lessons.find((l) => l.id === this.currentLesson);

    const currentLessonIndex = sub ? sub.lessons.findIndex((l) => l.id === this.currentLesson) : -1;
    const prevLesson = currentLessonIndex > 0 ? sub.lessons[currentLessonIndex - 1] : null;
    const nextLesson = currentLessonIndex < sub.lessons.length - 1 ? sub.lessons[currentLessonIndex + 1] : null;

    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="doc-breadcrumb">
            <a href="#" onclick="app.navigateTo('home'); return false;"><i class="fa-solid fa-house"></i> Inicio</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <a href="#" onclick="app.navigateToSubcategory('${cat.id}', '${sub.id}'); return false;"><i class="${cat.icon}"></i> ${cat.title}</a>
            <i class="fa-solid fa-chevron-right breadcrumb-sep"></i>
            <span><i class="${sub.icon}"></i> ${sub.title}</span>
          </div>

          <div class="doc-header">
            <h1 class="doc-title">${lesson ? lesson.title : sub.title}</h1>
            ${lesson ? `<p class="doc-description">${lesson.content}</p>` : ""}
          </div>

          ${lesson && lesson.sections ? this.renderLessonSections(lesson, cat, sub) : this.renderSubcategoryOverview(cat, sub)}

          <div class="doc-navigation">
            ${prevLesson ? `
              <a class="nav-prev" href="#${cat.id}/${sub.id}/${prevLesson.id}" onclick="app.navigateToLesson('${cat.id}', '${sub.id}', '${prevLesson.id}'); return false;">
                <i class="fa-solid fa-arrow-left"></i>
                <div>
                  <span class="nav-prev-label">Anterior</span>
                  <span class="nav-prev-title">${prevLesson.title}</span>
                </div>
              </a>
            ` : "<div></div>"}
            ${nextLesson ? `
              <a class="nav-next" href="#${cat.id}/${sub.id}/${nextLesson.id}" onclick="app.navigateToLesson('${cat.id}', '${sub.id}', '${nextLesson.id}'); return false;">
                <div>
                  <span class="nav-next-label">Siguiente</span>
                  <span class="nav-next-title">${nextLesson.title}</span>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            ` : "<div></div>"}
          </div>
        </main>

        ${this.renderTableOfContents(lesson)}
      </div>
    `;
  }

  renderLessonSections(lesson, cat, sub) {
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
              ${this.formatContent(lesson.fullContent[section])}
            ` : `
              <p>En esta seccion aprenderas sobre <strong>${section}</strong> en el contexto de ${sub.title}.</p>
            `}
          </div>
        `
          )
          .join("")}

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

  formatContent(content) {
    return GuiaDev.formatContent(content);
  }

  escapeHtml(text) {
    return GuiaDev.escapeHtml(text);
  }

  renderSubcategoryOverview(cat, sub) {
    return `
      <div class="doc-body">
        <div class="doc-section">
          <h2>Lecciones disponibles</h2>
          <div class="lessons-list">
            ${sub.lessons
              .map(
                (lesson) => `
              <a class="lesson-card" href="#${cat.id}/${sub.id}/${lesson.id}" onclick="app.navigateToLesson('${cat.id}', '${sub.id}', '${lesson.id}'); return false;">
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
    `;
  }

  renderTableOfContents(lesson) {
    return GuiaDev.renderTableOfContents(lesson);
  }

  copyCode(btn) {
    GuiaDev.copyCode(btn);
  }

  bindEvents() {
    const content = document.getElementById("main-content");
    if (content) {
      content.addEventListener("scroll", () => this.highlightToc());
    }
  }

  highlightToc() {
    GuiaDev.highlightToc();
  }
}

const app = new GuiaDevApp();
