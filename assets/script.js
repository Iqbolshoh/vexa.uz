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
    services_desc: "3 ta oddiy qadam: Vexa tizimini tanlang, kerakli xizmatlarni qo'shing va Telegram orqali buyurtma yuboring. Narx jonli hisoblanadi.",
    wz_sales_desc: "Savdo, ombor va bulutli kassa tizimi",
    wz_rent_desc: "Ijara biznesi: bronlash, shartnoma, to'lovlar",
    wz_crm_desc: "Mijozlar, savdo voronkasi va xodimlar KPI",
    wz_restaurant_desc: "Restoran: stollar, menyu, oshxona buyurtmalari",
    wz_organization_desc: "Tashkilot: xodimlar, vazifalar, davomat, hujjatlar",
    wz_step1_title: "Vexa tizimi",
    wz_step2_title: "Xizmatlar",
    wz_step3_title: "Yakunlash",
    wz_step1_heading: "Vexa tizimini tanlang",
    wz_step1_sub: "Biznesingizga mos tizimni belgilang — keyingi qadam avtomatik ochiladi",
    wz_step2_heading: "Xizmatlarni qo'shing",
    wz_step2_sub: "Tizimga kerakli qo'shimcha xizmatlarni belgilang — narx darhol yangilanadi",
    wz_step2_pick: "Qo'shimcha xizmatlar",
    wz_step3_heading: "Tekshiring va yuboring",
    wz_step3_sub: "Tanlovingizni ko'rib chiqing, izoh qoldiring va buyurtmani yuboring",
    wz_pick_first: "Avval Vexa tizimini tanlang",
    wz_msg_system: "Tizim",
    wz_none: "Tanlanmagan",
    wz_add: "Qo'shish",
    wz_step: "Qadam",
    wz_choose_one: "bittasini tanlang",
    wz_choose_any: "ixtiyoriy",
    wz_recommended: "Tavsiya",
    wz_note: "Izoh",
    wz_optional: "(ixtiyoriy)",
    wz_note_ph: "Loyihangiz haqida qisqacha: soha, misollar, muddat...",
    wz_submit_note: "Tugmani bosganingizda Telegram ochiladi — tanlovlaringiz xabar sifatida tayyor bo'ladi. Faqat \"Yuborish\"ni bosing.",
    wz_back: "Orqaga",
    wz_next: "Keyingi",
    wz_send: "Telegram orqali yuborish",
    wz_send_short: "Yuborish",
    wz_receipt: "Hisob-kitob",
    wz_reset: "Boshidan",
    wz_empty: "Hali hech narsa tanlanmadi. 1-qadamdan boshlang.",
    wz_total: "Jami",
    wz_trust_1: "Yashirin to'lovlar yo'q",
    wz_trust_2: "24/7 aloqa",
    wz_trust_3: "Ma'lumotlar maxfiy",
    wz_msg_hi: "Assalomu alaykum!",
    wz_msg_intro: "Vexa.uz sayti orqali buyurtma bermoqchiman:",
    nav_services: "Xizmatlar",
    btn_services: "Xizmatlar va narxlar",
    services_label: "Xizmatlar va narxlar",
    services_title: "Sizga nima kerak?",
    services_note: "Narxlar boshlang'ich — yakuniy summa loyiha hajmiga qarab kelishiladi.",
    svc_from: "dan",
    svc_popular: "Mashhur",
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
    services_desc: "3 простых шага: выберите систему Vexa, добавьте нужные услуги и отправьте заказ в Telegram. Цена считается сразу.",
    wz_sales_desc: "Продажи, склад и облачная касса",
    wz_rent_desc: "Аренда: бронирование, договоры, платежи",
    wz_crm_desc: "Клиенты, воронка продаж и KPI сотрудников",
    wz_restaurant_desc: "Ресторан: столы, меню, заказы на кухню",
    wz_organization_desc: "Организация: сотрудники, задачи, посещаемость, документы",
    wz_step1_title: "Система Vexa",
    wz_step2_title: "Услуги",
    wz_step3_title: "Завершение",
    wz_step1_heading: "Выберите систему Vexa",
    wz_step1_sub: "Отметьте подходящую систему — следующий шаг откроется автоматически",
    wz_step2_heading: "Добавьте услуги",
    wz_step2_sub: "Отметьте нужные дополнительные услуги — цена обновляется сразу",
    wz_step2_pick: "Дополнительные услуги",
    wz_step3_heading: "Проверьте и отправьте",
    wz_step3_sub: "Просмотрите выбор, оставьте комментарий и отправьте заказ",
    wz_pick_first: "Сначала выберите систему Vexa",
    wz_msg_system: "Система",
    wz_none: "Не выбрано",
    wz_add: "Добавить",
    wz_step: "Шаг",
    wz_choose_one: "выберите одно",
    wz_choose_any: "по желанию",
    wz_recommended: "Рекомендуем",
    wz_note: "Комментарий",
    wz_optional: "(необязательно)",
    wz_note_ph: "Кратко о проекте: сфера, примеры, сроки...",
    wz_submit_note: "При нажатии откроется Telegram — ваш выбор уже будет в сообщении. Просто нажмите «Отправить».",
    wz_back: "Назад",
    wz_next: "Далее",
    wz_send: "Отправить в Telegram",
    wz_send_short: "Отправить",
    wz_receipt: "Расчёт",
    wz_reset: "Сначала",
    wz_empty: "Пока ничего не выбрано. Начните с шага 1.",
    wz_total: "Итого",
    wz_trust_1: "Без скрытых платежей",
    wz_trust_2: "Связь 24/7",
    wz_trust_3: "Данные конфиденциальны",
    wz_msg_hi: "Здравствуйте!",
    wz_msg_intro: "Хочу оформить заказ через сайт Vexa.uz:",
    nav_services: "Услуги",
    btn_services: "Услуги и цены",
    services_label: "Услуги и цены",
    services_title: "Что вам нужно?",
    services_note: "Цены стартовые — итоговая сумма согласовывается по объёму проекта.",
    svc_from: "от",
    svc_popular: "Популярно",
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
    services_desc: "3 simple steps: pick a Vexa system, add the services you need and send the order via Telegram. The price updates live.",
    wz_sales_desc: "Sales, inventory and cloud POS",
    wz_rent_desc: "Rental business: bookings, contracts, payments",
    wz_crm_desc: "Customers, sales funnel and staff KPIs",
    wz_restaurant_desc: "Restaurant: tables, menu, kitchen orders",
    wz_organization_desc: "Organisation: staff, tasks, attendance, documents",
    wz_step1_title: "Vexa system",
    wz_step2_title: "Services",
    wz_step3_title: "Finish",
    wz_step1_heading: "Choose a Vexa system",
    wz_step1_sub: "Pick the system that fits your business — the next step opens automatically",
    wz_step2_heading: "Add services",
    wz_step2_sub: "Tick the extra services you need — the price updates instantly",
    wz_step2_pick: "Extra services",
    wz_step3_heading: "Review & send",
    wz_step3_sub: "Check your selection, leave a note and send your order",
    wz_pick_first: "Pick a Vexa system first",
    wz_msg_system: "System",
    wz_none: "None selected",
    wz_add: "Add",
    wz_step: "Step",
    wz_choose_one: "choose one",
    wz_choose_any: "optional",
    wz_recommended: "Recommended",
    wz_note: "Note",
    wz_optional: "(optional)",
    wz_note_ph: "Briefly about your project: industry, examples, deadline...",
    wz_submit_note: "Pressing the button opens Telegram with your selection pre-filled as a message. Just hit \"Send\".",
    wz_back: "Back",
    wz_next: "Next",
    wz_send: "Send via Telegram",
    wz_send_short: "Send",
    wz_receipt: "Estimate",
    wz_reset: "Start over",
    wz_empty: "Nothing selected yet. Start with step 1.",
    wz_total: "Total",
    wz_trust_1: "No hidden fees",
    wz_trust_2: "24/7 contact",
    wz_trust_3: "Your data stays private",
    wz_msg_hi: "Hello!",
    wz_msg_intro: "I'd like to place an order via Vexa.uz:",
    nav_services: "Services",
    btn_services: "Services & pricing",
    services_label: "Services & pricing",
    services_title: "What do you need?",
    services_note: "Starting prices — the final amount is agreed based on project scope.",
    svc_from: "from",
    svc_popular: "Popular",
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
    services_desc: "3 қадами оддӣ: системаи Vexa-ро интихоб кунед, хизматҳои лозимиро илова кунед ва фармоишро тавассути Telegram фиристед. Нарх фавран ҳисоб мешавад.",
    wz_sales_desc: "Фурӯш, анбор ва кассаи абрӣ",
    wz_rent_desc: "Иҷора: брон, шартнома, пардохтҳо",
    wz_crm_desc: "Мизоҷон, воронкаи фурӯш ва KPI-и кормандон",
    wz_restaurant_desc: "Тарабхона: мизҳо, меню, фармоишҳои ошхона",
    wz_organization_desc: "Ташкилот: кормандон, вазифаҳо, ҳозирӣ, ҳуҷҷатҳо",
    wz_step1_title: "Системаи Vexa",
    wz_step2_title: "Хизматҳо",
    wz_step3_title: "Анҷом",
    wz_step1_heading: "Системаи Vexa-ро интихоб кунед",
    wz_step1_sub: "Системаи мувофиқро қайд кунед — қадами оянда худкор кушода мешавад",
    wz_step2_heading: "Хизматҳоро илова кунед",
    wz_step2_sub: "Хизматҳои иловагии лозимиро қайд кунед — нарх фавран нав мешавад",
    wz_step2_pick: "Хизматҳои иловагӣ",
    wz_step3_heading: "Санҷед ва фиристед",
    wz_step3_sub: "Интихобро аз назар гузаронед, шарҳ нависед ва фармоишро фиристед",
    wz_pick_first: "Аввал системаи Vexa-ро интихоб кунед",
    wz_msg_system: "Система",
    wz_none: "Интихоб нашудааст",
    wz_add: "Илова кардан",
    wz_step: "Қадам",
    wz_choose_one: "якеро интихоб кунед",
    wz_choose_any: "ихтиёрӣ",
    wz_recommended: "Тавсия",
    wz_note: "Шарҳ",
    wz_optional: "(ихтиёрӣ)",
    wz_note_ph: "Мухтасар дар бораи лоиҳа: соҳа, мисолҳо, мӯҳлат...",
    wz_submit_note: "Ҳангоми пахш Telegram кушода мешавад — интихоби шумо ҳамчун паём тайёр аст. Танҳо «Фиристодан»-ро пахш кунед.",
    wz_back: "Бозгашт",
    wz_next: "Оянда",
    wz_send: "Фиристодан тавассути Telegram",
    wz_send_short: "Фиристодан",
    wz_receipt: "Ҳисоб",
    wz_reset: "Аз нав",
    wz_empty: "Ҳоло чизе интихоб нашудааст. Аз қадами 1 оғоз кунед.",
    wz_total: "Ҳамагӣ",
    wz_trust_1: "Пардохтҳои пинҳонӣ нест",
    wz_trust_2: "Робита 24/7",
    wz_trust_3: "Маълумот махфӣ аст",
    wz_msg_hi: "Салом!",
    wz_msg_intro: "Мехоҳам тавассути сайти Vexa.uz фармоиш диҳам:",
    nav_services: "Хизматҳо",
    btn_services: "Хизматҳо ва нархҳо",
    services_label: "Хизматҳо ва нархҳо",
    services_title: "Ба шумо чӣ лозим аст?",
    services_note: "Нархҳо ибтидоӣ — маблағи ниҳоӣ вобаста ба ҳаҷми лоиҳа мувофиқа карда мешавад.",
    svc_from: "аз",
    svc_popular: "Машҳур",
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
   Step 1: one Vexa system (cards in the HTML, base price in data-price).
   Step 2: extra services — independent toggles, prices in USD added on top.
   Step 3: review + note + send. L(uz, ru, en, tj) → localised label. */
