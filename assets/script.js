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
    restaurant_desc: "Restoran va kafelar uchun: stollar bandligi, menyu va oshxona buyurtmalari, ofitsiant hisoboti bir tizimda.",
    organization_desc: "Tashkilot ichki boshqaruvi: bo'limlar va xodimlar tuzilmasi, vazifalar, davomat va hujjat aylanmasi.",
    link_login: "Tizimga kirish",
    sales_badge: "Sotuv +45%",
    rent_badge: "Bandlov +60%",
    crm_badge: "Konversiya 2x",
    restaurant_badge: "Tez kunda",
    organization_badge: "Tez kunda",
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
    // Services
    nav_services: "Xizmatlar",
    btn_services: "Xizmatlar va narxlar",
    services_label: "Xizmatlar va narxlar",
    services_title: "Sizga nima kerak?",
    services_desc: "Kerakli xizmatlarni belgilang — narx darhol hisoblanadi. Keyin bir bosishda Telegram orqali buyurtma bering.",
    services_note: "Narxlar boshlang'ich — yakuniy summa loyiha hajmiga qarab kelishiladi.",
    svc_from: "dan",
    svc_popular: "Mashhur",
    svc_landing_title: "Landing page",
    svc_landing_desc: "Bir sahifali sotuvchi sayt. Reklama va ariza yig'ish uchun ideal.",
    svc_landing_time: "3–5 kun",
    svc_website_title: "Veb-sayt",
    svc_website_desc: "Korporativ sayt, katalog yoki portal. Admin panel, SEO va ko'p tillilik bilan.",
    svc_website_time: "2–4 hafta",
    svc_shop_title: "Internet-do'kon",
    svc_shop_desc: "Savat, buyurtma va Payme/Click to'lovi bilan onlayn do'kon.",
    svc_shop_time: "3–5 hafta",
    svc_bot_title: "Telegram bot",
    svc_bot_desc: "Savdo, ariza qabul qilish, Mini App va avto-javob botlari.",
    svc_bot_time: "5–10 kun",
    svc_app_title: "Mobil ilova",
    svc_app_desc: "Android va iOS uchun ilova. Backend va admin panel bilan.",
    svc_app_time: "1–2 oy",
    order_selected: "ta xizmat tanlandi",
    order_total: "Jami:",
    order_clear: "Tozalash",
    order_btn: "Buyurtma berish",
    order_msg_intro: "Assalomu alaykum! Vexa.uz orqali buyurtma bermoqchiman:",
    order_msg_total: "Jami",
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
    restaurant_desc: "Для ресторанов и кафе: занятость столов, меню и заказы на кухню, отчёты официантов в одной системе.",
    organization_desc: "Внутреннее управление организацией: структура отделов и сотрудников, задачи, посещаемость и документооборот.",
    link_login: "Войти",
    sales_badge: "Продажи +45%",
    rent_badge: "Бронирование +60%",
    crm_badge: "Конверсия 2x",
    restaurant_badge: "Скоро",
    organization_badge: "Скоро",
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
    // Services
    nav_services: "Услуги",
    btn_services: "Услуги и цены",
    services_label: "Услуги и цены",
    services_title: "Что вам нужно?",
    services_desc: "Отметьте нужные услуги — цена рассчитается сразу. Затем оформите заказ в Telegram одним нажатием.",
    services_note: "Цены стартовые — итоговая сумма согласовывается по объёму проекта.",
    svc_from: "от",
    svc_popular: "Популярно",
    svc_landing_title: "Лендинг",
    svc_landing_desc: "Одностраничный продающий сайт. Идеален для рекламы и сбора заявок.",
    svc_landing_time: "3–5 дней",
    svc_website_title: "Веб-сайт",
    svc_website_desc: "Корпоративный сайт, каталог или портал. С админ-панелью, SEO и мультиязычностью.",
    svc_website_time: "2–4 недели",
    svc_shop_title: "Интернет-магазин",
    svc_shop_desc: "Онлайн-магазин с корзиной, заказами и оплатой Payme/Click.",
    svc_shop_time: "3–5 недель",
    svc_bot_title: "Telegram-бот",
    svc_bot_desc: "Боты для продаж, приёма заявок, Mini App и автоответов.",
    svc_bot_time: "5–10 дней",
    svc_app_title: "Мобильное приложение",
    svc_app_desc: "Приложение для Android и iOS. С бэкендом и админ-панелью.",
    svc_app_time: "1–2 месяца",
    order_selected: "услуг(и) выбрано",
    order_total: "Итого:",
    order_clear: "Очистить",
    order_btn: "Заказать",
    order_msg_intro: "Здравствуйте! Хочу оформить заказ через Vexa.uz:",
    order_msg_total: "Итого",
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
    restaurant_desc: "For restaurants and cafes: table occupancy, menu and kitchen orders, waiter reports in one system.",
    organization_desc: "Internal organisation management: department and staff structure, tasks, attendance and document flow.",
    link_login: "Log In",
    sales_badge: "Sales +45%",
    rent_badge: "Bookings +60%",
    crm_badge: "Conversion 2x",
    restaurant_badge: "Coming soon",
    organization_badge: "Coming soon",
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
    // Services
    nav_services: "Services",
    btn_services: "Services & pricing",
    services_label: "Services & pricing",
    services_title: "What do you need?",
    services_desc: "Tick the services you need — the price is calculated instantly. Then order via Telegram in one tap.",
    services_note: "Starting prices — the final amount is agreed based on project scope.",
    svc_from: "from",
    svc_popular: "Popular",
    svc_landing_title: "Landing page",
    svc_landing_desc: "One-page sales site. Ideal for ads and lead collection.",
    svc_landing_time: "3–5 days",
    svc_website_title: "Website",
    svc_website_desc: "Corporate site, catalog or portal. With admin panel, SEO and multilingual support.",
    svc_website_time: "2–4 weeks",
    svc_shop_title: "Online store",
    svc_shop_desc: "E-commerce with cart, orders and Payme/Click payments.",
    svc_shop_time: "3–5 weeks",
    svc_bot_title: "Telegram bot",
    svc_bot_desc: "Sales, lead intake, Mini App and auto-reply bots.",
    svc_bot_time: "5–10 days",
    svc_app_title: "Mobile app",
    svc_app_desc: "Android and iOS app. With backend and admin panel.",
    svc_app_time: "1–2 months",
    order_selected: "service(s) selected",
    order_total: "Total:",
    order_clear: "Clear",
    order_btn: "Place order",
    order_msg_intro: "Hello! I'd like to place an order via Vexa.uz:",
    order_msg_total: "Total",
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
    restaurant_desc: "Барои тарабхонаву қаҳвахонаҳо: банди мизҳо, меню ва фармоишҳои ошхона, ҳисоботи пешхизматон дар як низом.",
    organization_desc: "Идораи дохилии ташкилот: сохтори шуъбаву кормандон, вазифаҳо, ҳозирӣ ва гардиши ҳуҷҷатҳо.",
    link_login: "Воридшавӣ",
    sales_badge: "Фурӯш +45%",
    rent_badge: "Бронирование +60%",
    crm_badge: "Конверсия 2x",
    restaurant_badge: "Ба зудӣ",
    organization_badge: "Ба зудӣ",
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
    // Services
    nav_services: "Хизматҳо",
    btn_services: "Хизматҳо ва нархҳо",
    services_label: "Хизматҳо ва нархҳо",
    services_title: "Ба шумо чӣ лозим аст?",
    services_desc: "Хизматҳои лозимиро қайд кунед — нарх фавран ҳисоб мешавад. Сипас бо як пахш тавассути Telegram фармоиш диҳед.",
    services_note: "Нархҳо ибтидоӣ — маблағи ниҳоӣ вобаста ба ҳаҷми лоиҳа мувофиқа карда мешавад.",
    svc_from: "аз",
    svc_popular: "Машҳур",
    svc_landing_title: "Лендинг",
    svc_landing_desc: "Сайти яксаҳифагии фурӯш. Барои реклама ва ҷамъоварии дархостҳо беҳтарин.",
    svc_landing_time: "3–5 рӯз",
    svc_website_title: "Веб-сайт",
    svc_website_desc: "Сайти корпоративӣ, каталог ё портал. Бо панели идоракунӣ, SEO ва бисёрзабонӣ.",
    svc_website_time: "2–4 ҳафта",
    svc_shop_title: "Мағозаи онлайн",
    svc_shop_desc: "Мағозаи онлайн бо сабад, фармоишҳо ва пардохти Payme/Click.",
    svc_shop_time: "3–5 ҳафта",
    svc_bot_title: "Telegram-бот",
    svc_bot_desc: "Ботҳо барои фурӯш, қабули дархостҳо, Mini App ва ҷавоби худкор.",
    svc_bot_time: "5–10 рӯз",
    svc_app_title: "Барномаи мобилӣ",
    svc_app_desc: "Барнома барои Android ва iOS. Бо бэкенд ва панели идоракунӣ.",
    svc_app_time: "1–2 моҳ",
    order_selected: "хизмат интихоб шуд",
    order_total: "Ҳамагӣ:",
    order_clear: "Тоза кардан",
    order_btn: "Фармоиш додан",
    order_msg_intro: "Салом! Мехоҳам тавассути Vexa.uz фармоиш диҳам:",
    order_msg_total: "Ҳамагӣ",
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
  if (typeof updateOrderBar === "function") updateOrderBar();
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


