(function () {
  function makeLetters(host, p) {
    var canvas = document.createElement('canvas');
    canvas.className = 'bg-canvas-custom';
    host.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var chars = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz'.split('');
    var parts = [];
    var raf = null;
    var W = 0;
    var H = 0;
    var t = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var COLORS = p.dark
      ? ['251,191,36', '249,115,22', '148,163,184']
      : ['180,83,9', '146,64,14', '100,116,139'];

    function resize() {
      W = host.clientWidth;
      H = host.clientHeight;
      canvas.width = Math.max(1, W * dpr);
      canvas.height = Math.max(1, H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(anywhere) {
      return {
        ch: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : H + 40,
        s: 13 + Math.random() * 26,
        v: 0.18 + Math.random() * 0.45,
        a: 0.10 + Math.random() * 0.28,
        ph: Math.random() * Math.PI * 2,
        sw: 0.4 + Math.random() * 0.8,
        c: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
    }

    function frame() {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var q = parts[i];
        q.y -= q.v;
        if (q.y < -50) {
          parts[i] = spawn(false);
          continue;
        }
        var x = q.x + Math.sin(t * q.sw + q.ph) * 14;
        ctx.font = '600 ' + q.s.toFixed(1) + 'px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
        ctx.fillStyle = 'rgba(' + q.c + ',' + q.a.toFixed(3) + ')';
        ctx.fillText(q.ch, x, q.y);
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    var n = Math.max(40, Math.min(110, Math.floor((W * H) / 16000)));
    for (var i = 0; i < n; i++) parts.push(spawn(true));
    frame();
    window.addEventListener('resize', resize);

    return {
      destroy: function () {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    };
  }

  window.GuiaDevCustomBG = {
    start: function (name, host, palette) {
      if (name === 'letters') return makeLetters(host, palette);
      return null;
    }
  };
})();