function L(uz, ru, en, tj) { return { uz, ru, en, tj }; }

const WIZARD_SERVICES = [
  { id: "landing", icon: "layout-template", price: 150, rec: true,
    title: L("Landing page", "Лендинг", "Landing page", "Лендинг"),
    desc: L("Biznesingiz uchun bir sahifali sotuvchi sayt", "Одностраничный продающий сайт для вашего бизнеса", "One-page sales site for your business", "Сайти яксаҳифагии фурӯш барои бизнеси шумо") },
  { id: "bot", icon: "send", price: 200, rec: true,
    title: L("Telegram bot", "Telegram-бот", "Telegram bot", "Telegram-бот"),
    desc: L("Buyurtma, ariza va bildirishnomalar tizim bilan bog'langan", "Заказы, заявки и уведомления, связанные с системой", "Orders, leads and notifications linked to the system", "Фармоиш, дархост ва огоҳиномаҳо бо система пайваст") },
  { id: "app", icon: "smartphone", price: 1500,
    title: L("Mobil ilova", "Мобильное приложение", "Mobile app", "Барномаи мобилӣ"),
    desc: L("Android va iOS uchun ilova (backend bilan)", "Приложение для Android и iOS (с бэкендом)", "Android and iOS app (with backend)", "Барнома барои Android ва iOS (бо бэкенд)") },
  { id: "payment", icon: "credit-card", price: 150,
    title: L("Onlayn to'lov (Payme, Click)", "Онлайн-оплата (Payme, Click)", "Online payment (Payme, Click)", "Пардохти онлайн (Payme, Click)"),
    desc: L("Karta orqali avtomatik to'lov qabul qilish", "Автоматический приём оплаты картой", "Automatic card payments", "Қабули худкори пардохт бо корт") },
  { id: "multilang", icon: "languages", price: 80,
    title: L("Ko'p tillilik", "Мультиязычность", "Multilingual", "Бисёрзабонӣ"),
    desc: L("UZ / RU / EN interfeys", "Интерфейс UZ / RU / EN", "UZ / RU / EN interface", "Интерфейси UZ / RU / EN") },
  { id: "domain", icon: "globe-lock", price: 90,
    title: L("Domen + hosting (1 yil)", "Домен + хостинг (1 год)", "Domain + hosting (1 year)", "Домен + ҳостинг (1 сол)"),
    desc: L("12 oy × $7.5 — domen, SSL va serverga joylashtirish", "12 мес × $7.5 — домен, SSL и размещение на сервере", "12 months × $7.5 — domain, SSL and server deployment", "12 моҳ × $7.5 — домен, SSL ва ҷойгиркунӣ дар сервер") },
  { id: "training", icon: "graduation-cap", price: 100,
    title: L("O'rnatish va o'qitish", "Внедрение и обучение", "Setup & training", "Ҷорӣ кардан ва омӯзиш"),
    desc: L("Ma'lumotlarni ko'chirish, xodimlarni o'qitish", "Перенос данных, обучение сотрудников", "Data migration, staff training", "Интиқоли маълумот, омӯзиши кормандон") },
  { id: "support", icon: "life-buoy",
    title: L("Texnik yordam", "Техподдержка", "Technical support", "Дастгирии техникӣ"),
    desc: L("Kichik o'zgartirishlar va xatolarni bepul tuzatish", "Мелкие правки и исправление ошибок бесплатно", "Minor edits and bug fixes included", "Тағйироти хурд ва ислоҳи хатоҳо ройгон"),
    // pick one (tap the active option again to remove)
    choices: [
      { id: "1m", price: 30, title: L("1 oy", "1 месяц", "1 month", "1 моҳ") },
      { id: "3m", price: 90, title: L("3 oy", "3 месяца", "3 months", "3 моҳ") },
    ] },
];

