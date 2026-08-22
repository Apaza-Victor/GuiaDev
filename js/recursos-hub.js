class RecursosHub extends CategoryPage {
  constructor(categoryId) {
    super(categoryId);
    this.hubQuery = "";
  }

  renderCategoryOverview() {
    return `
      <div class="content-area">
        <main class="main-content doc-content" id="main-content">
          <div class="hero">
            <div class="hero-badge"><i class="${this.category.icon}"></i> ${this.category.title}</div>
            <h1 class="hero-title">${this.category.title}</h1>
            <p class="hero-subtitle">Todo el directorio en una sola vista: filtra y accede al instante, sin navegar leccion por leccion.</p>
          </div>

          <div class="hub-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="hub-search-input" placeholder="Filtrar recursos: figma, postgres, cursos, hosting..." autocomplete="off">
            <button class="hub-clear" id="hub-clear" title="Limpiar filtro" style="display:none"><i class="fa-solid fa-xmark"></i></button>
            <span class="hub-count" id="hub-count">&hellip;</span>
          </div>

          <div class="hub-pills" id="hub-pills">
            ${this.category.subcategories
              .map(
                (s) => `
              <button class="hub-pill" data-target="hub-${s.id}">
                <i class="${s.icon}"></i> ${s.title}
                <span class="hub-pill-count">${s.lessons.reduce((n, l) => n + 1, 0)}</span>
              </button>`
              )
              .join("")}
            <button class="hub-pill hub-pill-top" id="hub-top" title="Volver arriba"><i class="fa-solid fa-arrow-up"></i></button>
          </div>

          <div id="recursos-hub">
            <div class="doc-section loading-content">
              <div class="spinner"></div>
              <p>Cargando directorio completo...</p>
            </div>
          </div>
          <div id="hub-empty" class="hub-empty" hidden>
            <i class="fa-solid fa-face-frown"></i> Sin resultados. Prueba con otro termino.
          </div>
        </main>
      </div>
    `;
  }

  render() {
    super.render();
    if (!this.currentSub) this.initHub();
  }

  initHub() {
    const wrap = document.getElementById("recursos-hub");
    if (!wrap) return;

    document.querySelectorAll(".hub-pill[data-target]").forEach((pill) => {
      pill.addEventListener("click", () => {
        const target = document.getElementById(pill.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const topBtn = document.getElementById("hub-top");
    if (topBtn) {
      topBtn.addEventListener("click", () => {
        const scroller = document.getElementById("main-content");
        if (scroller) scroller.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const input = document.getElementById("hub-search-input");
    const clearBtn = document.getElementById("hub-clear");
    if (input) {
      let ticking = false;
      input.addEventListener("input", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          this.filterHub(input.value);
        });
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          input.value = "";
          this.filterHub("");
          input.blur();
        }
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (input) input.value = "";
        this.filterHub("");
        if (input) input.focus();
      });
    }

    this.buildHub(wrap);
  }

  async buildHub(wrap) {
    const subs = this.category.subcategories;
    const parts = await Promise.all(
      subs.map(async (sub) => {
        const lessonsHtml = await Promise.all(
          sub.lessons.map(async (lesson) => {
            const html = await this.loadLessonContent(lesson);
            if (!html) return "";
            return this.parseSectionsFromHTML(html)
              .map(
                (sec) => `
              <div class="doc-section hub-section" data-hub-section>
                <h3 class="hub-section-title">${sec.title}</h3>
                ${sec.html}
              </div>
            `
              )
              .join("");
          })
        );
        return `
          <section class="hub-subcat" id="hub-${sub.id}" data-hub-subcat>
            <h2 class="hub-subcat-title"><i class="${sub.icon}"></i> ${sub.title}</h2>
            ${lessonsHtml.join("")}
          </section>
        `;
      })
    );

    if (this.currentSub || !wrap.isConnected) return;
    wrap.innerHTML = parts.join("");
    this.applyHubFilter();
  }

  filterHub(value) {
    this.hubQuery = value;
    this.applyHubFilter();
    const clearBtn = document.getElementById("hub-clear");
    if (clearBtn) clearBtn.style.display = value ? "" : "none";
  }

  applyHubFilter() {
    const wrap = document.getElementById("recursos-hub");
    if (!wrap) return;
    const q = (this.hubQuery || "").toLowerCase().trim();

    let totalVisible = 0;
    wrap.querySelectorAll(".ref-card").forEach((card) => {
      const visible = !q || card.textContent.toLowerCase().includes(q);
      card.hidden = !visible;
      if (visible) totalVisible++;
    });

    wrap.querySelectorAll("[data-hub-section]").forEach((sec) => {
      const anyCard = [...sec.querySelectorAll(".ref-card")].some((c) => !c.hidden);
      const titleMatch = q && sec.querySelector(".hub-section-title")?.textContent.toLowerCase().includes(q);
      sec.hidden = q ? !(anyCard || titleMatch) : false;
    });

    wrap.querySelectorAll("[data-hub-subcat]").forEach((sub) => {
      sub.hidden = [...sub.querySelectorAll("[data-hub-section]")].every((s) => s.hidden);
    });

    const count = document.getElementById("hub-count");
    if (count) count.textContent = `${totalVisible} recursos`;

    const empty = document.getElementById("hub-empty");
    if (empty) empty.hidden = !(q && totalVisible === 0);
  }
}
