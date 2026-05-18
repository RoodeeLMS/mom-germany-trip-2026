/* Language toggle: TH ↔ EN
 * Uses Google's translate.goog proxy for full-page English translation.
 * Native Thai version remains primary; toggle button in navbar.
 *
 * On a Thai page:   click "🇬🇧 EN" → goes to xxx.translate.goog/... with auto-translate
 * On a translated page: click "🇹🇭 TH" → goes back to roodeelms.github.io/...
 */
(function () {
    'use strict';

    const ORIGINAL_HOST = 'roodeelms.github.io';
    const TRANSLATED_HOST_SUFFIX = '.translate.goog';

    function isTranslated() {
        return location.hostname.endsWith(TRANSLATED_HOST_SUFFIX);
    }

    function translatedUrl() {
        // Convert "roodeelms.github.io" → "roodeelms-github-io.translate.goog"
        const subdomain = location.hostname.replace(/\./g, '-');
        const newHost = subdomain + TRANSLATED_HOST_SUFFIX;
        return location.protocol + '//' + newHost + location.pathname
            + '?_x_tr_sl=th&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp'
            + location.hash;
    }

    function originalUrl() {
        // Convert "roodeelms-github-io.translate.goog" → "roodeelms.github.io"
        const subdomain = location.hostname.replace(TRANSLATED_HOST_SUFFIX, '');
        const originalHost = subdomain.replace(/-/g, '.');
        const cleanSearch = location.search.replace(/[?&]_x_tr_[^&]+/g, '').replace(/^&/, '?');
        return location.protocol + '//' + originalHost + location.pathname
            + (cleanSearch.length > 1 ? cleanSearch : '')
            + location.hash;
    }

    function buildButton() {
        const btn = document.createElement('a');
        btn.id = 'lang-toggle';
        btn.className = 'navbar-item lang-toggle';
        btn.setAttribute('translate', 'no');  // prevent Google from translating button itself
        btn.classList.add('notranslate');
        if (isTranslated()) {
            btn.textContent = '🇹🇭 TH';
            btn.href = originalUrl();
            btn.title = 'Switch to Thai (original)';
        } else {
            btn.textContent = '🇬🇧 EN';
            btn.href = translatedUrl();
            btn.title = 'View this page in English (Google Translate)';
        }
        return btn;
    }

    function inject() {
        const navMenu = document.querySelector('.navbar-menu');
        if (!navMenu || document.getElementById('lang-toggle')) return;
        navMenu.appendChild(buildButton());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
