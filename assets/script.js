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
    // Services / wizard
    services_desc: "3 ta oddiy qadam: xizmatni tanlang, imkoniyatlarni belgilang va Telegram orqali buyurtma yuboring. Narx jonli hisoblanadi.",
    wz_step: "Qadam",
    wz_step1_title: "Xizmat turi",
    wz_step2_title: "Imkoniyatlar",
    wz_step3_title: "Yakunlash",
    wz_step1_heading: "Xizmat turini tanlang",
    wz_step1_sub: "Sizga kerakli xizmatni belgilang — keyingi qadam avtomatik ochiladi",
    wz_step2_heading: "Imkoniyatlarni sozlang",
    wz_step2_sub: "Loyihangizga kerakli variantlarni belgilang — narx darhol yangilanadi",
    wz_step3_heading: "Qo'shimchalar va yuborish",
    wz_step3_sub: "Ixtiyoriy qo'shimchalarni tanlang, izoh qoldiring va buyurtmani yuboring",
    wz_choose_one: "bittasini tanlang",
    wz_choose_any: "ixtiyoriy",
    wz_included: "kiritilgan",
    wz_recommended: "Tavsiya",
    wz_note: "Izoh",
    wz_optional: "(ixtiyoriy)",
    wz_note_ph: "Loyihangiz haqida qisqacha: soha, misollar, muddat...",
    wz_submit_note: "Tugmani bosganingizda Telegram ochiladi — tanlovlaringiz xabar sifatida tayyor bo'ladi. Faqat \"Yuborish\"ni bosing.",
    wz_back: "Orqaga",
    wz_next: "Keyingi",
    wz_send: "Telegram orqali yuborish",
    wz_send_short: "Yuborish",
    wz_pick_first: "Avval xizmat turini tanlang",
    wz_receipt: "Hisob-kitob",
    wz_reset: "Boshidan",
    wz_empty: "Hali hech narsa tanlanmadi. 1-qadamdan boshlang.",
    wz_total: "Jami",
    wz_trust_1: "Yashirin to'lovlar yo'q",
    wz_trust_2: "24/7 aloqa",
    wz_trust_3: "Ma'lumotlar maxfiy",
    wz_msg_intro: "Assalomu alaykum! Vexa.uz orqali buyurtma bermoqchiman.",
    wz_addons: "Qo'shimchalar",
    wz_msg_service: "Xizmat",
    nav_services: "Xizmatlar",
    btn_services: "Xizmatlar va narxlar",
    services_label: "Xizmatlar va narxlar",
    services_title: "Sizga nima kerak?",
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
    // Services / wizard
    services_desc: "3 простых шага: выберите услугу, отметьте возможности и отправьте заказ в Telegram. Цена считается сразу.",
    wz_step: "Шаг",
    wz_step1_title: "Тип услуги",
    wz_step2_title: "Возможности",
    wz_step3_title: "Завершение",
    wz_step1_heading: "Выберите тип услуги",
    wz_step1_sub: "Отметьте нужную услугу — следующий шаг откроется автоматически",
    wz_step2_heading: "Настройте возможности",
    wz_step2_sub: "Отметьте нужные варианты — цена обновляется сразу",
    wz_step3_heading: "Дополнения и отправка",
    wz_step3_sub: "Выберите опциональные дополнения, оставьте комментарий и отправьте заказ",
    wz_choose_one: "выберите одно",
    wz_choose_any: "по желанию",
    wz_included: "включено",
    wz_recommended: "Рекомендуем",
    wz_note: "Комментарий",
    wz_optional: "(необязательно)",
    wz_note_ph: "Кратко о проекте: сфера, примеры, сроки...",
    wz_submit_note: "При нажатии откроется Telegram — ваш выбор уже будет в сообщении. Просто нажмите «Отправить».",
    wz_back: "Назад",
    wz_next: "Далее",
    wz_send: "Отправить в Telegram",
    wz_send_short: "Отправить",
    wz_pick_first: "Сначала выберите тип услуги",
    wz_receipt: "Расчёт",
    wz_reset: "Сначала",
    wz_empty: "Пока ничего не выбрано. Начните с шага 1.",
    wz_total: "Итого",
    wz_trust_1: "Без скрытых платежей",
    wz_trust_2: "Связь 24/7",
    wz_trust_3: "Данные конфиденциальны",
    wz_msg_intro: "Здравствуйте! Хочу оформить заказ через Vexa.uz.",
    wz_addons: "Дополнения",
    wz_msg_service: "Услуга",
    nav_services: "Услуги",
    btn_services: "Услуги и цены",
    services_label: "Услуги и цены",
    services_title: "Что вам нужно?",
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
    // Services / wizard
    services_desc: "3 simple steps: pick a service, tick the features and send the order via Telegram. The price updates live.",
    wz_step: "Step",
    wz_step1_title: "Service type",
    wz_step2_title: "Features",
    wz_step3_title: "Finish",
    wz_step1_heading: "Choose a service type",
    wz_step1_sub: "Pick the service you need — the next step opens automatically",
    wz_step2_heading: "Configure features",
    wz_step2_sub: "Tick the options your project needs — the price updates instantly",
    wz_step3_heading: "Add-ons & send",
    wz_step3_sub: "Choose optional add-ons, leave a note and send your order",
    wz_choose_one: "choose one",
    wz_choose_any: "optional",
    wz_included: "included",
    wz_recommended: "Recommended",
    wz_note: "Note",
    wz_optional: "(optional)",
    wz_note_ph: "Briefly about your project: industry, examples, deadline...",
    wz_submit_note: "Pressing the button opens Telegram with your selection pre-filled as a message. Just hit \"Send\".",
    wz_back: "Back",
    wz_next: "Next",
    wz_send: "Send via Telegram",
    wz_send_short: "Send",
    wz_pick_first: "Pick a service type first",
    wz_receipt: "Estimate",
    wz_reset: "Start over",
    wz_empty: "Nothing selected yet. Start with step 1.",
    wz_total: "Total",
    wz_trust_1: "No hidden fees",
    wz_trust_2: "24/7 contact",
    wz_trust_3: "Your data stays private",
    wz_msg_intro: "Hello! I'd like to place an order via Vexa.uz.",
    wz_addons: "Add-ons",
    wz_msg_service: "Service",
    nav_services: "Services",
    btn_services: "Services & pricing",
    services_label: "Services & pricing",
    services_title: "What do you need?",
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
    // Services / wizard
    services_desc: "3 қадами оддӣ: хизматро интихоб кунед, имкониятҳоро қайд кунед ва фармоишро тавассути Telegram фиристед. Нарх фавран ҳисоб мешавад.",
    wz_step: "Қадам",
    wz_step1_title: "Намуди хизмат",
    wz_step2_title: "Имкониятҳо",
    wz_step3_title: "Анҷом",
    wz_step1_heading: "Намуди хизматро интихоб кунед",
    wz_step1_sub: "Хизмати лозимиро қайд кунед — қадами оянда худкор кушода мешавад",
    wz_step2_heading: "Имкониятҳоро танзим кунед",
    wz_step2_sub: "Вариантҳои лозимиро қайд кунед — нарх фавран нав мешавад",
    wz_step3_heading: "Иловаҳо ва фиристодан",
    wz_step3_sub: "Иловаҳои ихтиёриро интихоб кунед, шарҳ нависед ва фармоишро фиристед",
    wz_choose_one: "якеро интихоб кунед",
    wz_choose_any: "ихтиёрӣ",
    wz_included: "дохил шудааст",
    wz_recommended: "Тавсия",
    wz_note: "Шарҳ",
    wz_optional: "(ихтиёрӣ)",
    wz_note_ph: "Мухтасар дар бораи лоиҳа: соҳа, мисолҳо, мӯҳлат...",
    wz_submit_note: "Ҳангоми пахш Telegram кушода мешавад — интихоби шумо ҳамчун паём тайёр аст. Танҳо «Фиристодан»-ро пахш кунед.",
    wz_back: "Бозгашт",
    wz_next: "Оянда",
    wz_send: "Фиристодан тавассути Telegram",
    wz_send_short: "Фиристодан",
    wz_pick_first: "Аввал намуди хизматро интихоб кунед",
    wz_receipt: "Ҳисоб",
    wz_reset: "Аз нав",
    wz_empty: "Ҳоло чизе интихоб нашудааст. Аз қадами 1 оғоз кунед.",
    wz_total: "Ҳамагӣ",
    wz_trust_1: "Пардохтҳои пинҳонӣ нест",
    wz_trust_2: "Робита 24/7",
    wz_trust_3: "Маълумот махфӣ аст",
    wz_msg_intro: "Салом! Мехоҳам тавассути Vexa.uz фармоиш диҳам.",
    wz_addons: "Иловаҳо",
    wz_msg_service: "Хизмат",
    nav_services: "Хизматҳо",
    btn_services: "Хизматҳо ва нархҳо",
    services_label: "Хизматҳо ва нархҳо",
    services_title: "Ба шумо чӣ лозим аст?",
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  if (typeof wzRender === "function") wzRender();
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


