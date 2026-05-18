/* Wikipedia image loader
 * Fetches the main image for each element with [data-wiki="Page Title"]
 * Sets it as a background-image. Graceful fallback if fetch fails.
 */
(function () {
    'use strict';

    const cache = new Map();

    async function fetchWikiImage(title) {
        if (cache.has(title)) return cache.get(title);
        const promise = (async () => {
            try {
                const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
                const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
                if (!res.ok) return null;
                const data = await res.json();
                return data.originalimage?.source || data.thumbnail?.source || null;
            } catch (e) {
                return null;
            }
        })();
        cache.set(title, promise);
        return promise;
    }

    function applyImage(el, imgUrl) {
        if (!imgUrl) return;
        // Preload before applying so we don't get a flash
        const preload = new Image();
        preload.onload = () => {
            const target = el.querySelector('.image-area') || el;
            target.style.backgroundImage = `url('${imgUrl}')`;
            target.classList.add('loaded');
        };
        preload.src = imgUrl;
    }

    function loadAll() {
        const els = document.querySelectorAll('[data-wiki]');
        els.forEach(async (el) => {
            const title = el.getAttribute('data-wiki');
            if (!title) return;
            const imgUrl = await fetchWikiImage(title);
            applyImage(el, imgUrl);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAll);
    } else {
        loadAll();
    }
})();