/* ---------- Services: select → total → Telegram order ---------- */
const ORDER_TG = "https://t.me/templates_uz_support";
const serviceCards = Array.from(document.querySelectorAll(".service-card"));

function selectedServices() {
  return serviceCards.filter((c) => c.classList.contains("selected"));
}

function updateOrderBar() {
  const picked = selectedServices();
  const total = picked.reduce((sum, c) => sum + Number(c.dataset.price || 0), 0);
  const bar = document.getElementById("order-bar");
  if (!bar) return;

  document.getElementById("order-count").textContent = picked.length;
  document.getElementById("order-total").textContent = "$" + total;

  const t = translations[currentLang];
  const lines = picked.map((c) => {
    const name = c.querySelector(".service-name").textContent.trim();
    return "• " + name + " — $" + c.dataset.price;
  });
  const msg =
    t.order_msg_intro + "\n" + lines.join("\n") + "\n" + t.order_msg_total + ": $" + total;
  document.getElementById("order-link").href =
    ORDER_TG + "?text=" + encodeURIComponent(msg);

  bar.classList.toggle("visible", picked.length > 0);
  document.body.classList.toggle("has-order-bar", picked.length > 0);
}

function toggleService(card) {
  const on = card.classList.toggle("selected");
  card.setAttribute("aria-pressed", on ? "true" : "false");
  updateOrderBar();
}

function clearServices() {
  serviceCards.forEach((c) => {
    c.classList.remove("selected");
    c.setAttribute("aria-pressed", "false");
  });
  updateOrderBar();
}

serviceCards.forEach((card) => {
  card.addEventListener("click", () => toggleService(card));
});

/* ---------- Init ---------- */
lucide.createIcons();
setLang(currentLang);