/* ---------- Order wizard: data ----------
   L(uz, ru, en, tj) → localised label. Prices are USD added on top of the
   service base price (data-price on the step-1 cards). Radio groups
   contribute exactly one choice; checks/addons are independent toggles. */
function L(uz, ru, en, tj) { return { uz, ru, en, tj }; }

const WIZARD_ADDONS = [
  { id: "domain", icon: "globe-lock", price: 30, rec: true,
    title: L("Domen + hosting (1 yil)", "Домен + хостинг (1 год)", "Domain + hosting (1 year)", "Домен + ҳостинг (1 сол)"),
    desc: L("Domen ro'yxatdan o'tkazish, SSL va joylashtirish", "Регистрация домена, SSL и размещение", "Domain registration, SSL and deployment", "Бақайдгирии домен, SSL ва ҷойгиркунӣ") },
  { id: "rush", icon: "zap", price: 100,
    title: L("Tezkor bajarish", "Срочное выполнение", "Rush delivery", "Иҷрои фаврӣ"),
    desc: L("Muddat 2 barobar qisqaradi — navbatsiz", "Срок сокращается вдвое — без очереди", "Half the timeline — skip the queue", "Мӯҳлат ду баробар кӯтоҳ — бе навбат") },
  { id: "content", icon: "file-text", price: 50,
    title: L("Kontent tayyorlash", "Подготовка контента", "Content writing", "Омодасозии контент"),
    desc: L("Matnlar, tarjima va rasm tanlash biz tomondan", "Тексты, перевод и подбор изображений с нашей стороны", "Copy, translation and imagery done by us", "Матн, тарҷума ва интихоби расмҳо аз ҷониби мо") },
  { id: "branding", icon: "palette", price: 80,
    title: L("Logo va brending", "Логотип и брендинг", "Logo & branding", "Логотип ва брендинг"),
    desc: L("Logotip, ranglar palitrasi va shrift uslubi", "Логотип, палитра цветов и шрифты", "Logo, colour palette and typography", "Логотип, палитраи рангҳо ва ҳуруфот") },
  { id: "support", icon: "life-buoy", price: 50,
    title: L("3 oy texnik yordam", "3 месяца техподдержки", "3 months support", "3 моҳ дастгирии техникӣ"),
    desc: L("Kichik o'zgartirishlar va xatolarni bepul tuzatish", "Мелкие правки и исправление ошибок бесплатно", "Minor edits and bug fixes included", "Тағйироти хурд ва ислоҳи хатоҳо ройгон") },
];