/* ---------- Order wizard: state & logic ---------- */
const ORDER_TG = "https://t.me/templates_uz_support";
const wz = { step: 1, maxStep: 1, type: null, sel: {} };
const typeCards = Array.from(document.querySelectorAll("#wz-panel-1 .service-card"));

const tr = (o) => (o && (o[currentLang] || o.uz)) || "";
const money = (n) => "$" + n;
const plus = (n) => (n > 0 ? "+" + money(n) : "");
const $ = (id) => document.getElementById(id);
const t = () => translations[currentLang];

function wzTypeCard() { return typeCards.find((c) => c.dataset.type === wz.type); }
function wzTypeName() { const c = wzTypeCard(); return c ? c.querySelector(".service-name").textContent.trim() : ""; }
function wzBasePrice() { const c = wzTypeCard(); return c ? Number(c.dataset.price) : 0; }

function wzSelectType(card) {
  wz.type = card.dataset.type;
  typeCards.forEach((c) => {
    const on = c === card;
    c.classList.toggle("selected", on);
    c.setAttribute("aria-checked", on ? "true" : "false");
  });
  wz.maxStep = Math.max(wz.maxStep, 2);
  wzRender();
  setTimeout(() => wzGo(2), 220); // picking a system moves straight to step 2
}

function wzGo(n) {
  if (n < 1 || n > 3 || n > wz.maxStep) return;
  wz.step = n;
  wzRender();
  const st = $("wz-stepper");
  const top = st.getBoundingClientRect().top;
  if (top < 0 || top > 200) st.scrollIntoView({ behavior: "smooth", block: "start" });
}
function wzNext() { if (wz.type) { wz.maxStep = Math.max(wz.maxStep, wz.step + 1); wzGo(wz.step + 1); } }
function wzPrev() { wzGo(wz.step - 1); }
function wzReset() {
  wz.step = 1; wz.maxStep = 1; wz.type = null; wz.sel = {};
  typeCards.forEach((c) => { c.classList.remove("selected"); c.setAttribute("aria-checked", "false"); });
  const note = $("wz-note"); if (note) note.value = "";
  wzRender();
}
function wzToggle(id) { wz.sel[id] = !wz.sel[id]; wzRender(); }
function wzPick(id, choiceId) { wz.sel[id] = wz.sel[id] === choiceId ? false : choiceId; wzRender(); }

