(function () {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('gd-bg3d') === 'off') return;

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var effect = null;
  var lastTheme = null;

  var SECTION_EFFECTS = {
    'index': 'globe',
    'lenguajes': 'dots',
    'frameworks': 'topology',
    'db': 'fog',
    'git': 'gitgraph',
    'uml': 'net',
    'is': 'halo',
    'utilidades': 'rings',
    'entrevistas': 'birds',
    'ingles': 'letters',
    'recursos': 'firefly'
  };

  var P5_EFFECTS = ['trunk', 'topology'];
  var GITGRAPH_URL = 'https://cdn.jsdelivr.net/npm/@gitgraph/js';
  var TSP_PRESETS = {
    firefly: {
      script: 'https://cdn.jsdelivr.net/npm/@tsparticles/preset-firefly@4/tsparticles.preset.firefly.bundle.min.js',
      loader: 'loadFireflyPreset'
    }
  };
  var CUSTOM_2D = ['letters'];
  var gen = 0;
  var VALID = Object.keys(SECTION_EFFECTS).map(function (k) { return SECTION_EFFECTS[k]; });

  function sectionEffect() {
    var file = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/i, '').toLowerCase();
    if (!file || file === '') file = 'index';
    return SECTION_EFFECTS[file] || 'globe';
  }

  function effectName() {
    var override = typeof localStorage !== 'undefined' ? localStorage.getItem('gd-bg3d-effect') : null;
    if (override && VALID.indexOf(override) !== -1) return override;
    return sectionEffect();
  }

  function isMainView() {
    var file = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/i, '').toLowerCase();
    if (!file || file === 'index') return true;
    return !location.hash;
  }

  function webglOK() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  function palette() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      dark: dark,
      color: dark ? 0xfbbf24 : 0xf59e0b,
      color2: dark ? 0xf97316 : 0xd97706,
      backgroundColor: dark ? 0x0f172a : 0xf8fafc
    };
  }

  function buildOptions(p) {
    var base = {
      el: '#bg3d',
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: p.color,
      backgroundColor: p.backgroundColor
    };

    switch (effectName()) {
      case 'globe':
        return Object.assign(base, { color2: p.color2, showShading: true, size: p.dark ? 1.15 : 1 });
      case 'dots':
        return Object.assign(base, { color2: p.color2, showLines: false });
      case 'net':
        return Object.assign(base, { points: 13, spacing: 21, maxDistance: 25, showLines: true });
      case 'halo':
        return Object.assign(base, { size: 1.1 });
      case 'birds':
        return Object.assign(base, { backgroundAlpha: 0 });
      case 'cells':
        return Object.assign(base, {
          color1: p.color,
          color2: p.color2,
          color3: p.dark ? 0xfde68a : 0xb45309,
          size: 1.15,
          speed: 1.1
        });
      case 'fog':
        return Object.assign(base, {
          highlightColor: p.color,
          midtoneColor: p.color2,
          lowlightColor: p.dark ? 0x1e293b : 0xcbd5e1,
          baseColor: p.backgroundColor,
          blurFactor: p.dark ? 0.65 : 0.60,
          speed: 1.4,
          zoom: 0.9
        });
      default:
        return base;
    }
  }

  function loadScript(src, ok, fail) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = ok;
    s.onerror = fail;
    document.head.appendChild(s);
  }

  function loadEffectScript(name, cb) {
    if (typeof VANTA !== 'undefined' && typeof VANTA[name.toUpperCase()] === 'function') {
      cb();
      return;
    }

    var queue = [];
    if (P5_EFFECTS.indexOf(name) !== -1 && typeof window.p5 === 'undefined') {
      queue.push('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js');
    }
    queue.push('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.' + name + '.min.js');

    (function next(i) {
      if (i >= queue.length) {
        cb();
        return;
      }
      loadScript(queue[i], function () { next(i + 1); }, function () {
        var h = document.getElementById('bg3d');
        if (h) h.remove();
      });
    })(0);
  }

  function startGitgraph(host, p, ready, fail) {
    try {
      var box = document.createElement('div');
      box.className = 'bg-gitgraph';
      host.appendChild(box);

      var template = GitgraphJS.templateExtend('metro', {
        colors: [
          p.dark ? '#fbbf24' : '#b45309',
          p.dark ? '#f97316' : '#d97706',
          p.dark ? '#fde68a' : '#92400e'
        ],
        branch: { label: { display: false } },
        commit: { message: { display: false }, dot: { size: 9 } }
      });

      var graph = GitgraphJS.createGitgraph(box, { template: template });
      var main = graph.branch('main');
      main.commit('init');

      var branches = [];
      var count = 1;
      var MAX = 40;

      var timer = setInterval(function () {
        try {
          var r = Math.random();
          if (r < 0.45 || branches.length === 0) {
            main.commit('commit');
          } else if (r < 0.72) {
            branches[Math.floor(Math.random() * branches.length)].commit('feat');
          } else if (r < 0.88 && branches.length < 4) {
            branches.push(main.branch('feature/' + (branches.length + 1)));
          } else if (branches.length) {
            main.merge(branches.splice(Math.floor(Math.random() * branches.length), 1)[0]);
          }
          count++;
          if (count >= MAX) clearInterval(timer);
        } catch (e) { /* grafo cerrado */ }
      }, 800);

      ready({
        destroy: function () {
          clearInterval(timer);
          if (box.parentNode) box.parentNode.removeChild(box);
        }
      });
    } catch (err) {
      fail();
    }
  }

  function startFirefly(name, host, p, ready, fail) {
    var preset = TSP_PRESETS[name];
    loadScript(preset.script, function () {
      if (typeof tsParticles === 'undefined' || typeof window[preset.loader] !== 'function') {
        fail();
        return;
      }
      Promise.resolve(window[preset.loader](tsParticles))
        .then(function () {
          return tsParticles.load({
            id: 'bg3d',
            options: {
              fullScreen: false,
              preset: name,
              background: { color: 'transparent' },
              fpsLimit: 40,
              detectRetina: true,
              interactivity: {
                events: { onHover: { enable: false }, onClick: { enable: false }, resize: false }
              },
              particles: {
                number: { value: p.dark ? 42 : 30 },
                move: { speed: 0.7 }
              }
            }
          });
        })
        .then(function (inst) {
          ready({
            destroy: function () {
              try { inst.destroy(); } catch (e) { /* noop */ }
            }
          });
        })
        .catch(fail);
    }, fail);
  }

  function start() {
    if (effect) return;
    if (!isMainView()) return;
    if (mqReduce.matches || window.innerWidth < 900) return;

    var name = effectName();
    var isCustom = name === 'gitgraph' || !!TSP_PRESETS[name] || CUSTOM_2D.indexOf(name) !== -1;
    if (!isCustom && !webglOK()) return;

    var host = document.createElement('div');
    host.id = 'bg3d';
    document.body.insertBefore(host, document.body.firstChild);

    var myGen = ++gen;

    function ready(handle) {
      if (myGen !== gen || !isMainView() || !document.getElementById('bg3d')) {
        if (handle && typeof handle.destroy === 'function') {
          try { handle.destroy(); } catch (e) { /* noop */ }
        }
        return;
      }
      effect = handle;
      lastTheme = document.documentElement.getAttribute('data-theme');
    }

    function fail() {
      if (myGen !== gen) return;
      var h = document.getElementById('bg3d');
      if (h) h.remove();
    }

    if (name === 'gitgraph') {
      if (typeof window.GitgraphJS !== 'undefined') {
        startGitgraph(host, palette(), ready, fail);
      } else {
        loadScript(GITGRAPH_URL, function () {
          if (typeof window.GitgraphJS !== 'undefined') {
            startGitgraph(host, palette(), ready, fail);
          } else {
            fail();
          }
        }, fail);
      }
      return;
    }

    if (TSP_PRESETS[name]) {
      startFirefly(name, host, palette(), ready, fail);
      return;
    }

    if (CUSTOM_2D.indexOf(name) !== -1) {
      var boot = function () {
        if (window.GuiaDevCustomBG && typeof window.GuiaDevCustomBG.start === 'function') {
          var handle = window.GuiaDevCustomBG.start(name, host, palette());
          if (handle) ready(handle);
          else fail();
        } else {
          fail();
        }
      };
      if (window.GuiaDevCustomBG) boot();
      else loadScript('js/bg-custom.js', boot, fail);
      return;
    }

    loadEffectScript(name, function () {
      if (myGen !== gen || !isMainView() || !document.getElementById('bg3d')) {
        return;
      }
      var fn = typeof VANTA !== 'undefined' && VANTA[name.toUpperCase()];
      if (typeof fn !== 'function') {
        fail();
        return;
      }
      try {
        ready(fn(buildOptions(palette())));
      } catch (err) {
        fail();
      }
    });
  }

  function stop() {
    gen++;
    if (effect) {
      try { effect.destroy(); } catch (e) { /* noop */ }
      effect = null;
    }
    var h = document.getElementById('bg3d');
    if (h) h.remove();
  }

  function syncTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (effect && t !== lastTheme) {
      stop();
      start();
    }
  }

  function syncView() {
    if (isMainView()) {
      start();
    } else {
      stop();
    }
  }

  window.addEventListener('hashchange', syncView);

  ['replaceState', 'pushState'].forEach(function (m) {
    var original = history[m];
    history[m] = function () {
      var result = original.apply(this, arguments);
      syncView();
      return result;
    };
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  new MutationObserver(syncTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  window.addEventListener('pagehide', stop);
})();