const WIZARD = {
  landing: {
    groups: [
      { id: "design", type: "radio", title: L("Dizayn", "Дизайн", "Design", "Дизайн"), choices: [
        { id: "template", icon: "layout-grid", price: 0, title: L("Tayyor shablon", "Готовый шаблон", "Ready template", "Шаблони тайёр") },
        { id: "custom", icon: "pen-tool", price: 80, title: L("Individual dizayn", "Индивидуальный дизайн", "Custom design", "Дизайни инфиродӣ") },
      ]},
      { id: "features", type: "check", title: L("Imkoniyatlar", "Возможности", "Features", "Имкониятҳо"), choices: [
        { id: "tg_leads", icon: "send", price: 20, rec: true, title: L("Telegram arizalar", "Заявки в Telegram", "Telegram lead alerts", "Дархостҳо дар Telegram"), desc: L("Formadan kelgan arizalar darhol Telegramga", "Заявки с формы сразу в Telegram", "Form leads straight to Telegram", "Дархостҳо аз форма фавран ба Telegram") },
        { id: "anim", icon: "sparkles", price: 30, title: L("Animatsiyalar", "Анимации", "Animations", "Аниматсияҳо"), desc: L("Silliq effektlar va harakatlar", "Плавные эффекты и движение", "Smooth motion and effects", "Эффектҳо ва ҳаракатҳои ҳамвор") },
        { id: "seo", icon: "search", price: 30, title: L("SEO optimizatsiya", "SEO-оптимизация", "SEO optimisation", "SEO-оптимизатсия"), desc: L("Google va Yandex uchun sozlash", "Настройка под Google и Яндекс", "Set up for Google and Yandex", "Танзим барои Google ва Яндекс") },
        { id: "multilang", icon: "languages", price: 40, title: L("Ko'p tillilik", "Мультиязычность", "Multilingual", "Бисёрзабонӣ"), desc: L("2–3 tilda kontent", "Контент на 2–3 языках", "Content in 2–3 languages", "Контент бо 2–3 забон") },
      ]},
    ],
  },
  website: {
    groups: [
      { id: "kind", type: "radio", title: L("Sayt turi", "Тип сайта", "Website type", "Намуди сайт"), choices: [
        { id: "corporate", icon: "building-2", price: 0, title: L("Korporativ", "Корпоративный", "Corporate", "Корпоративӣ") },
        { id: "catalog", icon: "layout-list", price: 150, title: L("Katalog", "Каталог", "Catalog", "Каталог") },
        { id: "portal", icon: "network", price: 400, title: L("Portal / platforma", "Портал / платформа", "Portal / platform", "Портал / платформа") },
      ]},
      { id: "pages", type: "radio", title: L("Sahifalar soni", "Количество страниц", "Number of pages", "Шумораи саҳифаҳо"), choices: [
        { id: "p5", icon: "file", price: 0, title: L("5 tagacha", "До 5", "Up to 5", "То 5") },
        { id: "p10", icon: "files", price: 100, title: L("10 tagacha", "До 10", "Up to 10", "То 10") },
        { id: "p20", icon: "folder-open", price: 250, title: L("20+ sahifa", "20+ страниц", "20+ pages", "20+ саҳифа") },
      ]},
      { id: "features", type: "check", title: L("Imkoniyatlar", "Возможности", "Features", "Имкониятҳо"), choices: [
        { id: "admin", icon: "layout-dashboard", price: 100, rec: true, title: L("Admin panel (CMS)", "Админ-панель (CMS)", "Admin panel (CMS)", "Панели идоракунӣ (CMS)"), desc: L("Kontent va narxlarni o'zingiz tahrirlaysiz", "Редактируете контент и цены сами", "Edit content and prices yourself", "Контент ва нархҳоро худатон таҳрир мекунед") },
        { id: "seo", icon: "search", price: 50, title: L("SEO optimizatsiya", "SEO-оптимизация", "SEO optimisation", "SEO-оптимизатсия"), desc: L("Google va Yandex qidiruviga ulash", "Индексация в Google и Яндекс", "Google and Yandex indexing", "Индексатсия дар Google ва Яндекс") },
        { id: "multilang", icon: "languages", price: 80, title: L("Ko'p tillilik", "Мультиязычность", "Multilingual", "Бисёрзабонӣ"), desc: L("UZ / RU / EN versiyalar", "Версии UZ / RU / EN", "UZ / RU / EN versions", "Версияҳои UZ / RU / EN") },
        { id: "payment", icon: "credit-card", price: 150, title: L("Onlayn to'lov (Payme, Click)", "Онлайн-оплата (Payme, Click)", "Online payment (Payme, Click)", "Пардохти онлайн (Payme, Click)"), desc: L("Saytda karta orqali to'lov", "Оплата картой на сайте", "Card payments on the site", "Пардохт бо корт дар сайт") },
        { id: "tg_leads", icon: "send", price: 30, title: L("Telegram arizalar", "Заявки в Telegram", "Telegram lead alerts", "Дархостҳо дар Telegram"), desc: L("Arizalar darhol Telegramga tushadi", "Заявки сразу в Telegram", "Leads straight to Telegram", "Дархостҳо фавран ба Telegram") },
        { id: "chat", icon: "message-circle", price: 20, title: L("Jonli chat vidjeti", "Онлайн-чат", "Live chat widget", "Виҷети чат"), desc: L("Mijoz bilan bir bosishda aloqa", "Связь с клиентом в один клик", "One-click contact with visitors", "Робита бо мизоҷ бо як пахш") },
      ]},
    ],
  },
  shop: {
    groups: [
      { id: "size", type: "radio", title: L("Mahsulotlar soni", "Количество товаров", "Product count", "Шумораи маҳсулот"), choices: [
        { id: "s100", icon: "package", price: 0, title: L("100 tagacha", "До 100", "Up to 100", "То 100") },
        { id: "s1000", icon: "boxes", price: 150, title: L("1000 tagacha", "До 1000", "Up to 1000", "То 1000") },
        { id: "sinf", icon: "warehouse", price: 300, title: L("Cheksiz", "Без ограничений", "Unlimited", "Бемаҳдуд") },
      ]},
      { id: "features", type: "check", title: L("Imkoniyatlar", "Возможности", "Features", "Имкониятҳо"), choices: [
        { id: "payment", icon: "credit-card", price: 150, rec: true, title: L("Payme / Click to'lov", "Оплата Payme / Click", "Payme / Click payments", "Пардохти Payme / Click"), desc: L("Karta orqali avtomatik to'lov", "Автоматическая оплата картой", "Automatic card payments", "Пардохти худкор бо корт") },
        { id: "delivery", icon: "truck", price: 80, title: L("Yetkazib berish hisobi", "Расчёт доставки", "Delivery calculation", "Ҳисоби расонидан"), desc: L("Hudud va og'irlik bo'yicha narx", "Цена по региону и весу", "Price by region and weight", "Нарх аз рӯи минтақа ва вазн") },
        { id: "promo", icon: "ticket-percent", price: 50, title: L("Chegirma va promokodlar", "Скидки и промокоды", "Discounts & promo codes", "Тахфиф ва промокодҳо"), desc: L("Aksiyalar, kuponlar, sodiqlik", "Акции, купоны, лояльность", "Sales, coupons, loyalty", "Аксияҳо, купонҳо, вафодорӣ") },
        { id: "tg_orders", icon: "send", price: 30, title: L("Telegram bildirishnomalar", "Уведомления в Telegram", "Telegram notifications", "Огоҳиномаҳо дар Telegram"), desc: L("Har bir buyurtma darhol Telegramga", "Каждый заказ сразу в Telegram", "Every order straight to Telegram", "Ҳар фармоиш фавран ба Telegram") },
        { id: "multilang", icon: "languages", price: 80, title: L("Ko'p tillilik", "Мультиязычность", "Multilingual", "Бисёрзабонӣ"), desc: L("UZ / RU / EN versiyalar", "Версии UZ / RU / EN", "UZ / RU / EN versions", "Версияҳои UZ / RU / EN") },
        { id: "sheets", icon: "table", price: 40, title: L("Google Sheets / CRM", "Google Таблицы / CRM", "Google Sheets / CRM", "Google Sheets / CRM"), desc: L("Buyurtmalar avtomatik jadvalga", "Заказы автоматически в таблицу", "Orders auto-saved to a sheet", "Фармоишҳо худкор ба ҷадвал") },
      ]},
    ],
  },
  bot: {
    groups: [
      { id: "kind", type: "radio", title: L("Bot turi", "Тип бота", "Bot type", "Намуди бот"), choices: [
        { id: "info", icon: "info", price: 0, title: L("Ma'lumot beruvchi", "Информационный", "Informational", "Иттилоотӣ") },
        { id: "leads", icon: "clipboard-list", price: 50, title: L("Ariza / buyurtma", "Заявки / заказы", "Leads / orders", "Дархост / фармоиш") },
        { id: "sales", icon: "shopping-cart", price: 150, title: L("Savdo boti", "Бот-магазин", "Sales bot", "Боти фурӯш") },
        { id: "miniapp", icon: "app-window", price: 300, title: L("Mini App (Web App)", "Mini App (Web App)", "Mini App (Web App)", "Mini App (Web App)") },
      ]},
      { id: "features", type: "check", title: L("Imkoniyatlar", "Возможности", "Features", "Имкониятҳо"), choices: [
        { id: "admin", icon: "layout-dashboard", price: 100, rec: true, title: L("Web admin panel", "Веб-панель управления", "Web admin panel", "Панели идоракунии веб"), desc: L("Mahsulot va xabarlarni brauzerda boshqarish", "Управление товарами и сообщениями в браузере", "Manage products and messages in the browser", "Идоракунии маҳсулот ва паёмҳо дар браузер") },
        { id: "payment", icon: "credit-card", price: 120, title: L("To'lov (Click, Payme)", "Оплата (Click, Payme)", "Payments (Click, Payme)", "Пардохт (Click, Payme)"), desc: L("Bot ichida avtomatik to'lov", "Автоматическая оплата внутри бота", "Automatic in-bot payments", "Пардохти худкор дар дохили бот") },
        { id: "broadcast", icon: "megaphone", price: 50, title: L("Ommaviy xabarnoma", "Массовая рассылка", "Broadcasts", "Паҳнкунии паёмҳо"), desc: L("Barcha a'zolarga bir bosishda xabar", "Сообщение всем пользователям в один клик", "Message all users in one click", "Паём ба ҳамаи корбарон бо як пахш") },
        { id: "sheets", icon: "table", price: 40, title: L("Google Sheets", "Google Таблицы", "Google Sheets", "Google Sheets"), desc: L("Arizalar avtomatik jadvalga", "Заявки автоматически в таблицу", "Leads auto-saved to a sheet", "Дархостҳо худкор ба ҷадвал") },
        { id: "sub", icon: "user-check", price: 20, title: L("Majburiy obuna", "Обязательная подписка", "Channel subscription gate", "Обунаи ҳатмӣ"), desc: L("Kanalga a'zo bo'lgach ishlaydi", "Работает после подписки на канал", "Requires channel join first", "Пас аз обуна ба канал кор мекунад") },
        { id: "stats", icon: "bar-chart-3", price: 40, title: L("Statistika", "Статистика", "Analytics", "Омор"), desc: L("Foydalanuvchilar va arizalar hisoboti", "Отчёты по пользователям и заявкам", "User and lead reports", "Ҳисоботи корбарон ва дархостҳо") },
      ]},
    ],
  },
  app: {
    groups: [
      { id: "platform", type: "radio", title: L("Platforma", "Платформа", "Platform", "Платформа"), choices: [
        { id: "android", icon: "smartphone", price: 0, title: L("Android", "Android", "Android", "Android") },
        { id: "ios", icon: "tablet-smartphone", price: 0, title: L("iOS", "iOS", "iOS", "iOS") },
        { id: "both", icon: "layers", price: 500, title: L("Android + iOS", "Android + iOS", "Android + iOS", "Android + iOS") },
      ]},
      { id: "features", type: "check", title: L("Imkoniyatlar", "Возможности", "Features", "Имкониятҳо"), choices: [
        { id: "backend", icon: "server", price: 300, rec: true, title: L("Backend / API", "Backend / API", "Backend / API", "Backend / API"), desc: L("Server, ma'lumotlar bazasi va API", "Сервер, база данных и API", "Server, database and API", "Сервер, пойгоҳи додаҳо ва API") },
        { id: "admin", icon: "layout-dashboard", price: 200, title: L("Admin panel", "Админ-панель", "Admin panel", "Панели идоракунӣ"), desc: L("Kontent va foydalanuvchilarni boshqarish", "Управление контентом и пользователями", "Manage content and users", "Идоракунии контент ва корбарон") },
        { id: "push", icon: "bell-ring", price: 100, title: L("Push bildirishnomalar", "Push-уведомления", "Push notifications", "Огоҳиномаҳои push"), desc: L("Foydalanuvchilarga xabar yuborish", "Отправка сообщений пользователям", "Send messages to users", "Ирсоли паём ба корбарон") },
        { id: "payment", icon: "credit-card", price: 200, title: L("To'lov integratsiyasi", "Интеграция оплаты", "Payment integration", "Интегратсияи пардохт"), desc: L("Payme, Click yoki karta orqali", "Payme, Click или карта", "Payme, Click or card", "Payme, Click ё корт") },
        { id: "store", icon: "store", price: 100, title: L("Store'ga joylash", "Публикация в сторах", "Store publishing", "Нашр дар мағозаҳо"), desc: L("Google Play va App Store'ga chiqarish", "Выпуск в Google Play и App Store", "Release to Google Play and App Store", "Барориш ба Google Play ва App Store") },
      ]},
    ],
  },
};