function wzLines() {
  const out = [];
  WIZARD_SERVICES.forEach((s) => {
    if (!wz.sel[s.id]) return;
    if (s.choices) {
      const c = s.choices.find((x) => x.id === wz.sel[s.id]);
      if (c) out.push({ name: tr(s.title) + " — " + tr(c.title), price: c.price });
    } else {
      out.push({ name: tr(s.title), price: s.price });
    }
  });
  return out;
}
function wzTotal() { return wzBasePrice() + wzLines().reduce((a, l) => a + l.price, 0); }

const WZ_TYPE_EMOJI = { sales: "🛒", rent: "🔑", crm: "📊", restaurant: "🍽️", organization: "🏢" };
const WZ_RULE = "━━━━━━━━━━━━━━━━━━━";

/* Plain text (t.me ?text= does not render markdown), so structure comes
   from spacing, emoji and a rule line. */
function wzMessage() {
  const tt = t();
  const lines = wzLines();
  const note = ($("wz-note")?.value || "").trim();
  const out = [];
  out.push("👋 " + tt.wz_msg_hi);
  out.push(tt.wz_msg_intro);
  out.push("");
  out.push(WZ_RULE);
  out.push((WZ_TYPE_EMOJI[wz.type] || "🧩") + " " + tt.wz_msg_system.toUpperCase());
  out.push("     " + wzTypeName() + " — " + money(wzBasePrice()));
  out.push("");
  out.push("➕ " + tt.wz_step2_pick.toUpperCase());
  if (lines.length) {
    lines.forEach((l) => out.push("     ✅ " + l.name + " — " + plus(l.price)));
  } else {
    out.push("     — " + tt.wz_none.toLowerCase());
  }
  if (note) {
    out.push("");
    out.push("💬 " + tt.wz_note.toUpperCase());
    out.push("     " + note.replace(/\n+/g, "\n     "));
  }
  out.push(WZ_RULE);
  out.push("💰 " + tt.wz_total.toUpperCase() + ": " + money(wzTotal()));
  out.push("");
  out.push("🌐 vexa.uz");
  return out.join("\n");
}

