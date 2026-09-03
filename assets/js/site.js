(function () {
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // GitHub stars and last-push date on software cards (public API, cached per session)
  var ghEls = document.querySelectorAll('.tool__gh[data-repo]');
  if (ghEls.length && window.fetch) {
    ghEls.forEach(function (el) {
      var repo = el.getAttribute('data-repo'), key = 'gh:' + repo, cached = null;
      try { cached = JSON.parse(sessionStorage.getItem(key)); } catch (e) {}
      var render = function (d) {
        if (!d) return;
        var when = d.pushed_at ? new Date(d.pushed_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : '';
        el.textContent = ' · ' + (d.stargazers_count || 0) + (d.stargazers_count === 1 ? ' star' : ' stars') + (when ? ' · updated ' + when : '');
      };
      if (cached) { render(cached); return; }
      fetch('https://api.github.com/repos/' + repo).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
        if (!d) return; var slim = { stargazers_count: d.stargazers_count, pushed_at: d.pushed_at };
        try { sessionStorage.setItem(key, JSON.stringify(slim)); } catch (e) {}
        render(slim);
      }).catch(function () {});
    });
  }
})();