/* ---------- Order wizard: state & logic ---------- */
const ORDER_TG = "https://t.me/templates_uz_support";
const wz = { step: 1, maxStep: 1, type: null, sel: {}, addons: {} };
const typeCards = Array.from(document.querySelectorAll("#wz-panel-1 .service-card"));

const tr = (o) => (o && (o[currentLang] || o.uz)) || "";
const money = (n) => "$" + n;
const plus = (n) => (n > 0 ? "+" + money(n) : "");
const $ = (id) => document.getElementById(id);
const t = () => translations[currentLang];

function wzTypeName() {
  const card = typeCards.find((c) => c.dataset.type === wz.type);
  return card ? card.querySelector(".service-name").textContent.trim() : "";
}
function wzBasePrice() {
  const card = typeCards.find((c) => c.dataset.type === wz.type);
  return card ? Number(card.dataset.price) : 0;
}

/* Default selection for a type: first choice of every radio group. */
function wzDefaults() {
  wz.sel = {};
  (WIZARD[wz.type]?.groups || []).forEach((g) => {
    if (g.type === "radio") wz.sel[g.id] = g.choices[0].id;
  });
}

function wzSelectType(card) {
  const changed = wz.type !== card.dataset.type;
  wz.type = card.dataset.type;
  typeCards.forEach((c) => {
    const on = c === card;
    c.classList.toggle("selected", on);
    c.setAttribute("aria-checked", on ? "true" : "false");
  });
  if (changed) { wzDefaults(); wz.addons = {}; }
  wz.maxStep = Math.max(wz.maxStep, 2);
  wzRender();
  // convenient: picking a type moves straight to step 2
  setTimeout(() => wzGo(2), 220);
}