const iconHtml = (name) => `<i data-lucide="${name}"></i>`;

function wzRowHtml(c, on) {
  const tt = t();
  const rec = c.rec ? `<span class="wz-row-rec">${tt.wz_recommended}</span>` : "";
  const desc = c.desc ? `<p class="wz-row-desc">${tr(c.desc)}</p>` : "";
  if (c.choices) {
    const picked = wz.sel[c.id];
    const seg = `<span class="wz-seg" role="radiogroup">` + c.choices.map((ch) =>
      `<button type="button" class="wz-seg-btn${picked === ch.id ? " on" : ""}" role="radio" aria-checked="${picked === ch.id}" onclick="wzPick('${c.id}','${ch.id}')">
        <span class="wz-seg-title">${tr(ch.title)}</span><span class="wz-seg-price">${plus(ch.price)}</span></button>`).join("") + `</span>`;
    return `<div class="wz-row wz-row-choice${on ? " on" : ""}">
    <span class="wz-row-icon">${iconHtml(c.icon)}</span>
    <span class="wz-row-body"><span class="wz-row-title">${tr(c.title)}${rec}<span class="wz-row-kind">${tt.wz_choose_one}</span></span>${desc}</span>
    ${seg}</div>`;
  }
  return `<button type="button" class="wz-row${on ? " on" : ""}" role="switch" aria-checked="${on}" onclick="wzToggle('${c.id}')">
    <span class="wz-row-icon">${iconHtml(c.icon)}</span>
    <span class="wz-row-body"><span class="wz-row-title">${tr(c.title)}${rec}</span>${desc}<span class="wz-row-price">${plus(c.price)}</span></span>
    <span class="wz-row-right"><span class="wz-row-price">${plus(c.price)}</span><span class="wz-switch"></span></span></button>`;
}

