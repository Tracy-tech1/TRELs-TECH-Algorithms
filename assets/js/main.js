/* =========================================================
   TRELs-TECH Algorithms — site behaviour
   ========================================================= */
(function () {
  "use strict";
  var C = window.TRELS || {};
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- icons ---------- */
  var I = {
    utensils: '<path d="M4 3v7a3 3 0 0 0 3 3v8M10 3v7a3 3 0 0 1-3 3M7 3v6M17 21V3c-2 1-3 4-3 7s1 4 3 4"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    home: '<path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8M8 13h5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1-2 2-5 2"/>',
    wa: '<path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L.3 23.7l6.2-1.6a11.8 11.8 0 0 0 5.6 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.2ZM12.1 21.5a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.3c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1c.2.2 2.1 3.2 5 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.6-.5Z" fill="currentColor" stroke="none"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.8"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/>',
    x: '<path d="M4 4l16 16M20 4 4 20"/>',
    threads: '<path d="M16.5 11.5c-.5-3-2.5-4.5-5-4.5-3 0-5 2.2-5 5.5S8.5 18 12 18c3 0 5-1.7 5-4 0-2.2-2-3.3-4.5-3.3-2 0-3.2 1-3.2 2.2 0 1.3 1.1 2 2.5 2 2.7 0 3.5-2.7 3.2-5.9"/>',
    github: '<path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21"/>',
    whatsappChannel: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>'
  };
  function svg(name, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || "") + ">" + (I[name] || "") + "</svg>";
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function waLink(text) { return "https://wa.me/" + (C.whatsapp || "") + (text ? "?text=" + encodeURIComponent(text) : ""); }
  function fcfa(n) { return Number(n).toLocaleString("fr-FR").replace(/ | /g, " ") + " FCFA"; }

  /* ---------- mobile menu ---------- */
  var btn = document.querySelector(".menu-btn"), links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) { if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
  }

  /* ---------- contact details everywhere ---------- */
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink(a.getAttribute("data-wa") || "Hello TRELs-TECH Algorithms! I'd like to know more about your services."); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-wa-display]").forEach(function (el) { el.textContent = C.whatsappDisplay || ""; });
  document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = C.email; if (el.tagName === "A") el.href = "mailto:" + C.email; });
  document.querySelectorAll("[data-location]").forEach(function (el) { el.textContent = C.location; });
  document.querySelectorAll("[data-hours]").forEach(function (el) { el.textContent = C.hours; });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = svg(el.getAttribute("data-icon")); });

  var labels = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", tiktok: "TikTok", youtube: "YouTube", x: "X (Twitter)", threads: "Threads", github: "GitHub", whatsappChannel: "WhatsApp Channel" };
  document.querySelectorAll("[data-socials]").forEach(function (box) {
    var s = C.socials || {}, html = "";
    Object.keys(labels).forEach(function (k) {
      if (s[k]) html += '<a class="social" href="' + esc(s[k]) + '" target="_blank" rel="noopener">' + svg(k) + labels[k] + "</a>";
    });
    if (box.hasAttribute("data-list")) {
      html = "";
      Object.keys(labels).forEach(function (k) { if (s[k]) html += '<li><a href="' + esc(s[k]) + '" target="_blank" rel="noopener">' + labels[k] + "</a></li>"; });
    }
    box.innerHTML = html || (box.hasAttribute("data-list") ? "<li>Coming soon</li>" : '<span class="form-note">Social links coming soon.</span>');
  });

  /* ---------- purchase catalogue ---------- */
  var grid = document.getElementById("product-grid");
  if (grid && C.products) {
    var filter = "all", query = "";
    var palettes = ["#00D1FF", "#2EE59D", "#A78BFA", "#FFC857", "#FF6B9A", "#3B82F6"];
    function card(p, i) {
      var col = palettes[i % palettes.length];
      var top = p.type === "website"
        ? '<div class="mini-site"><div class="mb"><i></i><i></i><i></i></div><div class="hl" style="width:40%"></div><div class="hero-blk" style="background:linear-gradient(120deg,' + col + '55,' + col + '15)"><i></i></div><div class="cols"><div></div><div></div><div></div></div></div>'
        : '<div class="mini-chat"><div class="a"></div><div class="b" style="background:' + col + '40"></div><div class="c"></div><div class="b" style="width:34%;background:' + col + '40"></div></div>';
      var msg = "Hello TRELs-TECH Algorithms! I'd like to buy: " + p.name + " (" + p.id + "), starting at " + fcfa(p.price) + ". My business is: ";
      var ask = "Hello TRELs-TECH Algorithms! I have a question about " + p.name + " (" + p.id + "): ";
      return '<article class="card product glow reveal in" data-type="' + p.type + '">' +
        '<div class="product-top"><span class="product-icon" style="color:' + col + '">' + svg(p.icon) + "</span>" + top + "</div>" +
        '<div class="product-body"><div class="tags" style="margin-bottom:10px"><span class="tag ' + (p.type === "website" ? "cyan" : "green") + '">' + (p.type === "website" ? "Website" : "Chatbot") + '</span><span class="tag">' + esc(p.id) + "</span></div>" +
        "<h3>" + esc(p.name) + '</h3><p class="for">For: ' + esc(p.for) + "</p>" +
        '<ul class="ticks">' + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
        '<div class="price-row"><div class="price"><small>Starting at</small>' + fcfa(p.price) + '</div><span class="tag amber">Customisable</span></div>' +
        '<div class="product-actions"><a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="' + waLink(msg) + '">' + svg("wa") + "Buy on WhatsApp</a>" +
        '<a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="' + waLink(ask) + '" aria-label="Ask a question about ' + esc(p.name) + '">Ask</a></div></div></article>';
    }
    function render() {
      var q = query.toLowerCase();
      var list = C.products.filter(function (p) {
        return (filter === "all" || p.type === filter) &&
          (!q || (p.name + " " + p.for + " " + p.features.join(" ")).toLowerCase().indexOf(q) > -1);
      });
      grid.innerHTML = list.length ? list.map(card).join("") : '<div class="empty" style="grid-column:1/-1">No match yet. <a data-wa href="#">Tell us what you need</a> and we\'ll build it.</div>';
      grid.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink("Hello TRELs-TECH Algorithms! I'm looking for: " + query); a.target = "_blank"; });
      var cnt = document.getElementById("product-count"); if (cnt) cnt.textContent = list.length + (list.length === 1 ? " product" : " products");
    }
    document.querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        render();
      });
    });
    var search = document.getElementById("product-search");
    if (search) search.addEventListener("input", function () { query = search.value.trim(); render(); });
    var hash = (location.hash || "").replace("#", "");
    if (hash === "websites" || hash === "chatbots") { var t = document.querySelector('[data-filter="' + hash.slice(0, -1) + '"]'); if (t) t.click(); else render(); } else render();
  }

  /* ---------- reviews ---------- */
  var rv = document.getElementById("review-list");
  if (rv) {
    var R = C.reviews || [];
    if (!R.length) {
      rv.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="icon-box amber" style="margin:0 auto 14px">' + svg("chat") + '</div><h3 style="color:var(--text)">No public reviews yet</h3><p style="margin:0 auto;max-width:460px">We\'re a new studio, so we\'re collecting our first reviews. Worked with us? Your review below helps other businesses decide.</p></div>';
    } else {
      rv.innerHTML = R.map(function (r) {
        var st = "★★★★★".slice(0, r.rating) + "☆☆☆☆☆".slice(0, 5 - r.rating);
        return '<article class="card review"><div class="who"><span class="avatar">' + esc(r.name.charAt(0)) + "</span><div><b>" + esc(r.name) + "</b><br><small>" + esc(r.business || "") + '</small></div></div><div class="stars-static" aria-label="' + r.rating + ' out of 5">' + st + "</div><p>“" + esc(r.text) + "”</p><small>" + esc(r.service || "") + (r.date ? " · " + esc(r.date) : "") + "</small></article>";
      }).join("");
      var avg = R.reduce(function (a, r) { return a + r.rating; }, 0) / R.length;
      var s = document.getElementById("rating-avg"); if (s) s.textContent = avg.toFixed(1);
      var n = document.getElementById("rating-count"); if (n) n.textContent = R.length + " review" + (R.length > 1 ? "s" : "");
    }
  }
  // show/hide fields based on feedback type
  var typeRadios = document.querySelectorAll('input[name="feedback_type"]');
  if (typeRadios.length) {
    var ratingField = document.getElementById("rating-field"), consent = document.getElementById("consent-field");
    typeRadios.forEach(function (r) {
      r.addEventListener("change", function () {
        var v = document.querySelector('input[name="feedback_type"]:checked').value;
        if (ratingField) ratingField.classList.toggle("hidden", v === "Complaint");
        if (consent) consent.classList.toggle("hidden", v !== "Review");
        var lab = document.getElementById("msg-label");
        if (lab) lab.textContent = v === "Complaint" ? "What went wrong? *" : v === "Recommendation" ? "Your recommendation *" : "Your review *";
      });
    });
  }

  /* ---------- pre-select service from URL (?service=) ---------- */
  var sp = new URLSearchParams(location.search).get("service");
  var sel = document.getElementById("service");
  if (sp && sel) {
    var m = Array.prototype.find.call(sel.options, function (o) { return o.value && o.value.toLowerCase().indexOf(sp.toLowerCase()) > -1; });
    if (m) sel.value = m.value;
  }

  /* ---------- typing code window ---------- */
  var code = document.getElementById("typed-code");
  if (code) {
    var lines = JSON.parse(code.getAttribute("data-lines"));
    if (reduce) {
      code.innerHTML = lines.map(function (l) { return '<span class="cw-line">' + l + "</span>"; }).join("");
    } else {
      var li = 0;
      (function next() {
        if (li >= lines.length) { code.insertAdjacentHTML("beforeend", '<span class="cw-line"><span class="caret"></span></span>'); return; }
        code.insertAdjacentHTML("beforeend", '<span class="cw-line">' + lines[li] + "</span>");
        li++; setTimeout(next, 170 + Math.random() * 180);
      })();
    }
  }

  /* ---------- hero network canvas ---------- */
  var cv = document.getElementById("net");
  if (cv && cv.getContext && !reduce) {
    var ctx = cv.getContext("2d"), pts = [], W, H, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() {
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, W * H / 16000)); pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, g: Math.random() < .3 });
    }
    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < 16000) { ctx.strokeStyle = "rgba(0,209,255," + (0.18 * (1 - d / 16000)) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.fillStyle = p.g ? "rgba(46,229,157,.8)" : "rgba(0,209,255,.7)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.g ? 2 : 1.5, 0, 6.3); ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    size(); window.addEventListener("resize", size); tick();
  }

  /* ---------- reveal on scroll ---------- */
  var rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    rev.forEach(function (el) { io.observe(el); });
  } else rev.forEach(function (el) { el.classList.add("in"); });
})();
