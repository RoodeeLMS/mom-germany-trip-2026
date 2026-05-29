/* ============================================================
   hotels-data.js  —  Real bookable hotel options (Booking.com)
   Searched: 4 rooms / 8 adults / breakfast incl. / 3–4★
   Prices = total for 4 rooms for the searched stay (EUR).
   The page computes €/room/night = total / 4 / nights.
   "Core" cities use real trip dates; "extra" cities use a
   sample weekday night (18 Nov 2026) only for price comparison.
   ALL links: pick a rate marked "Free cancellation" on the hotel page.
   Last pulled: 2026-05-29.  aid=8132308.
   ============================================================ */
window.HOTELS_DATA = [
  /* ---------- CORE: 10-day plan (real dates) ---------- */
  {
    slug:"goslar", thai:"กอสลาร์", en:"Goslar", dateLabel:"15 พ.ย.", nights:1, sample:false, routes:[10,20],
    hotels:[
      {n:"AKZENT Hotel Villa Saxer", u:"https://www.booking.com/hotel/de/akzent-villa-saxer.html?aid=8132308&checkin=2026-11-15&checkout=2026-11-16&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.3, rv:1260, t:536.32, lift:true, pick:true, d:"ย่านท็อปเรตติ้ง ใกล้เมืองเก่า"},
      {n:"LIONO BoutiqueHotel", u:"https://www.booking.com/hotel/de/liono-boutiquehotel.html?aid=8132308&checkin=2026-11-15&checkout=2026-11-16&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.4, rv:924, t:458, lift:false, d:"บูทีค คะแนนสูงสุด • ~1.5 กม.จากเมืองเก่า"},
      {n:"Hotel Der Achtermann", u:"https://www.booking.com/hotel/de/der-achtermann.html?aid=8132308&checkin=2026-11-15&checkout=2026-11-16&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:7.5, rv:2809, t:552, lift:true, d:"แลนด์มาร์กข้างเมืองเก่า • มีสระในร่ม"},
      {n:"Romantik Hotel Alte Münze", u:"https://www.booking.com/hotel/de/alte-muenze.html?aid=8132308&checkin=2026-11-15&checkout=2026-11-16&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:1510, t:644, lift:false, d:"โรแมนติก ในเมืองเก่า"}
    ]
  },
  {
    slug:"quedlinburg", thai:"เควดลินบวร์ก", en:"Quedlinburg", dateLabel:"16 พ.ย.", nights:1, sample:false, routes:[10,20],
    hotels:[
      {n:"Hotel Theophano", u:"https://www.booking.com/hotel/de/romantik-theophano.html?aid=8132308&checkin=2026-11-16&checkout=2026-11-17&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:2733, t:439.56, lift:false, pick:true, d:"อยู่บนจัตุรัส Markt กลางเมือง UNESCO"},
      {n:"Best Western Hotel Schlossmühle", u:"https://www.booking.com/hotel/de/ringhotelschlossmuehle.html?aid=8132308&checkin=2026-11-16&checkout=2026-11-17&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:2085, t:472, lift:true, d:"เมืองเก่า • มีลิฟต์"},
      {n:"Hotel Zum Bär", u:"https://www.booking.com/hotel/de/zum-bar.html?aid=8132308&checkin=2026-11-16&checkout=2026-11-17&no_rooms=4&group_adults=8&selected_currency=EUR", s:3, r:8.9, rv:1546, t:510, lift:false, d:"บนจัตุรัส Markt"},
      {n:"REGIOHOTEL Quedlinburger Hof", u:"https://www.booking.com/hotel/de/quedlinburger-hof.html?aid=8132308&checkin=2026-11-16&checkout=2026-11-17&no_rooms=4&group_adults=8&selected_currency=EUR", s:3, r:7.6, rv:1715, t:307.2, lift:true, d:"คุ้มสุด • มีลิฟต์ (นอกเมืองเล็กน้อย)"}
    ]
  },
  {
    slug:"berlin", thai:"แบร์ลิน", en:"Berlin", dateLabel:"17–19 พ.ย.", nights:3, sample:false, routes:[10,20,25],
    hotels:[
      {n:"The Social Hub Berlin Alexanderplatz", u:"https://www.booking.com/hotel/de/the-social-hub-berlin.html?aid=8132308&checkin=2026-11-17&checkout=2026-11-20&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:9229, t:1912.2, lift:true, pick:true, d:"Mitte / Alexanderplatz ใจกลาง"},
      {n:"Garner Hotel Berlin Checkpoint Charlie", u:"https://www.booking.com/hotel/de/garner-hotel-berlin-checkpointcharlie.html?aid=8132308&checkin=2026-11-17&checkout=2026-11-20&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:1512, t:1708, lift:true, d:"ใกล้ Checkpoint Charlie (คุ้ม)"},
      {n:"H4 Hotel Berlin Alexanderplatz", u:"https://www.booking.com/hotel/de/h4-hotel-berlin-alexanderplatz.html?aid=8132308&checkin=2026-11-17&checkout=2026-11-20&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:12028, t:1974, lift:true, d:"Alexanderplatz ใกล้ทุกอย่าง"},
      {n:"Maritim proArte Hotel Berlin", u:"https://www.booking.com/hotel/de/maritimberlin.html?aid=8132308&checkin=2026-11-17&checkout=2026-11-20&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:11292, t:2105.28, lift:true, d:"Friedrichstraße ทำเลทอง ใกล้ Brandenburg Gate"}
    ]
  },
  {
    slug:"dresden", thai:"เดรสเดน", en:"Dresden", dateLabel:"20 พ.ย.", nights:1, sample:false, routes:[10,20,25],
    hotels:[
      {n:"Aparthotel Neumarkt", u:"https://www.booking.com/hotel/de/aparthotel-neumarkt.html?aid=8132308&checkin=2026-11-20&checkout=2026-11-21&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:3283, t:594, lift:true, pick:true, d:"ติดโบสถ์ Frauenkirche"},
      {n:"Holiday Inn Dresden - Am Zwinger", u:"https://www.booking.com/hotel/de/holiday-inn-dresden-am-zwinger.html?aid=8132308&checkin=2026-11-20&checkout=2026-11-21&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:3302, t:584, lift:true, d:"Altstadt ใกล้ Zwinger"},
      {n:"Aparthotel Am Schloss", u:"https://www.booking.com/hotel/de/aparthotel-am-schloss.html?aid=8132308&checkin=2026-11-20&checkout=2026-11-21&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.2, rv:3808, t:605, lift:true, d:"Altstadt คะแนนสูงสุด"},
      {n:"IntercityHotel Dresden", u:"https://www.booking.com/hotel/de/intercityhotel-dresden.html?aid=8132308&checkin=2026-11-20&checkout=2026-11-21&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:3454, t:480, lift:true, d:"Altstadt ใกล้สถานี (คุ้ม)"}
    ]
  },
  {
    slug:"rostock", thai:"รอสต็อค", en:"Rostock", dateLabel:"21 พ.ย.", nights:1, sample:false, routes:[10,20,25],
    hotels:[
      {n:"Vienna House by Wyndham Sonne Rostock", u:"https://www.booking.com/hotel/de/viennahousehotelsonne.html?aid=8132308&checkin=2026-11-21&checkout=2026-11-22&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:3239, t:566.72, lift:true, pick:true, d:"บนจัตุรัส Neuer Markt กลางเมือง"},
      {n:"Pentahotel Rostock", u:"https://www.booking.com/hotel/de/pentahotel-rostock.html?aid=8132308&checkin=2026-11-21&checkout=2026-11-22&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:3809, t:524.8, lift:true, d:"ใจกลางเมือง (คุ้ม)"},
      {n:"ScanHotels City", u:"https://www.booking.com/hotel/de/scanhotels-city-rostock.html?aid=8132308&checkin=2026-11-21&checkout=2026-11-22&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.2, rv:6952, t:673.36, lift:true, d:"คะแนนสูงสุด • Lange Str. ใจกลาง"},
      {n:"IntercityHotel Rostock", u:"https://www.booking.com/hotel/de/intercityhotelrostock.html?aid=8132308&checkin=2026-11-21&checkout=2026-11-22&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.1, rv:3343, t:464, lift:true, d:"ใกล้สถานี (คุ้มสุด)"}
    ]
  },
  {
    slug:"lubeck", thai:"ลือเบค", en:"Lübeck", dateLabel:"22 พ.ย.", nights:1, sample:false, routes:[10,20,25],
    hotels:[
      {n:"ATLANTIC Hotel Lübeck", u:"https://www.booking.com/hotel/de/luebeck.html?aid=8132308&checkin=2026-11-22&checkout=2026-11-23&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:3488, t:608.4, lift:true, pick:true, d:"บนเกาะเมืองเก่า (Schmiedestr.)"},
      {n:"Bob W Lübeck Old Town", u:"https://www.booking.com/hotel/de/charly-lubeck.html?aid=8132308&checkin=2026-11-22&checkout=2026-11-23&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:1612, t:567.8, lift:true, d:"เมืองเก่า คะแนนสูง"},
      {n:"Hotel IV Jahreszeiten Lübeck", u:"https://www.booking.com/hotel/de/vier-jahreszeiten-lubeck.html?aid=8132308&checkin=2026-11-22&checkout=2026-11-23&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:3076, t:450, lift:true, d:"คุ้มสุด"},
      {n:"IntercityHotel Lübeck", u:"https://www.booking.com/hotel/de/intercityhotel-lubeck.html?aid=8132308&checkin=2026-11-22&checkout=2026-11-23&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:2362, t:552, lift:true, d:"ใกล้สถานีหลัก"}
    ]
  },
  {
    slug:"hamburg", thai:"ฮัมบวร์ก", en:"Hamburg", dateLabel:"23 พ.ย.", nights:1, sample:false, routes:[10,20,25],
    hotels:[
      {n:"Holiday Inn Hamburg - HafenCity", u:"https://www.booking.com/hotel/de/holiday-inn-hamburg-hafencity.html?aid=8132308&checkin=2026-11-23&checkout=2026-11-24&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:7724, t:625.04, lift:true, pick:true, d:"ติด Speicherstadt / Miniatur Wunderland"},
      {n:"Best Western Plus Hotel St. Raphael", u:"https://www.booking.com/hotel/de/straphaelbestwesternhh.html?aid=8132308&checkin=2026-11-23&checkout=2026-11-24&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:6211, t:620, lift:true, d:"ใกล้สถานีหลัก (St. Georg)"},
      {n:"Scandic Hamburg Emporio", u:"https://www.booking.com/hotel/de/scandic-emporio-hamburg.html?aid=8132308&checkin=2026-11-23&checkout=2026-11-24&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.7, rv:7660, t:688, lift:true, d:"ใจกลางเมือง (New Town)"},
      {n:"Novotel Hamburg Central Station", u:"https://www.booking.com/hotel/de/novotel-hamburg-central-station.html?aid=8132308&checkin=2026-11-23&checkout=2026-11-24&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:3426, t:752, lift:true, d:"เมืองเก่า ใกล้สถานีหลัก"}
    ]
  },

  /* ---------- EXTRA: 20 & 25-day plans (sample night 18 Nov) ---------- */
  {
    slug:"frankfurt", thai:"แฟรงก์เฟิร์ต", en:"Frankfurt", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    note:"⚠️ คืนตัวอย่าง (พุธ 18 พ.ย.) ราคากลางเมืองพุ่งสูง — น่าจะตรงงานแฟร์ Messe. แฟรงก์เฟิร์ตเป็นเมืองมา/กลับ ลองเช็กวันจริงอีกครั้ง โซนสนามบินสะดวกและถูกกว่า",
    hotels:[
      {n:"Flemings Hotel Frankfurt Main-Riverside", u:"https://www.booking.com/hotel/de/fleming-s-hotel-frankfurt-main-riverside.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:3888, t:1047.2, lift:true, d:"ใจกลางเมือง ใกล้ Römer/Zeil"},
      {n:"IntercityHotel Frankfurt Airport", u:"https://www.booking.com/hotel/de/interchotelfrankairport.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.1, rv:3919, t:574.6, lift:true, pick:true, d:"ที่สนามบิน — สะดวกวันมา/วันกลับ (คุ้ม)"},
      {n:"Hyatt Place Frankfurt Airport", u:"https://www.booking.com/hotel/de/hyatt-place-frankfurt-airport.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.7, rv:9727, t:952, lift:true, d:"ที่สนามบิน คะแนนสูง"}
    ]
  },
  {
    slug:"heidelberg", thai:"ไฮเดลแบร์ก", en:"Heidelberg", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"Leonardo Hotel Heidelberg City Center", u:"https://www.booking.com/hotel/de/leonardo-heidelberg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.7, rv:5664, t:558, lift:true, pick:true, d:"Bergheim เดินถึงเมืองเก่า"},
      {n:"NH Collection Heidelberg", u:"https://www.booking.com/hotel/de/nhheidelberg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:3475, t:640, lift:true, d:"Bergheim ริมแม่น้ำ"},
      {n:"Leonardo Hotel Heidelberg", u:"https://www.booking.com/hotel/de/leonardohotelheidelberg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:6566, t:385.2, lift:true, d:"คุ้มสุด (นอกเมืองเล็กน้อย)"}
    ]
  },
  {
    slug:"wurzburg", thai:"เวือร์ซบวร์ก", en:"Würzburg", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"City Partner Hotel Strauss", u:"https://www.booking.com/hotel/de/citypartnerhotelstrauss.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:3, r:8.2, rv:3594, t:556, lift:true, pick:true, d:"ใจกลางเมือง (Juliuspromenade)"},
      {n:"Dorint Hotel Würzburg", u:"https://www.booking.com/hotel/de/wurzburg-hotels.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:3957, t:684, lift:true, d:"ใจกลางเมือง"},
      {n:"Best Western Premier Hotel Rebstock", u:"https://www.booking.com/hotel/de/best-western-premier-rebstock.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:2286, t:704, lift:true, d:"ใจกลางเมือง อาคารบาโรก"}
    ]
  },
  {
    slug:"rothenburg", thai:"โรเทนบวร์ก", en:"Rothenburg", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"Hotel BurgGartenpalais", u:"https://www.booking.com/hotel/de/meistertrunkrothenburg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.2, rv:1521, t:545, lift:true, pick:true, d:"ในกำแพงเมืองเก่า (Herrngasse)"},
      {n:"Hotel Reichsküchenmeister", u:"https://www.booking.com/hotel/de/reichs-kuchenmeister.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:3459, t:544, lift:true, d:"เมืองเก่า (Kirchplatz)"},
      {n:"Hotel Rappen Rothenburg", u:"https://www.booking.com/hotel/de/rappen-rothenburg-ob-der-tauber.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:4346, t:496, lift:true, d:"ริมประตู Würzburger Tor (คุ้ม)"},
      {n:"Hotel Eisenhut", u:"https://www.booking.com/hotel/de/eisenhut-ratskeller-rothenburg-ob-der-tauber1.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:3474, t:515.2, lift:true, d:"เมืองเก่า คลาสสิก (Herrngasse)"}
    ]
  },
  {
    slug:"nurnberg", thai:"นูเรมเบิร์ก", en:"Nürnberg", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"Melter Hotel & Apartments", u:"https://www.booking.com/hotel/de/melter-amp-apartments.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.2, rv:1756, t:588.4, lift:true, pick:true, d:"Königstraße เมืองเก่า"},
      {n:"Hotel VICTORIA Nürnberg", u:"https://www.booking.com/hotel/de/eazvictoriahotel.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.0, rv:3441, t:638.4, lift:true, d:"Königstraße เมืองเก่า"},
      {n:"Park Inn by Radisson Nürnberg", u:"https://www.booking.com/hotel/de/nurnberg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:5670, t:456, lift:true, d:"ใกล้สถานีหลัก (คุ้มสุด)"},
      {n:"NH Collection Nürnberg City", u:"https://www.booking.com/hotel/de/nhnurnbergcity.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:4344, t:654, lift:true, d:"Mitte ใกล้สถานี"}
    ]
  },
  {
    slug:"munich", thai:"มิวนิก", en:"Munich", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"Hotel Europa", u:"https://www.booking.com/hotel/de/europamu.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:5765, t:616, lift:true, pick:true, d:"Maxvorstadt ใกล้สถานีหลัก"},
      {n:"Eurostars Grand Central", u:"https://www.booking.com/hotel/de/eurostars-grand-central.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.7, rv:4994, t:648, lift:true, d:"ใกล้สถานีหลัก"},
      {n:"Bayer's Boardinghouse und Hotel", u:"https://www.booking.com/hotel/de/bayers-boardinghouse.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:2740, t:383.2, lift:true, d:"ใกล้สถานีหลัก (คุ้มสุด)"},
      {n:"Hotel MIO by AMANO", u:"https://www.booking.com/hotel/de/mio-by-amano.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:4728, t:832.24, lift:true, d:"Altstadt ใกล้ Marienplatz (กลางสุด)"}
    ]
  },
  {
    slug:"hannover", thai:"ฮันโนเวอร์", en:"Hannover", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20],
    hotels:[
      {n:"Hotel Amadeus", u:"https://www.booking.com/hotel/de/amadeushannover.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:2685, t:524.4, lift:true, pick:true, d:"Linden-Limmer (คุ้ม)"},
      {n:"IntercityHotel Hannover Hbf-Ost", u:"https://www.booking.com/hotel/de/intercityhotel-hannover-hauptbahnhof-ost.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:1640, t:640, lift:true, d:"ใกล้สถานีหลัก"},
      {n:"June Six Hotel Hannover City", u:"https://www.booking.com/hotel/de/june-six-hotel-hannover-city.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:2191, t:696, lift:true, d:"Mitte กลางเมือง"},
      {n:"NH Hannover", u:"https://www.booking.com/hotel/de/nh-hannover.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:2605, t:736.24, lift:true, d:"Mitte (Klagesmarkt)"}
    ]
  },
  {
    slug:"bremen", thai:"เบรเมน", en:"Bremen", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    note:"⚠️ คืนตัวอย่างราคาขึ้นสูงผิดปกติ (น่าจะมีงาน/แฟร์) — เช็กวันจริงอีกครั้ง น่าจะถูกลงมาก",
    hotels:[
      {n:"Flemings Hotel Bremen-Hauptbahnhof", u:"https://www.booking.com/hotel/de/intercitybremen.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:7.8, rv:5500, t:679.2, lift:true, pick:true, d:"ใกล้สถานีหลัก / เมืองเก่า"},
      {n:"ACHAT Hotel Bremen City", u:"https://www.booking.com/hotel/de/elements-pure-feng-shui-bremen.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:2149, t:1009.8, lift:true, d:"Mitte กลางเมือง"},
      {n:"Steigenberger Hotel Bremen", u:"https://www.booking.com/hotel/de/steigenberger-bremen.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:3683, t:1280, lift:true, d:"ริมแม่น้ำ (Walle)"}
    ]
  },
  {
    slug:"cologne", thai:"โคโลญ", en:"Cologne", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    hotels:[
      {n:"Maternushaus", u:"https://www.booking.com/hotel/de/maternushaus.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:3183, t:644.4, lift:true, pick:true, d:"Altstadt-Nord ใกล้ย่านเก่า"},
      {n:"Classik Hotel Antonius", u:"https://www.booking.com/hotel/de/classikhotelantonius.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:4176, t:704, lift:true, d:"Altstadt-Nord"},
      {n:"Hotel Santo", u:"https://www.booking.com/hotel/de/santo.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:7083, t:876, lift:true, d:"Altstadt-Nord ใกล้มหาวิหาร"},
      {n:"Leonardo Hotel Köln", u:"https://www.booking.com/hotel/de/leonardo-hotel-koln.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:94, t:558, lift:true, d:"นอกเมือง (Buchforst) คุ้ม"}
    ]
  },
  {
    slug:"aachen", thai:"อาเคิน", en:"Aachen", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[20,25],
    note:"ในแผนเป็นจุดแวะกลางวัน (ไม่ค้างคืน) — รายการนี้เผื่อกรณีอยากค้าง",
    hotels:[
      {n:"Aquis Grana City Hotel", u:"https://www.booking.com/hotel/de/aquis-grana-city.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:6507, t:510, lift:true, pick:true, d:"ใจกลาง ใกล้มหาวิหาร"},
      {n:"Art Hotel Superior", u:"https://www.booking.com/hotel/de/art-superior.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:3380, t:652, lift:true, d:"Aachen Mitte มีสปา"},
      {n:"Best Western Plus Hotel Regence", u:"https://www.booking.com/hotel/de/best-western-regence.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:2401, t:664, lift:true, d:"Aachen Mitte"}
    ]
  },
  {
    slug:"trier", thai:"เทรียร์", en:"Trier", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    hotels:[
      {n:"Best Western Hotel Trier City", u:"https://www.booking.com/hotel/de/bestwestern-hotel-trier.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.2, rv:5011, t:496, lift:true, pick:true, d:"ใจกลาง (Kaiserstraße)"},
      {n:"Mercure Hotel Trier Porta Nigra", u:"https://www.booking.com/hotel/de/mercureportanigratrier.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.0, rv:2583, t:548.4, lift:true, d:"ติดประตู Porta Nigra"},
      {n:"Blesius Garten", u:"https://www.booking.com/hotel/de/blesiusgarten.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.3, rv:1742, t:516.8, lift:true, d:"ย่าน Olewig มีสระ (นอกเมืองเล็กน้อย)"}
    ]
  },
  {
    slug:"salzburg", thai:"ซาลซ์บวร์ก", en:"Salzburg", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    hotels:[
      {n:"Design Hotel zum Hirschen Salzburg", u:"https://www.booking.com/hotel/at/zumhirschen.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.0, rv:3372, t:668.36, lift:true, pick:true, d:"ใกล้สถานี เดินถึงเมืองเก่า"},
      {n:"Hotel Haus Arenberg", u:"https://www.booking.com/hotel/at/haus-arenberg.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.1, rv:747, t:500, lift:false, d:"เงียบสงบ วิวเมือง • เดิน 15 นาที (คุ้ม คะแนนสูง)"},
      {n:"Altstadt Hotel Stadtkrug", u:"https://www.booking.com/hotel/at/stadtkrug.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:2046, t:702, lift:true, d:"เมืองเก่า (Linzer Gasse)"},
      {n:"Boutiquehotel Amadeus", u:"https://www.booking.com/hotel/at/altstadthotelamadeus.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:1329, t:759, lift:true, d:"เมืองเก่า (Linzer Gasse)"}
    ]
  },
  {
    slug:"hallstatt", thai:"ฮัลล์ชตัทท์", en:"Hallstatt", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    note:"⚠️ หมู่บ้านเล็กมาก ห้องว่างสำหรับ 4 ห้องจำกัด — อาจต้องพักใกล้ ๆ เช่น Obertraun / Bad Goisern. ราคาต่อห้องสูงเป็นปกติ",
    hotels:[
      {n:"Seehotel Grüner Baum", u:"https://www.booking.com/hotel/at/seehotel-gruner-baum.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:1049, t:1430, lift:true, pick:true, d:"ริมทะเลสาบ จัตุรัส Markt (พรีเมียม วิวสวยสุด)"},
      {n:"Weisses Lamm", u:"https://www.booking.com/hotel/at/weisses-lamm.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:0, r:0, rv:0, t:596, lift:true, d:"ใจกลาง Hallstatt (คุ้มสุด)"},
      {n:"Fenix Hall Boutique Hotel", u:"https://www.booking.com/hotel/at/fenix-hall.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:0, r:0, rv:0, t:964, lift:false, d:"บูทีค ริมทะเลสาบ"}
    ]
  },
  {
    slug:"vienna", thai:"เวียนนา", en:"Vienna", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    hotels:[
      {n:"Hotel Capricorno", u:"https://www.booking.com/hotel/at/hotel-capricorno.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.0, rv:2387, t:794.71, lift:true, pick:true, d:"Innere Stadt (Schwedenplatz) กลางเมือง"},
      {n:"Hotel Erzherzog Rainer", u:"https://www.booking.com/hotel/at/erzherzograiner.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.0, rv:3776, t:649.4, lift:true, d:"Wieden ใกล้ Karlsplatz"},
      {n:"Austria Trend Hotel Europa Wien", u:"https://www.booking.com/hotel/at/austria-trend-europa-wien.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:7002, t:883.44, lift:true, d:"ติด Kärntnerstraße / Stephansplatz (กลางสุด)"},
      {n:"Exe Vienna", u:"https://www.booking.com/hotel/at/eurostars-vienna.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.7, rv:4185, t:377.96, lift:true, d:"Hernals (คุ้มสุด นอกศูนย์กลาง)"}
    ]
  },
  {
    slug:"prague", thai:"ปราก", en:"Prague", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    hotels:[
      {n:"Charles Bridge Palace", u:"https://www.booking.com/hotel/cz/charles-bridge-palace.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:4887, t:275, lift:true, pick:true, d:"Old Town ติดสะพานชาร์ลส์"},
      {n:"Grand Majestic Hotel Prague", u:"https://www.booking.com/hotel/cz/grand-majestic-plaza.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:6741, t:476, lift:true, d:"Prague 1 เมืองเก่า"},
      {n:"Pytloun Bristol Residence Prague", u:"https://www.booking.com/hotel/cz/residence-dlouha-old-town.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:2629, t:284.4, lift:true, d:"Old Town (Dlouhá)"},
      {n:"La Fenice", u:"https://www.booking.com/hotel/cz/la-fenice-prague.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:3763, t:229.9, lift:true, d:"Vinohrady (คุ้มสุด)"}
    ]
  },
  {
    slug:"ceskykrumlov", thai:"เชสกีครุมลอฟ", en:"Český Krumlov", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    hotels:[
      {n:"Hotel OLDINN", u:"https://www.booking.com/hotel/cz/the-old-inn.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:838, t:392.4, lift:true, pick:true, d:"บนจัตุรัสหลัก Náměstí Svornosti"},
      {n:"Hotel Grand", u:"https://www.booking.com/hotel/cz/hotelgrand.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.0, rv:1264, t:420, lift:false, d:"บนจัตุรัสหลัก"},
      {n:"Hotel Dvorak Cesky Krumlov", u:"https://www.booking.com/hotel/cz/orea-dvorak-cesky-krumlov.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:9.1, rv:826, t:440, lift:true, d:"ใจกลางเมืองเก่า (Radniční)"},
      {n:"LH Hotel Mlýn", u:"https://www.booking.com/hotel/cz/mla1-2n.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.8, rv:1921, t:336.84, lift:true, d:"ริมแม่น้ำ เมืองเก่า (คุ้ม)"}
    ]
  },
  {
    slug:"copenhagen", thai:"โคเปนเฮเกน", en:"Copenhagen", dateLabel:"ตัวอย่าง", nights:1, sample:true, routes:[25],
    note:"เมืองค่าครองชีพสูง — ราคาต่อห้องสูงกว่าเยอรมัน",
    hotels:[
      {n:"Scandic Nørreport", u:"https://www.booking.com/hotel/dk/scandic-norreport.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.5, rv:2106, t:663.7, lift:true, pick:true, d:"ใจกลางเมือง (Nørreport)"},
      {n:"Moxy Copenhagen", u:"https://www.booking.com/hotel/dk/moxy-copenhagen-kobenhavn.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.6, rv:2602, t:568.43, lift:true, d:"Sydhavnen (รถไฟใต้ดิน) คุ้ม"},
      {n:"Bob W Copenhagen Østerbro", u:"https://www.booking.com/hotel/dk/bob-w-osterbro-copenhagen.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.9, rv:3871, t:608.48, lift:true, d:"Østerbro คะแนนสูง"},
      {n:"Best Western Hotel Hebron", u:"https://www.booking.com/hotel/dk/best-western-hebron.html?aid=8132308&checkin=2026-11-18&checkout=2026-11-19&no_rooms=4&group_adults=8&selected_currency=EUR", s:4, r:8.4, rv:2810, t:755.77, lift:true, d:"Vesterbro ใกล้สถานีกลาง"}
    ]
  }
];
