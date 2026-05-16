# ทริปเยอรมนีของแม่ 2026 — Website Overview

**Trip Dates:** 14 พ.ย. – 25 พ.ย. 2026 (12 วันรวมเครื่องบิน, 10 วันบนแผ่นดินเยอรมัน)
**Travelers:** 7-8 ท่าน (คุณแม่ + เพื่อน ๆ)
**Route:** เยอรมนีตอนเหนือ + ตะวันออก (Frankfurt → Goslar → Harz → Berlin → Dresden → Rostock → Lübeck → Hamburg → Frankfurt)
**Transport:** Mercedes Sprinter van + คนขับส่วนตัว (เริ่ม-จบที่ FRA)

## โครงสร้างเว็บไซต์ (6 หน้า)

### 1. `index.html` — หน้าแรก
- Hero พร้อมนับถอยหลังถึงวันเดินทาง (live countdown)
- Stats cards: 10 วัน, 7-8 คน, 12 เมือง, ~2,500 km, 3-8°C
- Route timeline 12 วัน (รวมเที่ยวบิน)
- Highlights 6 จุด + Quick links ไปหน้าอื่น
- Callout: จุดเด่นของทริป

### 2. `itinerary.html` — ตารางทริป 10 วัน
- Accordion 12 วัน (รวมวันบิน)
- Expand all / Collapse all
- แต่ละวันมี: ระยะทาง+เวลาขับ, ช่วงเช้า/บ่าย/เย็น, จุดเที่ยว, callouts, hotel tag
- รองรับ deep-link (เช่น `#day6` เปิดวันที่ 6 อัตโนมัติ)

### 3. `hotels.html` — ที่พัก
- 7 hotel cards (Goslar, Quedlinburg, Berlin x3 คืน, Dresden, Rostock, Lübeck, Hamburg)
- เกณฑ์เลือก: 3-4 ดาว ใจกลางเมืองเก่า มีลิฟต์ มีอาหารเช้า
- ตารางสรุปการจองทั้งหมด + งบประมาณรวม

### 4. `transport.html` — การเดินทาง
- Flight cards (TG920 BKK→FRA และ TG921 FRA→BKK ขาตรง)
- รถตู้ + คนขับ: Sixt Limousine, Blacklane, Locomote, Thai Tour
- สิ่งที่ต้องคุยกับคนขับ + ทิป
- ข้อมูล FRA Meet & Greet + Duty-Free

### 5. `food.html` — อาหาร
- 12 dishes-to-try cards (ขาหมู, Currywurst, เพรทเซิล, Stollen, Marzipan ฯลฯ)
- ร้านที่แนะนำ 10 ร้าน ตามเมือง
- มารยาทการทาน + ข้อระวังสำหรับผู้สูงอายุ
- ตัวเลือกอาหารไทยในเมืองใหญ่

### 6. `tips.html` — คำแนะนำ
- Anchor nav (อากาศ / เสื้อผ้า / เงิน / สุขภาพ / มือถือ / ภาษา / ฉุกเฉิน / มารยาท)
- ตาราง 30+ วลีเยอรมัน พร้อมออกเสียงไทย
- เบอร์ฉุกเฉิน + สถานทูตไทย Berlin & Hamburg
- งบประมาณรวม/คน ~134,000 บาท

## ดีไซน์

**Color palette (German autumn):**
- Wine red `#7d2828` — primary
- Autumn gold `#c9a227` — accent
- Forest green `#3d5a3c` — secondary
- Cream `#faf6ee` — background
- Deep brown `#2d2419` — text

**Typography:**
- Sarabun (Google Fonts) — Thai content
- Playfair Display — decorative headings

**Interactive:**
- Live countdown timer (home)
- Accordion days with expand/collapse all
- Sticky responsive navigation with hamburger menu
- Deep-linking via URL hash
- Print-friendly CSS

## File Structure

```
Mom Germany trip/
├── index.html         # หน้าแรก
├── itinerary.html     # ตารางทริป 10 วัน
├── hotels.html        # ที่พัก 9 คืน
├── transport.html     # เครื่องบิน + รถตู้+คนขับ
├── food.html          # อาหารและร้าน
├── tips.html          # อากาศ/เสื้อผ้า/ภาษา/ฉุกเฉิน
├── styles.css         # Shared design system
├── assets/            # (พร้อมไว้ใส่ภาพ/ไอคอนเพิ่ม)
└── WEBSITE_OVERVIEW.md
```

## To-Do ก่อนเดินทาง

- [ ] จองตั๋วเครื่องบิน TG920/TG921 (ก่อน ก.ค. 2026)
- [ ] ขอวีซ่าเชงเก้น (ใช้เวลา ~15 วันทำการ)
- [ ] ทำประกันเดินทาง (วงเงิน €30,000+)
- [ ] จองรถตู้+คนขับ (Sixt/Blacklane) อย่างน้อย 3 เดือนล่วงหน้า
- [ ] จองโรงแรม 9 คืน (ก่อน ก.ค. 2026 เพื่อราคาดี)
- [ ] จองตั๋ว Sanssouci, Reichstag dome (ฟรีแต่ต้องจอง)
- [ ] อัพเดทตารางเรือล่อง Wannsee เดือน พ.ย. ก่อนทริป
- [ ] ตรวจตารางตลาดคริสต์มาส (มักเปิด 24-27 พ.ย.)

## การ Deploy

เป็น static HTML site ล้วน ๆ — สามารถ:
- เปิดในเบราว์เซอร์ตรง ๆ ได้
- อัปโหลด GitHub Pages, Netlify, Vercel
- ใส่ใน Dropbox/Google Drive แชร์ลิงก์ให้คุณแม่และเพื่อน ๆ
- พิมพ์เป็น PDF ติดตัวไป (Ctrl+P ใน Chrome → Save as PDF)

---

*Created with love by Nick | พฤษภาคม 2026*
