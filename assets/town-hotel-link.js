/* town-hotel-link.js
 * On a town/<file>.html page, inject a button that deep-links to that city's
 * real hotel options on hotels.html (#city-<slug>). Slugs differ from some
 * filenames, so we map them. Towns without hotel data are skipped silently.
 */
(function () {
  'use strict';
  // town filename (no .html, lowercase) -> hotels-data.js slug
  var MAP = {
    goslar:"goslar", quedlinburg:"quedlinburg", berlin:"berlin", dresden:"dresden",
    rostock:"rostock", luebeck:"lubeck", hamburg:"hamburg", frankfurt:"frankfurt",
    heidelberg:"heidelberg", wuerzburg:"wurzburg", rothenburg:"rothenburg",
    nuremberg:"nurnberg", munich:"munich", hannover:"hannover", bremen:"bremen",
    cologne:"cologne", aachen:"aachen", trier:"trier", salzburg:"salzburg",
    hallstatt:"hallstatt", vienna:"vienna", prague:"prague",
    "cesky-krumlov":"ceskykrumlov", copenhagen:"copenhagen"
  };

  function run() {
    var file = location.pathname.split("/").pop().replace(/\.html$/i, "").toLowerCase();
    var slug = MAP[file];
    if (!slug) return;
    var container = document.querySelector(".container");
    if (!container || document.getElementById("town-hotel-link")) return;

    var a = document.createElement("a");
    a.id = "town-hotel-link";
    a.className = "town-hotel-btn";
    a.href = "../hotels.html#city-" + slug;
    a.textContent = "🏨 ดูที่พักจริงในเมืองนี้ (Booking.com)";
    container.insertBefore(a, container.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