function wzGo(n) {
  if (n < 1 || n > 3 || n > wz.maxStep) return;
  wz.step = n;
  if (n === 3) wz.maxStep = 3;
  wzRender();
  // keep the wizard card in view when the step changes (mobile)
  const top = document.getElementById("wz-stepper").getBoundingClientRect().top;
  if (top < 0 || top > 200) document.getElementById("wz-stepper").scrollIntoView({ behavior: "smooth", block: "start" });
}
function wzNext() { if (wz.type) { wz.maxStep = Math.max(wz.maxStep, wz.step + 1); wzGo(wz.step + 1); } }
function wzPrev() { wzGo(wz.step - 1); }
function wzReset() {
  wz.step = 1; wz.maxStep = 1; wz.type = null; wz.sel = {}; wz.addons = {};
  typeCards.forEach((c) => { c.classList.remove("selected"); c.setAttribute("aria-checked", "false"); });
  const note = $("wz-note"); if (note) note.value = "";
  wzRender();
}

function wzPickRadio(gid, cid) { wz.sel[gid] = cid; wzRender(); }
function wzToggleCheck(gid, cid) {
  const cur = wz.sel[gid] || {};
  cur[cid] = !cur[cid];
  wz.sel[gid] = cur;
  wzRender();
}
function wzToggleAddon(id) { wz.addons[id] = !wz.addons[id]; wzRender(); }

