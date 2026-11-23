/* Untold Gandhi — app logic. No build step, no dependencies. */
(function () {
  "use strict";

  var ui = UNTOLD.ui;
  var figure = UNTOLD.figures.find(function (f) { return f.active; });
  var main = document.getElementById("main");
  var state = { lang: "en", filter: "all" };

  try { var saved = localStorage.getItem("untold-lang"); if (saved === "hi" || saved === "en") state.lang = saved; } catch (e) {}

  function t(key) { return (ui[state.lang] && ui[state.lang][key]) || ui.en[key] || key; }
  function L(obj) { return obj[state.lang] || obj.en; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function stamp(status) { return '<span class="stamp stamp--' + status + '">' + esc(t("status_" + status)) + "</span>"; }
  function fileNo(i) { return "F-" + figure.fileNo + "/" + String(i + 1).padStart(2, "0"); }

  function factsList(facts, light) {
    return '<ul class="facts' + (light ? " facts--light" : "") + '">' + facts.map(function (f) {
      return '<li><span class="k">' + esc(f[0]) + '</span><span class="v">' + esc(f[1]) + "</span></li>";
    }).join("") + "</ul>";
  }

  /* ---------- Views ---------- */

  function viewHome(scrollTo) {
    var stories = figure.stories;
    var lead = stories.find(function (s) { return s.lead; }) || stories[0];
    var l = L(lead);
    var leadIndex = stories.indexOf(lead);

    var html = '<section class="wrap lead">' +
      '<div>' +
        '<span class="kicker">' + esc(t("lead_kicker")) + " · " + fileNo(leadIndex) + "</span>" +
        '<h1 class="lead__title"><a href="#story-' + lead.id + '">' + esc(l.title) + "</a></h1>" +
        '<p class="lead__dek">' + esc(l.dek) + "</p>" +
        '<a class="btn" href="#story-' + lead.id + '">' + esc(t("read_file")) + " →</a>" +
      "</div>" +
      '<aside class="lead__panel" id="lead-panel">' +
        "<h3>" + esc(t("the_record")) + "</h3>" +
        '<ul class="facts">' + l.facts.map(function (f) {
          return '<li><span class="k">' + esc(f[0]) + '</span><span class="v"><span class="redact">' + esc(f[1]) + "</span></span></li>";
        }).join("") + "</ul>" +
        '<div style="margin-top:18px">' + stamp(lead.status) + "</div>" +
      "</aside>" +
    "</section>";

    // Story grid with filters
    var statuses = ["all", "documented", "debated", "disputed"];
    html += '<section class="wrap" id="stories">' +
      '<div class="section-head"><h2>' + esc(t("all_stories")) + "</h2></div>" +
      '<div class="filters" role="group" aria-label="Filter">' + statuses.map(function (s) {
        return '<button type="button" data-filter="' + s + '" aria-pressed="' + (state.filter === s) + '">' + esc(s === "all" ? t("filter_all") : t("status_" + s)) + "</button>";
      }).join("") + "</div>" +
      '<div class="grid" id="grid">' + cards() + "</div>" +
    "</section>";

    // Timeline
    html += '<section class="wrap" id="timeline-section">' +
      '<div class="section-head"><h2>' + esc(t("timeline_title")) + "</h2></div>" +
      '<div class="timeline">' + figure.timeline.map(function (e) {
        return '<div class="timeline__item"><div class="timeline__year">' + e.year + "</div><p>" + esc(e[state.lang] || e.en) + "</p></div>";
      }).join("") + "</div></section>";

    main.innerHTML = html;

    main.querySelectorAll("[data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.filter = b.getAttribute("data-filter");
        main.querySelectorAll("[data-filter]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        document.getElementById("grid").innerHTML = cards();
      });
    });

    // Reveal the redacted facts shortly after load
    setTimeout(function () { var p = document.getElementById("lead-panel"); if (p) p.classList.add("revealed"); }, 450);

    if (scrollTo) {
      var el = document.getElementById(scrollTo);
      if (el) setTimeout(function () { el.scrollIntoView(); }, 0);
    }
  }

  function cards() {
    return figure.stories.map(function (s, i) {
      if (state.filter !== "all" && s.status !== state.filter) return "";
      var l = L(s);
      return '<article class="card">' +
        '<div class="card__meta"><span class="card__no">' + fileNo(i) + "</span>" + stamp(s.status) + "</div>" +
        '<h3><a href="#story-' + s.id + '">' + esc(l.title) + "</a></h3>" +
        "<p>" + esc(l.dek) + "</p>" +
        '<div class="card__year">' + esc(s.year) + "</div>" +
      "</article>";
    }).join("");
  }

  function viewStory(id) {
    var stories = figure.stories;
    var i = stories.findIndex(function (s) { return s.id === id; });
    if (i < 0) { main.innerHTML = '<section class="wrap"><div class="section-head"><h2>' + esc(t("not_found")) + '</h2></div><a class="btn" href="#home">' + esc(t("back")) + "</a></section>"; return; }
    var s = stories[i], l = L(s);
    var prev = stories[(i - 1 + stories.length) % stories.length];
    var next = stories[(i + 1) % stories.length];

    var body = l.body.map(function (p, idx) {
      var out = "<p>" + esc(p) + "</p>";
      if (l.quote && idx === 1) out += "<blockquote>“" + esc(l.quote.replace(/^“|”$/g, "")) + "”<br><span class=\"mono\" style=\"font-size:13px;font-style:normal\">— " + esc(l.quoteBy) + "</span></blockquote>";
      return out;
    }).join("");

    main.innerHTML =
      '<article class="wrap">' +
        '<header class="story-head">' +
          "<div>" +
            '<div class="crumbs"><a href="#home">' + esc(t("back")) + "</a> &nbsp;/&nbsp; " + fileNo(i) + " &nbsp;/&nbsp; " + esc(s.year) + "</div>" +
            "<h1>" + esc(l.title) + "</h1>" +
            '<p class="dek">' + esc(l.dek) + "</p>" +
          "</div>" +
          "<div>" + stamp(s.status) + "</div>" +
        "</header>" +
        '<div class="story-body">' +
          '<div class="prose">' + body + "</div>" +
          '<aside class="aside">' +
            '<div class="box box--dark"><h3>' + esc(t("key_facts")) + "</h3>" + factsList(l.facts) + "</div>" +
            '<div class="box"><h3>' + esc(t("sources")) + '</h3><ol class="sources">' + l.sources.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol></div>" +
            '<div class="box"><h3>' + esc(t("verification")) + "</h3>" + stamp(s.status) + '<p style="margin:14px 0 0;font-size:15px">' + esc(t("legend_" + s.status)) + "</p></div>" +
          "</aside>" +
        "</div>" +
        '<nav class="story-nav">' +
          '<a class="btn btn--ghost" href="#story-' + prev.id + '">← ' + esc(t("prev")) + "</a>" +
          '<a class="btn" href="#story-' + next.id + '">' + esc(t("next")) + " →</a>" +
        "</nav>" +
      "</article>";
  }

  function viewFiles() {
    var html = '<section class="wrap"><div class="section-head"><h2>' + esc(t("files_title")) + '</h2></div>' +
      '<p style="max-width:60ch;font-size:20px;margin:0 0 40px">' + esc(t("files_intro")) + "</p>" +
      '<div class="files">';
    UNTOLD.figures.forEach(function (f) {
      html += '<div class="folder"><span class="kicker">File #' + f.fileNo + " · " + f.years + "</span>" +
        "<h3>" + esc(L(f.name)) + "</h3>" +
        '<p class="mono" style="font-size:13px;margin:0">' + f.stories.length + " " + esc(t("stories_count")) + "</p>" +
        '<a class="btn" href="#home">' + esc(t("file_open")) + " →</a></div>";
    });
    (UNTOLD.upcoming || []).forEach(function (u) {
      html += '<div class="folder folder--locked"><span class="kicker" style="color:var(--muted)">File #' + u.fileNo + "</span>" +
        '<h3><span class="bar" aria-hidden="true"></span></h3>' +
        '<span class="stamp stamp--disputed" style="align-self:flex-start;margin-top:auto">' + esc(t("file_locked")) + "</span></div>";
    });
    main.innerHTML = html + "</div></section>";
  }

  function viewAbout() {
    main.innerHTML = '<section class="wrap"><div class="section-head"><h2>' + esc(t("about_title")) + "</h2></div>" +
      '<p style="max-width:62ch;font-size:23px;line-height:1.5;margin:0 0 36px">' + esc(t("about_lede")) + "</p>" +
      '<div class="about">' +
        "<div><h3>" + esc(t("about_rules_h")) + '</h3><ol class="sources" style="font-size:18px">' + t("about_rules").map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></div>" +
        '<div><h3>' + esc(t("about_legend_h")) + '</h3><div class="legend">' +
          ["documented", "debated", "disputed"].map(function (s) { return "<div>" + stamp(s) + "<p>" + esc(t("legend_" + s)) + "</p></div>"; }).join("") +
        "</div></div>" +
      "</div></section>";
  }

  /* ---------- Chrome (header, ticker, language) ---------- */

  function applyChrome() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === state.lang)); });
    document.getElementById("file-label").textContent = "CASE FILE #" + figure.fileNo + " · " + L(figure.name).toUpperCase() + " · " + figure.years;
    var items = t("ticker").map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    document.getElementById("ticker").innerHTML = items + items; // doubled for seamless loop
    document.title = state.lang === "hi" ? "अनकहे गांधी" : "Untold Gandhi";
  }

  function route() {
    var h = (location.hash || "").slice(1);
    var current = "home";
    if (h.indexOf("story-") === 0) { viewStory(h.slice(6)); current = "home"; }
    else if (h === "files") { viewFiles(); current = "files"; }
    else if (h === "about") { viewAbout(); current = "about"; }
    else if (h === "timeline") { viewHome("timeline-section"); current = "timeline"; }
    else viewHome(h === "stories" ? "stories" : null);

    document.querySelectorAll(".masthead__nav a").forEach(function (a) {
      var target = a.getAttribute("href").slice(1);
      if (target === current) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (h !== "timeline" && h !== "stories") window.scrollTo(0, 0);
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      state.lang = b.getAttribute("data-lang");
      try { localStorage.setItem("untold-lang", state.lang); } catch (e) {}
      applyChrome();
      var y = window.scrollY; route(); window.scrollTo(0, y);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  window.addEventListener("hashchange", route);
  applyChrome();
  route();
})();