function wzRenderStep2() {
  $("wz-panel-2").innerHTML = `<div class="wz-group-head"><h4 class="wz-group-title">${t().wz_step2_pick}</h4><span class="wz-group-kind">${t().wz_choose_any}</span></div>
    <div class="wz-rows">` + WIZARD_SERVICES.map((s) => wzRowHtml(s, !!wz.sel[s.id])).join("") + `</div>`;
}

function wzRenderStep3() {
  const tt = t();
  const lines = wzLines();
  let html = `<div class="wz-review-item is-base"><span class="wz-review-k">${tt.wz_msg_system}</span><span class="wz-review-v">${wzTypeName()}</span><span class="wz-review-p">${money(wzBasePrice())}</span></div>`;
  if (lines.length) {
    html += lines.map((l) => `<div class="wz-review-item"><span class="wz-review-k">${tt.wz_step2_title}</span><span class="wz-review-v">${l.name}</span><span class="wz-review-p">${plus(l.price)}</span></div>`).join("");
  } else {
    html += `<div class="wz-review-item is-muted"><span class="wz-review-k">${tt.wz_step2_title}</span><span class="wz-review-v">${tt.wz_none}</span><button type="button" class="wz-review-edit" onclick="wzGo(2)">${tt.wz_add}</button></div>`;
  }
  html += `<div class="wz-review-item is-total"><span class="wz-review-k"></span><span class="wz-review-v">${tt.wz_total}</span><span class="wz-review-p">${money(wzTotal())}</span></div>`;
  $("wz-review").innerHTML = html;
}

function wzRenderReceipt() {
  const tt = t();
  const ul = $("wz-lines");
  if (!wz.type) {
    ul.innerHTML = "";
  } else {
    let html = `<li class="wz-line is-base"><span class="wz-line-name">${wzTypeName()}</span><span class="wz-line-price">${money(wzBasePrice())}</span></li>`;
    const lines = wzLines();
    if (lines.length) html += `<li class="wz-line-group">${tt.wz_step2_title}</li>`;
    lines.forEach((l) => { html += `<li class="wz-line"><span class="wz-line-name">${l.name}</span><span class="wz-line-price">${plus(l.price)}</span></li>`; });
    ul.innerHTML = html;
  }
  $("wz-empty").classList.toggle("hidden", !!wz.type);
  const total = money(wzTotal());
  $("wz-total").textContent = total;
  $("wz-bar-total").textContent = total;
}

function wzRender() {
  const tt = t();
  document.querySelectorAll("#wz-stepper .wz-step").forEach((li) => {
    const n = Number(li.dataset.step);
    li.classList.toggle("is-current", n === wz.step);
    li.classList.toggle("is-done", n < wz.step);
    li.querySelector("button").disabled = n > wz.maxStep;
  });
  $("wz-step-now").textContent = wz.step;
  $("wz-bar-step").textContent = wz.step;
  $("wz-heading").textContent = tt["wz_step" + wz.step + "_heading"];
  $("wz-sub").textContent = tt["wz_step" + wz.step + "_sub"];
  $("wz-chosen").classList.toggle("hidden", !(wz.type && wz.step > 1));
  $("wz-chosen-name").textContent = wzTypeName();
  [1, 2, 3].forEach((n) => $("wz-panel-" + n).classList.toggle("hidden", n !== wz.step));
  if (wz.step === 2) wzRenderStep2();
  if (wz.step === 3) wzRenderStep3();
  wzRenderReceipt();
  const last = wz.step === 3;
  ["wz-back", "wz-bar-back"].forEach((id) => $(id).classList.toggle("hidden", wz.step === 1));
  ["wz-next", "wz-bar-next"].forEach((id) => { $(id).classList.toggle("hidden", last); $(id).disabled = !wz.type; });
  ["wz-send", "wz-bar-send"].forEach((id) => $(id).classList.toggle("hidden", !last));
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