/* Selected lines: [{group, name, price}] in display order. */
function wzLines() {
  const lines = [];
  if (!wz.type) return lines;
  const groups = WIZARD[wz.type]?.groups || [];
  groups.forEach((g) => {
    if (g.type === "radio") {
      const c = g.choices.find((x) => x.id === wz.sel[g.id]);
      if (c) lines.push({ group: tr(g.title), name: tr(c.title), price: c.price });
    } else {
      g.choices.forEach((c) => {
        if (wz.sel[g.id]?.[c.id]) lines.push({ group: tr(g.title), name: tr(c.title), price: c.price });
      });
    }
  });
  WIZARD_ADDONS.forEach((a) => {
    if (wz.addons[a.id]) lines.push({ group: t().wz_addons, name: tr(a.title), price: a.price });
  });
  return lines;
}
function wzTotal() { return wzBasePrice() + wzLines().reduce((s, l) => s + l.price, 0); }

function wzMessage() {
  const tt = t();
  const out = [tt.wz_msg_intro, "", "🧩 " + tt.wz_msg_service + ": " + wzTypeName() + " — " + money(wzBasePrice())];
  let lastGroup = null;
  wzLines().forEach((l) => {
    if (l.group !== lastGroup) { out.push("", "▫️ " + l.group + ":"); lastGroup = l.group; }
    out.push("  • " + l.name + (l.price ? " (" + plus(l.price) + ")" : ""));
  });
  const note = ($("wz-note")?.value || "").trim();
  if (note) out.push("", "💬 " + tt.wz_note + ": " + note);
  out.push("", "💰 " + tt.wz_total + ": " + money(wzTotal()));
  return out.join("\n");
}

