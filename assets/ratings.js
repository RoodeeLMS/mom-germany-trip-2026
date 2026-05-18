/* Iconic/Unmissable rating system
 * 5★ = must-see, world-class
 * 4★ = highly recommended
 * 3★ = worth visiting
 * 2★ = if you have time
 * 1★ = skip unless interested
 *
 * Reads `pathname` of links on town/sight cards to look up ratings,
 * and injects star badges into card bodies and page heroes.
 */
(function () {
    'use strict';

    const RATINGS = {
        // ======= TOWNS =======
        // 5★ — must-see
        'berlin': 5, 'munich': 5, 'vienna': 5, 'prague': 5, 'amsterdam': 5,
        'rothenburg': 5, 'bruges': 5, 'hallstatt': 5, 'cesky-krumlov': 5,
        // 4★ — highly recommended
        'hamburg': 4, 'dresden': 4, 'frankfurt': 4, 'cologne': 4, 'salzburg': 4,
        'heidelberg': 4, 'luebeck': 4, 'wuerzburg': 4, 'quedlinburg': 4,
        'nuremberg': 4, 'bamberg': 4, 'copenhagen': 4, 'brussels': 4, 'potsdam': 4,
        // 3★ — worth visiting
        'wernigerode': 3, 'goslar': 3, 'aachen': 3, 'trier': 3, 'bremen': 3,
        'luxembourg': 3, 'magdeburg': 3,
        // 2★ — if you have time
        'schwerin': 2, 'rostock': 2, 'hannover': 2, 'esslingen': 2,

        // ======= SIGHTS =======
        // 5★ — world-icon
        'brandenburg-gate': 5, 'sanssouci': 5, 'frauenkirche-dresden': 5, 'zwinger': 5,
        'holstentor': 5, 'speicherstadt': 5, 'miniatur-wunderland': 5, 'elbphilharmonie': 5,
        'cologne-cathedral': 5, 'aachen-cathedral': 5, 'heidelberg-castle': 5,
        'wuerzburg-residence': 5, 'marienplatz': 5, 'hohensalzburg': 5, 'schoenbrunn': 5,
        'prague-castle': 5, 'charles-bridge': 5, 'cesky-krumlov-castle': 5,
        'nyhavn': 5, 'grand-place': 5,
        'ploenlein': 5, 'kaiserburg-nuremberg': 5, 'christkindlesmarkt': 5,
        'nymphenburg': 5, 'hofbraeuhaus': 5, 'roemerberg': 5,
        'hallstatt-salt-mine': 5, 'hallstaetter-see': 5,
        'vienna-stephansdom': 5, 'vienna-hofburg': 5,
        'anne-frank-house': 5, 'rijksmuseum': 5, 'van-gogh-museum': 5,
        'belfry-bruges': 5,
        // 4★ — very iconic
        'reichstag': 4, 'museum-island': 4, 'east-side-gallery': 4, 'berlin-cathedral': 4,
        'niederegger': 4, 'schwerin-palace': 4, 'wernigerode-castle': 4,
        'porta-nigra': 4, 'kaiserpfalz-goslar': 4, 'stiftskirche-servatius': 4,
        'magdeburg-cathedral': 4, 'rothenburg-walls': 4,
        'bamberg-cathedral': 4, 'altes-rathaus-bamberg': 4, 'munich-frauenkirche': 4,
        'frankfurt-cathedral': 4, 'main-tower': 4, 'sachsenhausen-apfelwein': 4,
        'bremen-town-musicians': 4, 'bremen-rathaus': 4, 'herrenhausen-gardens': 4,
        'bock-casemates': 4,
        // 3★ — good
        'rammelsberg': 3, 'quedlinburg-castle': 3, 'gruene-zitadelle': 3,
        'warnemuende': 3, 'goethe-house': 3, 'burg-esslingen': 3
    };

    const LABELS = {
        5: 'ห้ามพลาด',
        4: 'แนะนำมาก',
        3: 'น่าแวะ',
        2: 'ถ้ามีเวลา',
        1: 'ข้ามได้'
    };

    function slugFromHref(href) {
        if (!href) return null;
        const path = new URL(href, location.href).pathname;
        const m = path.match(/\/(towns|sights)\/([^/]+?)(?:\.html)?$/);
        return m ? m[2] : null;
    }

    function slugFromLocation() {
        const m = location.pathname.match(/\/(towns|sights)\/([^/]+?)(?:\.html)?$/);
        return m ? m[2] : null;
    }

    function starsHtml(rating) {
        const filled = '★'.repeat(rating);
        const empty = '☆'.repeat(5 - rating);
        return `<span class="stars-filled">${filled}</span><span class="stars-empty">${empty}</span>`;
    }

    function ratingBadge(rating, inline = false) {
        if (!rating) return null;
        const wrap = document.createElement(inline ? 'span' : 'div');
        wrap.className = `rating-badge rating-${rating}` + (inline ? ' inline' : '');
        wrap.innerHTML = `${starsHtml(rating)} <span class="rating-label">${LABELS[rating]}</span>`;
        return wrap;
    }

    function injectIntoCards() {
        // Town cards
        document.querySelectorAll('a.town-card').forEach(card => {
            const slug = slugFromHref(card.getAttribute('href'));
            const rating = slug ? RATINGS[slug] : null;
            if (!rating) return;
            const badges = card.querySelector('.town-badges');
            if (badges && !badges.querySelector('.rating-badge')) {
                badges.insertBefore(ratingBadge(rating), badges.firstChild);
            }
        });
        // Sight cards
        document.querySelectorAll('a.sight-card').forEach(card => {
            const slug = slugFromHref(card.getAttribute('href'));
            const rating = slug ? RATINGS[slug] : null;
            if (!rating) return;
            const body = card.querySelector('.sight-card-body');
            if (body && !body.querySelector('.rating-badge')) {
                body.insertBefore(ratingBadge(rating), body.firstChild);
            }
        });
    }

    function injectIntoHero() {
        const slug = slugFromLocation();
        const rating = slug ? RATINGS[slug] : null;
        if (!rating) return;
        const badges = document.querySelector('.town-hero .badges');
        if (badges && !badges.querySelector('.rating-badge')) {
            const b = ratingBadge(rating, true);
            b.classList.add('hero-badge');
            b.classList.add('rating-hero');
            badges.insertBefore(b, badges.firstChild);
        }
    }

    function run() {
        injectIntoCards();
        injectIntoHero();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
