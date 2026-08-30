class GlosarioPage extends CategoryPage {
  static _termsCache = null;

  constructor(categoryId) {
    super(categoryId);
    this.query = "";
    this.letter = "todos";
    this.themeFilter = "todos";
  }

  get terms() {
    if (!GlosarioPage._termsCache) {
      GlosarioPage._termsCache = (typeof GLOSSARY_DATA !== "undefined" ? GLOSSARY_DATA : [])
        .map((t) => ({ ...t, index: t.term.charAt(0).toUpperCase() }))
        .sort((a, b) => a.term.localeCompare(b.term, "es"));
    }
    return GlosarioPage._termsCache;
  }

  letters() {
    const map = {};
    this.terms.forEach((t) => {
      const l = t.index;
      map[l] = (map[l] || 0) + 1;
    });
    return Object.keys(map).sort();
  }

  renderCategoryOverview() {
    const themes = GLOSSARY_THEMES;
    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="hero">
            <div class="hero-badge"><i class="${this.category.icon}"></i> ${this.category.title}</div>
            <h1 class="hero-title">${this.category.title}</h1>
            <p class="hero-subtitle">${this.terms.length}+ términos de programación explicados con claridad. Busca, filtra por letra o explora por tema.</p>
          </div>

          <div class="hub-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="glosario-search-input" placeholder="Buscar término: polimorfismo, git, API, recursión..." autocomplete="off">
            <button class="hub-clear" id="glosario-clear" title="Limpiar búsqueda" style="display:none"><i class="fa-solid fa-xmark"></i></button>
            <span class="hub-count" id="glosario-count">${this.terms.length} términos</span>
          </div>

          <div class="glosario-tools">
            <div class="hub-pills glosario-letter-pills" id="glosario-letter-pills">
              <button class="hub-pill active" data-letter="todos">Todos</button>
              ${this.letters()
                .map(
                  (l) => `
                <button class="hub-pill" data-letter="${l}">${l}<span class="hub-pill-count">${this.terms.filter((t) => t.index === l).length}</span></button>
              `
                )
                .join("")}
            </div>

            <div class="hub-pills glosario-theme-pills" id="glosario-theme-pills">
              <button class="hub-pill active" data-theme="todos"><i class="fa-solid fa-layer-group"></i> Todos</button>
              ${Object.entries(themes)
                .map(
                  ([id, th]) => `
                <button class="hub-pill" data-theme="${id}"><i class="${th.icon}"></i> ${th.title}<span class="hub-pill-count">${this.terms.filter((t) => t.theme === id).length}</span></button>
              `
                )
                .join("")}
            </div>
          </div>

          <div class="glosario-grid" id="glosario-grid"></div>

          <div id="glosario-empty" class="hub-empty" hidden>
            <i class="fa-solid fa-face-frown"></i> Sin resultados. Prueba con otro término o cambia de filtro.
          </div>
        </main>
      </div>
    `;
  }

  render() {
    super.render();
    if (!this.currentSub) this.initGlosario();
  }

  themeLabel(themeId) {
    return (GLOSSARY_THEMES[themeId] || {}).title || themeId;
  }

  themeIcon(themeId) {
    return (GLOSSARY_THEMES[themeId] || {}).icon || "fa-solid fa-tag";
  }

  renderCards() {
    const q = (this.query || "").toLowerCase().trim();
    const letter = this.letter || "todos";
    const themeFilter = this.themeFilter || "todos";
    const filtered = this.terms.filter((t) => {
      const matchQ =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        this.themeLabel(t.theme).toLowerCase().includes(q);
      const matchL = letter === "todos" || t.index === letter;
      const matchT = themeFilter === "todos" || t.theme === themeFilter;
      return matchQ && matchL && matchT;
    });

    const grid = document.getElementById("glosario-grid");
    const count = document.getElementById("glosario-count");
    const empty = document.getElementById("glosario-empty");
    if (!grid) return;

    grid.innerHTML = filtered
      .map(
        (t) => `
        <div class="ref-card glosario-card" data-term="${t.term}">
          <div class="glosario-card-head">
            <h4>${t.term}</h4>
            <span class="glosario-chip"><i class="${this.themeIcon(t.theme)}"></i> ${this.themeLabel(t.theme)}</span>
          </div>
          <p>${t.definition}</p>
        </div>
      `
      )
      .join("");

    if (count) count.textContent = `${filtered.length} términos`;
    if (empty) empty.hidden = filtered.length > 0;

    if (typeof GuiaDevAnimations !== "undefined" && filtered.length) {
      GuiaDevAnimations.lessonListEntrance();
    }
  }

  initGlosario() {
    this.renderCards();

    const input = document.getElementById("glosario-search-input");
    const clearBtn = document.getElementById("glosario-clear");

    if (input) {
      let ticking = false;
      input.addEventListener("input", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          this.query = input.value;
          this.renderCards();
          if (clearBtn) clearBtn.style.display = this.query ? "" : "none";
        });
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.query = "";
          input.value = "";
          this.renderCards();
          if (clearBtn) clearBtn.style.display = "none";
          input.blur();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (input) input.value = "";
        this.query = "";
        this.renderCards();
        clearBtn.style.display = "none";
        if (input) input.focus();
      });
    }

    const letterPills = document.getElementById("glosario-letter-pills");
    if (letterPills) {
      letterPills.querySelectorAll(".hub-pill").forEach((pill) => {
        pill.addEventListener("click", () => {
          this.letter = pill.dataset.letter;
          letterPills.querySelectorAll(".hub-pill").forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          this.renderCards();
        });
      });
    }

    const themePills = document.getElementById("glosario-theme-pills");
    if (themePills) {
      themePills.querySelectorAll(".hub-pill").forEach((pill) => {
        pill.addEventListener("click", () => {
          this.themeFilter = pill.dataset.theme;
          themePills.querySelectorAll(".hub-pill").forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          this.renderCards();
        });
      });
    }
  }
}