const iconHtml = (name) => `<i data-lucide="${name}"></i>`;

function wzRenderStep2() {
  const panel = $("wz-panel-2");
  if (!wz.type) { panel.innerHTML = ""; return; }
  const tt = t();
  const groups = WIZARD[wz.type]?.groups || [];
  panel.innerHTML = groups.map((g) => {
    const kind = g.type === "radio" ? tt.wz_choose_one : tt.wz_choose_any;
    let body;
    if (g.type === "radio") {
      body = `<div class="wz-choices" role="radiogroup">` + g.choices.map((c) => {
        const on = wz.sel[g.id] === c.id;
        const price = c.price ? `<span class="wz-choice-price">${plus(c.price)}</span>` : `<span class="wz-choice-price free">${tt.wz_included}</span>`;
        return `<button type="button" class="wz-choice${on ? " on" : ""}" role="radio" aria-checked="${on}" onclick="wzPickRadio('${g.id}','${c.id}')">
          <span class="wz-choice-icon">${iconHtml(c.icon)}</span>
          <span class="wz-choice-title">${tr(c.title)}</span>${price}</button>`;
      }).join("") + `</div>`;
    } else {
      body = `<div class="wz-rows">` + g.choices.map((c) => wzRowHtml(c, !!wz.sel[g.id]?.[c.id], `wzToggleCheck('${g.id}','${c.id}')`)).join("") + `</div>`;
    }
    return `<div class="wz-group"><div class="wz-group-head"><h4 class="wz-group-title">${tr(g.title)}</h4><span class="wz-group-kind">${kind}</span></div>${body}</div>`;
  }).join("");
}

