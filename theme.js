/* Shared Day/Night theme handler.
 * Loaded synchronously from <head> so data-theme is applied before first paint. */
(function () {
    var STORAGE_KEY = 'xqiu-theme';
    var root = document.documentElement;

    function systemPref() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark' : 'light';
    }

    function getInitial() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'dark' || saved === 'light') return saved;
        } catch (_) {}
        return systemPref();
    }

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = theme === 'dark' ? '☀️' : '🌙'; // ☀️ : 🌙
            btn.setAttribute('aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            btn.setAttribute('title',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    // Apply before first paint
    apply(getInitial());

    function mountButton() {
        if (document.getElementById('theme-toggle')) return;
        var btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-toggle';
        btn.type = 'button';
        btn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
            apply(next);
        });
        document.body.appendChild(btn);
        apply(root.getAttribute('data-theme') || 'light');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountButton);
    } else {
        mountButton();
    }

    // Follow system changes when the user hasn't set an explicit preference
    if (window.matchMedia) {
        var mql = window.matchMedia('(prefers-color-scheme: dark)');
        var listener = function (e) {
            try {
                if (localStorage.getItem(STORAGE_KEY)) return; // explicit user choice wins
            } catch (_) {}
            apply(e.matches ? 'dark' : 'light');
        };
        if (mql.addEventListener) mql.addEventListener('change', listener);
        else if (mql.addListener) mql.addListener(listener);
    }
})();
