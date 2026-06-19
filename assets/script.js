/* ============================================================
   VEXA.UZ — Main Script
   ============================================================ */

/* ---------- Translations ---------- */
const translations = {
  uz: {
    nav_products: "Mahsulotlar",
    nav_features: "Imkoniyatlar",
    nav_stats: "Statistika",
    nav_contact: "Aloqa",
    badge_trust: "O'zbekiston bo'ylab 10+ biznes ishonadi",
    hero_title_1: "Biznesingizni",
    hero_highlight: "yagona qudratli",
    hero_title_2: " platformada boshqaring",
    hero_desc: "Vexa ekotizimi — savdo, ijara va mijozlar bilan ishlashni avtomatlashtiruvchi,",
    hero_ai: " sun'iy intellekt",
    hero_desc_2: " bilan kuchaytirilgan zamonaviy yechimlar to'plami.",
    btn_products: "Mahsulotlarni ko'rish",
    btn_demo: "Demo so'rash",
    trust_security: "Bank darajasidagi xavfsizlik",
    trust_uptime: "99.9% ishonchlilik",
    trust_support: "24/7 qo'llab-quvvatlash",
    section_label: "Ekotizim tarkibi",
    section_title: "Vexa dasturiy majmuasi",
    section_desc: "Har bir mahsulot bir-biri bilan uzviy bog'langan. Ma'lumotlar real vaqtda sinxronlanadi.",
    sales_desc: "Aqlli savdo avtomatizatsiyasi: tovar harakati, ombor nazorati va bulutli kassa. Barcha savdo kanallarini bir joydan boshqaring.",
    rent_desc: "Ijara biznesi uchun to'liq boshqaruv: bronlash, shartnomalar, to'lov grafigi. Avtomobildan kechki libosgacha.",
    crm_desc: "Mijozlar bilan aloqalarni chuqurlashtiring: savdo voronkasi, xodimlar KPI va sun'iy intellekt asosida tavsiyalar.",
    link_login: "Tizimga kirish",
    sales_badge: "Sotuv +45%",
    rent_badge: "Bandlov +60%",
    crm_badge: "Konversiya 2x",
    feat_cloud_title: "Bulutli texnologiya",
    feat_cloud_desc: "Ma'lumotlaringiz xavfsiz bulutda. Dunyoning istalgan nuqtasidan real vaqt rejimida boshqaring.",
    feat_mobile_title: "Mobil ofis",
    feat_mobile_desc: "Planshet va smartfon uchun to'liq moslashtirilgan. Biznesingiz doim yoningizda.",
    feat_security_title: "Yuqori himoya",
    feat_security_desc: "Shifrlash va har kungi zaxira nusxalari. Ma'lumotlaringiz yo'qolish xavfidan himoyalangan.",
    feat_analytics_title: "Aniq analitika",
    feat_analytics_desc: "Daromad, xarajat va foyda hisobotlari. AI yordamida prognozlar va tavsiyalar.",
    stat_clients: "faol mijoz",
    stat_regions: "viloyatda mavjud",
    stat_uptime: "server barqarorligi",
    stat_support: "texnik yordam",
    footer_products: "Mahsulotlar",
    footer_contact: "Bog'lanish",
    footer_desc: "O'zbekiston bo'ylab bizneslarni raqamlashtirish va avtomatlashtirish bo'yicha ishonchli texnologik hamkor.",
    footer_rights: "© 2026 Vexa.uz — Barcha huquqlar himoyalangan. Yagona ekotizim.",
    footer_status: "Barcha tizimlar barqaror",
  },

  ru: {
    nav_products: "Продукты",
    nav_features: "Возможности",
    nav_stats: "Статистика",
    nav_contact: "Связь",
    badge_trust: "10+ бизнесов доверяют нам по всему Узбекистану",
    hero_title_1: "Управляйте бизнесом",
    hero_highlight: "в единой мощной",
    hero_title_2: " платформе",
    hero_desc: "Экосистема Vexa — современный набор решений, автоматизирующий продажи, аренду и работу с клиентами,",
    hero_ai: " усиленный искусственным интеллектом",
    hero_desc_2: ".",
    btn_products: "Смотреть продукты",
    btn_demo: "Запросить демо",
    trust_security: "Безопасность банковского уровня",
    trust_uptime: "99.9% надёжность",
    trust_support: "Поддержка 24/7",
    section_label: "Состав экосистемы",
    section_title: "Программный комплекс Vexa",
    section_desc: "Каждый продукт органично связан друг с другом. Данные синхронизируются в реальном времени.",
    sales_desc: "Умная автоматизация продаж: движение товаров, контроль склада и облачная касса. Управляйте всеми каналами из одного места.",
    rent_desc: "Полное управление арендным бизнесом: бронирование, договоры, график платежей. От автомобилей до вечерних нарядов.",
    crm_desc: "Углубляйте отношения с клиентами: воронка продаж, KPI сотрудников и рекомендации на основе ИИ.",
    link_login: "Войти",
    sales_badge: "Продажи +45%",
    rent_badge: "Бронирование +60%",
    crm_badge: "Конверсия 2x",
    feat_cloud_title: "Облачные технологии",
    feat_cloud_desc: "Ваши данные в безопасном облаке. Управляйте в реальном времени из любой точки мира.",
    feat_mobile_title: "Мобильный офис",
    feat_mobile_desc: "Полностью адаптирован для планшетов и смартфонов. Бизнес всегда рядом с вами.",
    feat_security_title: "Высокая защита",
    feat_security_desc: "Шифрование и ежедневные резервные копии. Ваши данные защищены от потери.",
    feat_analytics_title: "Точная аналитика",
    feat_analytics_desc: "Отчёты о доходах, расходах и прибыли. Прогнозы и рекомендации с помощью ИИ.",
    stat_clients: "активных клиентов",
    stat_regions: "регионов охвата",
    stat_uptime: "стабильность серверов",
    stat_support: "техническая поддержка",
    footer_products: "Продукты",
    footer_contact: "Связаться",
    footer_desc: "Надёжный технологический партнёр по цифровизации и автоматизации бизнеса по всему Узбекистану.",
    footer_rights: "© 2026 Vexa.uz — Все права защищены. Единая экосистема.",
    footer_status: "Все системы работают стабильно",
  },

  en: {
    nav_products: "Products",
    nav_features: "Features",
    nav_stats: "Statistics",
    nav_contact: "Contact",
    badge_trust: "10+ businesses trust us across Uzbekistan",
    hero_title_1: "Manage your business",
    hero_highlight: "in one powerful",
    hero_title_2: " platform",
    hero_desc: "Vexa ecosystem — a modern suite of solutions automating sales, rental and customer management,",
    hero_ai: " powered by AI",
    hero_desc_2: ".",
    btn_products: "View Products",
    btn_demo: "Request Demo",
    trust_security: "Bank-level security",
    trust_uptime: "99.9% reliability",
    trust_support: "24/7 support",
    section_label: "Ecosystem components",
    section_title: "Vexa Software Suite",
    section_desc: "Every product is organically connected. Data syncs in real time.",
    sales_desc: "Smart sales automation: inventory tracking, warehouse control and cloud POS. Manage all sales channels from one place.",
    rent_desc: "Complete rental management: bookings, contracts, payment schedules. From cars to evening wear.",
    crm_desc: "Deepen customer relationships: sales funnel, employee KPIs and AI-based recommendations.",
    link_login: "Log In",
    sales_badge: "Sales +45%",
    rent_badge: "Bookings +60%",
    crm_badge: "Conversion 2x",
    feat_cloud_title: "Cloud Technology",
    feat_cloud_desc: "Your data is safe in the cloud. Manage in real time from anywhere in the world.",
    feat_mobile_title: "Mobile Office",
    feat_mobile_desc: "Fully optimized for tablets and smartphones. Your business is always with you.",
    feat_security_title: "High Security",
    feat_security_desc: "Encryption and daily backups. Your data is protected from loss.",
    feat_analytics_title: "Precise Analytics",
    feat_analytics_desc: "Revenue, expense and profit reports. AI-powered forecasts and recommendations.",
    stat_clients: "active clients",
    stat_regions: "regions covered",
    stat_uptime: "server stability",
    stat_support: "technical support",
    footer_products: "Products",
    footer_contact: "Contact",
    footer_desc: "A trusted technology partner for digitizing and automating businesses across Uzbekistan.",
    footer_rights: "© 2026 Vexa.uz — All rights reserved. One ecosystem.",
    footer_status: "All systems operational",
  },

  tj: {
    nav_products: "Маҳсулотҳо",
    nav_features: "Имкониятҳо",
    nav_stats: "Омор",
    nav_contact: "Тамос",
    badge_trust: "10+ корхона дар саросари Ӯзбекистон боварӣ дорад",
    hero_title_1: "Бизнеси худро",
    hero_highlight: "дар як бонуфуз",
    hero_title_2: " платформа идора кунед",
    hero_desc: "Экосистемаи Vexa — маҷмӯи муосири ҳалҳо барои автоматикунонии фурӯш, иҷора ва кор бо мизоҷон,",
    hero_ai: " бо зеҳни сунъӣ",
    hero_desc_2: " таҳкимёфта.",
    btn_products: "Дидани маҳсулотҳо",
    btn_demo: "Дархости демо",
    trust_security: "Амнияти дараҷаи бонк",
    trust_uptime: "99.9% боэтимодӣ",
    trust_support: "Дастгирии 24/7",
    section_label: "Таркиби экосистема",
    section_title: "Маҷмӯаи нармафзории Vexa",
    section_desc: "Ҳар маҳсулот бо якдигар алоқаманд аст. Маълумот дар вақти воқеӣ ҳамоҳангсозӣ мешавад.",
    sales_desc: "Автоматикунонии зираки фурӯш: ҳаракати мол, назорати анбор ва кассаи абрӣ. Ҳамаи каналҳоро аз як ҷой идора кунед.",
    rent_desc: "Идораи пурраи бизнеси иҷора: бронирование, шартномаҳо, ҷадвали пардохт. Аз мошин то либоси бегоҳӣ.",
    crm_desc: "Муносибатҳоро бо мизоҷон амиқтар кунед: қифи фурӯш, KPI кормандон ва тавсияҳо бар асоси зеҳни сунъӣ.",
    link_login: "Воридшавӣ",
    sales_badge: "Фурӯш +45%",
    rent_badge: "Бронирование +60%",
    crm_badge: "Конверсия 2x",
    feat_cloud_title: "Технологияи абрӣ",
    feat_cloud_desc: "Маълумоти шумо дар абри бехатар. Аз ҳар нуқтаи ҷаҳон дар вақти воқеӣ идора кунед.",
    feat_mobile_title: "Офиси мобилӣ",
    feat_mobile_desc: "Барои планшет ва смартфон пурра мутобиқ карда шудааст. Бизнесатон ҳамеша дар паҳлӯи шумост.",
    feat_security_title: "Ҳимояи баланд",
    feat_security_desc: "Рамзгузорӣ ва нусхаҳои захиравии ҳаррӯза. Маълумоти шумо аз гум шудан ҳимоя карда шудааст.",
    feat_analytics_title: "Аналитикаи дақиқ",
    feat_analytics_desc: "Ҳисоботи даромад, хароҷот ва фоида. Пешгӯиҳо ва тавсияҳо бо зеҳни сунъӣ.",
    stat_clients: "мизоҷи фаъол",
    stat_regions: "вилоят дар дастрас",
    stat_uptime: "устувории сервер",
    stat_support: "кӯмаки техникӣ",
    footer_products: "Маҳсулотҳо",
    footer_contact: "Тамос",
    footer_desc: "Шарики технологии боэтимод барои рақамикунонӣ ва автоматикунонии бизнес дар саросари Ӯзбекистон.",
    footer_rights: "© 2026 Vexa.uz — Ҳамаи ҳуқуқҳо маҳфуз аст. Як экосистема.",
    footer_status: "Ҳамаи системаҳо устувор кор мекунанд",
  },
};

/* ---------- Language ---------- */
let currentLang = localStorage.getItem("vexa_lang") || "uz";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("vexa_lang", lang);

  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.classList.toggle("active", el.dataset.lang === lang);
  });

  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang.toUpperCase();

  closeLangDropdown();

  document.documentElement.lang = lang;
}

/* ---------- Lang Dropdown ---------- */
function toggleLangDropdown() {
  document.getElementById("lang-panel").classList.toggle("open");
}

function closeLangDropdown() {
  const panel = document.getElementById("lang-panel");
  if (panel) panel.classList.remove("open");
}

document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("lang-dropdown");
  if (dropdown && !dropdown.contains(e.target)) closeLangDropdown();
});

/* ---------- Theme ---------- */
function toggleTheme() {
  const isLight = document.documentElement.classList.toggle("light");
  localStorage.setItem("vexa_theme", isLight ? "light" : "dark");
}

/* ---------- Mobile Menu ---------- */
function openMobileMenu() {
  document.getElementById("mobile-menu").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobileMenu();
    closeLangDropdown();
  }
});

/* ---------- Init ---------- */
lucide.createIcons();
setLang(currentLang);