function wzRowHtml(c, on, onclick) {
  const tt = t();
  const price = c.price ? plus(c.price) : tt.wz_included;
  const free = c.price ? "" : " free";
  const rec = c.rec ? `<span class="wz-row-rec">${tt.wz_recommended}</span>` : "";
  const desc = c.desc ? `<p class="wz-row-desc">${tr(c.desc)}</p>` : "";
  return `<button type="button" class="wz-row${on ? " on" : ""}" role="switch" aria-checked="${on}" onclick="${onclick}">
    <span class="wz-row-icon">${iconHtml(c.icon)}</span>
    <span class="wz-row-body"><span class="wz-row-title">${tr(c.title)}${rec}</span>${desc}<span class="wz-row-price${free}">${price}</span></span>
    <span class="wz-row-right"><span class="wz-row-price${free}">${price}</span><span class="wz-switch"></span></span></button>`;
}

function wzRenderStep3() {
  $("wz-addons").innerHTML = `<div class="wz-rows">` +
    WIZARD_ADDONS.map((a) => wzRowHtml(a, !!wz.addons[a.id], `wzToggleAddon('${a.id}')`)).join("") + `</div>`;
}

function wzRenderReceipt() {
  const tt = t();
  const lines = wzLines();
  const ul = $("wz-lines");
  if (!wz.type) {
    ul.innerHTML = "";
  } else {
    let html = `<li class="wz-line is-base"><span class="wz-line-name">${wzTypeName()}</span><span class="wz-line-price">${money(wzBasePrice())}</span></li>`;
    let lastGroup = null;
    lines.forEach((l) => {
      if (l.group !== lastGroup) { html += `<li class="wz-line-group">${l.group}</li>`; lastGroup = l.group; }
      html += `<li class="wz-line"><span class="wz-line-name">${l.name}</span><span class="wz-line-price${l.price ? "" : " free"}">${l.price ? plus(l.price) : tt.wz_included}</span></li>`;
    });
    ul.innerHTML = html;
  }
  $("wz-empty").classList.toggle("hidden", !!wz.type);
  const total = money(wzTotal());
  $("wz-total").textContent = total;
  $("wz-bar-total").textContent = total;
}

function wzRender() {
  const tt = t();
  // stepper
  document.querySelectorAll("#wz-stepper .wz-step").forEach((li) => {
    const n = Number(li.dataset.step);
    li.classList.toggle("is-current", n === wz.step);
    li.classList.toggle("is-done", n < wz.step);
    li.querySelector("button").disabled = n > wz.maxStep;
  });
  // head
  $("wz-step-now").textContent = wz.step;
  $("wz-bar-step").textContent = wz.step;
  $("wz-heading").textContent = tt["wz_step" + wz.step + "_heading"];
  $("wz-sub").textContent = tt["wz_step" + wz.step + "_sub"];
  const chosen = $("wz-chosen");
  chosen.classList.toggle("hidden", !(wz.type && wz.step > 1));
  $("wz-chosen-name").textContent = wzTypeName();
  // panels
  [1, 2, 3].forEach((n) => $("wz-panel-" + n).classList.toggle("hidden", n !== wz.step));
  if (wz.step === 2) wzRenderStep2();
  if (wz.step === 3) wzRenderStep3();
  wzRenderReceipt();
  // nav
  const last = wz.step === 3;
  ["wz-back", "wz-bar-back"].forEach((id) => $(id).classList.toggle("hidden", wz.step === 1));
  ["wz-next", "wz-bar-next"].forEach((id) => { $(id).classList.toggle("hidden", last); $(id).disabled = !wz.type; });
  ["wz-send", "wz-bar-send"].forEach((id) => { $(id).classList.toggle("hidden", !last); });
  $("wz-nav-hint").classList.toggle("hidden", !!wz.type || wz.step !== 1);
  const href = ORDER_TG + "?text=" + encodeURIComponent(wzMessage());
  $("wz-send").href = href;
  $("wz-bar-send").href = href;
  lucide.createIcons();
}

typeCards.forEach((card) => card.addEventListener("click", () => wzSelectType(card)));
document.addEventListener("input", (e) => { if (e.target.id === "wz-note") wzRender(); });

/* Mobile bottom bar: only while the wizard section is on screen. */
(function () {
  const section = document.getElementById("services");
  const bar = document.getElementById("wz-bar");
  if (!section || !bar || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    const on = entries[0].isIntersecting;
    bar.classList.toggle("visible", on);
    document.body.classList.toggle("has-wz-bar", on);
  }, { rootMargin: "-120px 0px -80px 0px", threshold: 0 });
  io.observe(section);
})();

/* ---------- Init ---------- */
lucide.createIcons();
setLang(currentLang);
