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
    'git': 'cells',
    'uml': 'net',
    'is': 'halo',
    'utilidades': 'rings',
    'entrevistas': 'birds',
    'ingles': 'birds',
    'recursos': 'halo'
  };

  var P5_EFFECTS = ['trunk', 'topology'];
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

  function start() {
    if (effect) return;
    if (!isMainView()) return;
    if (mqReduce.matches || window.innerWidth < 900 || !webglOK()) return;

    var host = document.createElement('div');
    host.id = 'bg3d';
    document.body.insertBefore(host, document.body.firstChild);

    var name = effectName();

    loadEffectScript(name, function () {
      if (!isMainView() || !document.getElementById('bg3d')) {
        return;
      }
      var fn = typeof VANTA !== 'undefined' && VANTA[name.toUpperCase()];
      if (typeof fn !== 'function') {
        host.remove();
        return;
      }
      try {
        effect = fn(buildOptions(palette()));
        lastTheme = document.documentElement.getAttribute('data-theme');
      } catch (err) {
        host.remove();
        effect = null;
      }
    });
  }

  function stop() {
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
