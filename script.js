// Bilingual Dictionary (AR / EN)
const i18n = {
  ar: {
    sosLive: "طوارئ حية • SOS",
    brandSub: "بوابة إنقاذ الحياة",
    navHome: "الرئيسية",
    navStock: "مخزون الدم",
    navDonor: "بوابة المتبرع",
    navFinancial: "التبرع المالي",
    navRecipient: "بوابة المتلقي",
    heroTitle1: "قطرة منك..",
    heroTitle2: "حياة لغيرك",
    heroDesc: "منصة ذكية تربط المتبرعين بالدم بالمرضى والمستشفيات في جميع محافظات مصر في ثوانٍ معدودة عبر تتبع حي وتطابق فوري للفصائل.",
    btnDonate: "أريد التبرع بالدم",
    btnDonateMoney: "تبرع مالي لتوفير كيس دم 💳",
    btnNeed: "أحتاج متبرع (طلب عاجل)",
    statDonorsLabel: "متبرع نشط",
    statGovLabel: "محافظة مغطاة",
    minUnit: "دقائق",
    statTimeLabel: "متوسط الاستجابة",
    compatTitle: "من ينقذ من؟ (تطابق الفصائل)",
    compatHint: "اختر فصيلة دمك لمعرفة الفصائل التي يمكنك إنقاذها:",
    canDonateTo: "يمكنك التبرع لـ:",
    stockTitle: "مخزون الدم الحي في البنوك",
    stockSub: "مؤشر لحظي لنسب توفر الفصائل وتنبيهات العجز الحرج",
    donorTag: "بوابة المتبرع • DONOR PORTAL",
    donorTitle: "كن بطلاً وأصدر بطاقتك الرقمية",
    donorSub: "سجّل بياناتك وموقعك الحالي، وسنرشدك فوراً لأقرب بنك دم أو مستشفى للتبرع بأمان",
    donateTargetLabel: "اختر جهة التبرع:",
    optPersonTitle: "التبرع لشخص",
    optPersonDesc: "تبرع مباشر لمريض محدد",
    optHospitalTitle: "التبرع لمستشفى",
    optHospitalDesc: "دعم مخزون بنك الدم",
    eligTitle: "حاسبة الأهلية وموعد التبرع القادم",
    lastDonationLabel: "تاريخ آخر تبرع بالدم (اتركه فارغاً لو أول مرة):",
    elig1: "العمر بين 18 و 60 عاماً والوزن فوق 50 كجم",
    elig3: "أتمتع بصحة جيدة ولا أتناول مضادات حيوية حالياً",
    eligReady: "✓ مؤهل للتبرع اليوم!",
    eligNotReady: "⚠ يرجى استيفاء شروط العمر والوزن والصحة العامة",
    labelName: "الاسم الكامل",
    labelNationalId: "الرقم القومي (14 رقم)",
    labelBlood: "فصيلة الدم",
    optUnknownBlood: "لا أعلم فصيلتي (أول مرة)",
    labelCity: "المحافظة",
    labelCurrentLocation: "موقعك الحالي بالتفصيل (المدينة / الحي / أقرب معلم)",
    btnGps: "موقعي الحالي",
    labelPersonCode: "اسم المريض أو رقم الحالة (اختياري)",
    labelHospitalName: "اسم المستشفى المستهدف",
    btnGenerateCard: "تسجيل التبرع وإظهار أقرب مركز",
    unknownReminderTitle: "تنبيه هام بخصوص فصيلة دمك:",
    unknownReminderBody: "بما أنك اخترت (لا أعلم فصيلتي)، سيقوم بنك الدم بفحص فصيلتك مجاناً قبل السحب. يرجى الحرص على معرفة فصيلة دمك وتسجيلها بعد التبرع حتى تتمكن من تحديدها مباشرة عند تبرعك القادم وإنقاذ الحالات المطابقة بسرعة!",
    nearestCenterTitle: "أقرب مركز تبرع بالدم لموقعك الحالي:",
    btnOpenMap: "فتح الموقع على الخريطة 🗺️",
    cardRank: "الرتبة",
    cardRankVal: "منقذ حياة ★★★★★",
    tiltHint: "حرّك المؤشر أو المس البطاقة للمعاينة ثلاثية الأبعاد",
    btnDownloadCard: "⬇ تحميل البطاقة كصورة (PNG)",
    finTag: "بديل التبرع بالدم • FINANCIAL SUPPORT",
    finTitle: "غير قادر على التبرع بالدم؟ ساهم بتوفير كيس دم لمريض",
    finSub: "إذا كانت ظروفك الصحية أو الطبية تمنعك من التبرع بالدم، يمكنك التبرع بمبلغ مالي لتغطية تكلفة كيس دم وفحوصات التوافق لمريض محتاج",
    finImpactTitle: "صندوق توفير أكياس الدم الطارئة",
    finImpactDesc: "تُوجَّه التبرعات مباشرة لتجهيز أكياس الدم ومشتقاته (صفائح دموية / بلازما) للحالات غير القادرة في المستشفيات الحكومية والجامعية.",
    finBagsFundedLabel: "أكياس الدم الممولة هذا الشهر:",
    bagUnit: "كيس دم",
    finCostNote: "💡 متوسط تكلفة تجهيز وفحص كيس الدم الواحد ومستلزمات النقل = 350 جنيهاً مصرياً",
    tier1Title: "150 ج.م — مساهمة فحوصات التوافق",
    tier1Desc: "تغطي تحاليل الفيروسات والتوافق قبل نقل الدم",
    tier2Title: "350 ج.م — تكلفة كيس دم كامل",
    tier2Desc: "توفر كيس دم جاهز ومفحوص لمريض طوارئ",
    tier3Title: "700 ج.م — كيسان أو صفائح دموية",
    tier3Desc: "دعم مضاعف لمرضى الأورام والعمليات الحرجة",
    finFormTitle: "تبرع مالي سريع وآمن",
    finFormDesc: "اختر قيمة المساهمة أو اكتب المبلغ المناسب لك لإصدار إيصال مساهمة إنسانية",
    finDonorNameLabel: "اسم المتبرع (أو فاعل خير)",
    finAmountLabel: "المبلغ بالجنيه المصري (ج.م)",
    finMethodLabel: "وسيلة الدفع المفضلة",
    finGovLabel: "المحافظة المستفيدة",
    btnSubmitFinancial: "تأكيد المساهمة المالية لتوفير كيس دم 💳",
    finSuccessTitle: "شكراً لعطائك! تم تسجيل مساهمتك الإنسانية",
    recTag: "بوابة المتلقي • RECIPIENT PORTAL",
    recTitle: "رادار المتلقين وطلبات الاستغاثة",
    recSub: "حدد موقع الحالات المحتاجة للتبرع في محافظتك أو أطلق نداء استغاثة عاجل",
    radarTitle: "رادار المتلقي (الحالات المحتاجة)",
    filterAllBlood: "كل الفصائل",
    filterAllCities: "كل المحافظات (27)",
    sosFormTitle: "إطلاق نداء استغاثة (طلب دم عاجل)",
    sosFormDesc: "سيظهر طلبك فوراً على رادار المتلقين وفي شريط الطوارئ الحي",
    recNameLabel: "اسم المريض / الحالة",
    recNationalIdLabel: "الرقم القومي للمريض (14 رقم)",
    recBloodLabel: "الفصيلة المطلوبة",
    recCityLabel: "المحافظة",
    recPhoneLabel: "رقم الهاتف للتواصل",
    recUrgencyLabel: "درجة الخطورة",
    urgCritical: "حرج جداً (فوري)",
    urgModerate: "متوسط (خلال 24 ساعة)",
    recHospitalLabel: "اسم المستشفى / الموقع",
    recUnitsLabel: "عدد الأكياس",
    btnBroadcastSOS: "نشر نداء الاستغاثة الآن 🚨",
    footerCredit: "تم تطويره عن طريق فريق VOID",
    respondBtn: "استجابة",
    callBtn: "اتصال",
    lowStock: "عجز حرج",
    okStock: "متوفر",
    noCasesInGov: "لا توجد حالات عاجلة مسجلة حالياً في هذه المحافظة.",
    invalidNid: "⚠ يرجى إدخال رقم قومي مصري صحيح مكون من 14 رقماً"
  },
  en: {
    sosLive: "LIVE SOS • URGENT",
    brandSub: "Life Saving Portal",
    navHome: "Home",
    navStock: "Blood Stock",
    navDonor: "Donor Portal",
    navFinancial: "Financial Aid",
    navRecipient: "Recipient Portal",
    heroTitle1: "Your Drop..",
    heroTitle2: "Is Their Life",
    heroDesc: "A smart platform connecting blood donors with patients and hospitals across all 27 Egyptian governorates in seconds.",
    btnDonate: "Donate Blood",
    btnDonateMoney: "Fund a Blood Bag 💳",
    btnNeed: "Request Blood (Urgent)",
    statDonorsLabel: "Active Donors",
    statGovLabel: "Governorates Covered",
    minUnit: "mins",
    statTimeLabel: "Avg. Response Time",
    compatTitle: "Who Can Save Whom?",
    compatHint: "Select your blood type to see who you can save:",
    canDonateTo: "You can donate to:",
    stockTitle: "Live Blood Bank Inventory",
    stockSub: "Real-time availability levels and critical shortage alerts",
    donorTag: "DONOR PORTAL",
    donorTitle: "Become a Hero & Issue Your Digital Card",
    donorSub: "Register your info and current location to immediately find the nearest blood donation center",
    donateTargetLabel: "Select Donation Destination:",
    optPersonTitle: "Donate to a Person",
    optPersonDesc: "Direct donation to a patient",
    optHospitalTitle: "Donate to a Hospital",
    optHospitalDesc: "Support blood bank stock",
    eligTitle: "Smart Eligibility & Next Donation Calculator",
    lastDonationLabel: "Last blood donation date (leave blank if first time):",
    elig1: "Age between 18–60 and weight above 50 kg",
    elig3: "Feeling healthy and not taking antibiotics currently",
    eligReady: "✓ Eligible to Donate Today!",
    eligNotReady: "⚠ Please ensure age, weight, and health criteria are met",
    labelName: "Full Name",
    labelNationalId: "National ID (14 Digits)",
    labelBlood: "Blood Type",
    optUnknownBlood: "I Don't Know My Blood Type (First Time)",
    labelCity: "Governorate",
    labelCurrentLocation: "Your Current Detailed Location (City / District / Landmark)",
    btnGps: "My Location",
    labelPersonCode: "Patient Name or Case ID (Optional)",
    labelHospitalName: "Target Hospital Name",
    btnGenerateCard: "Register & Find Nearest Center",
    unknownReminderTitle: "Important Reminder About Your Blood Type:",
    unknownReminderBody: "Since you selected (I Don't Know My Blood Type), the blood bank will test your type for free before donation. Please make sure to learn and record your blood type after donating so you can select it directly on your next donation!",
    nearestCenterTitle: "Nearest Blood Donation Center to Your Location:",
    btnOpenMap: "Open on Map 🗺️",
    cardRank: "Rank",
    cardRankVal: "Life Saver ★★★★★",
    tiltHint: "Hover or touch the card for 3D preview",
    btnDownloadCard: "⬇ Download Card as PNG",
    finTag: "BLOOD DONATION ALTERNATIVE • FINANCIAL SUPPORT",
    finTitle: "Unable to Donate Blood? Fund a Blood Bag for a Patient",
    finSub: "If health or medical conditions prevent you from donating blood, you can contribute financially to cover blood bag preparation and cross-matching tests",
    finImpactTitle: "Emergency Blood Bag Supply Fund",
    finImpactDesc: "Contributions go directly toward preparing blood bags and platelets for underprivileged emergency patients in public and university hospitals.",
    finBagsFundedLabel: "Blood bags funded this month:",
    bagUnit: "blood bags",
    finCostNote: "💡 Average preparation & testing cost per blood bag = 350 EGP",
    tier1Title: "150 EGP — Compatibility & Screening Tests",
    tier1Desc: "Covers viral screening and cross-matching before transfusion",
    tier2Title: "350 EGP — Full Blood Bag Cost",
    tier2Desc: "Provides one tested, ready blood bag for an emergency patient",
    tier3Title: "700 EGP — Two Bags or Platelets",
    tier3Desc: "Double support for oncology and critical surgery patients",
    finFormTitle: "Quick & Secure Financial Contribution",
    finFormDesc: "Select a preset amount or enter your custom contribution to issue an impact receipt",
    finDonorNameLabel: "Donor Name (or Philanthropist)",
    finAmountLabel: "Amount in EGP",
    finMethodLabel: "Preferred Payment Method",
    finGovLabel: "Target Governorate",
    btnSubmitFinancial: "Confirm Financial Contribution 💳",
    finSuccessTitle: "Thank you! Your humanitarian contribution is recorded",
    recTag: "RECIPIENT PORTAL",
    recTitle: "Recipient Radar & SOS Requests",
    recSub: "Locate nearby patients in urgent need across your governorate or broadcast an SOS request",
    radarTitle: "Recipient Radar (Active Needs)",
    filterAllBlood: "All Types",
    filterAllCities: "All Governorates (27)",
    sosFormTitle: "Broadcast Urgent Blood Request",
    sosFormDesc: "Your request appears immediately on the Recipient Radar and live ticker",
    recNameLabel: "Patient / Case Name",
    recNationalIdLabel: "Patient National ID (14 Digits)",
    recBloodLabel: "Required Blood Type",
    recCityLabel: "Governorate",
    recPhoneLabel: "Contact Phone Number",
    recUrgencyLabel: "Urgency Level",
    urgCritical: "Critical (Immediate)",
    urgModerate: "Moderate (Within 24h)",
    recHospitalLabel: "Hospital / Location",
    recUnitsLabel: "Required Units",
    btnBroadcastSOS: "Broadcast SOS Request Now 🚨",
    footerCredit: "Developed by Team VOID",
    respondBtn: "Respond",
    callBtn: "Call",
    lowStock: "Critical Low",
    okStock: "Available",
    noCasesInGov: "No urgent cases currently listed in this governorate.",
    invalidNid: "⚠ Please enter a valid 14-digit Egyptian National ID"
  }
};

// All 27 Governorates of Egypt with Nearest Regional Blood Banks
const governoratesList = [
  { key: "cairo", ar: "القاهرة", en: "Cairo", centerAr: "المركز القومي لنقل الدم - العجوزة / بنك دم القصر العيني", centerEn: "National Blood Transfusion Center / Kasr Al-Ainy Blood Bank", dist: "1.5 km" },
  { key: "giza", ar: "الجيزة", en: "Giza", centerAr: "بنك الدم الإقليمي بالجيزة - مستشفى أم المصريين", centerEn: "Giza Regional Blood Bank - Om El Masryeen Hospital", dist: "2.0 km" },
  { key: "alex", ar: "الإسكندرية", en: "Alexandria", centerAr: "بنك الدم الإقليمي بكوم الدكة / مستشفى الجامعة", centerEn: "Kom El-Dikka Regional Blood Bank / Alexandria Univ. Hospital", dist: "1.7 km" },
  { key: "beheira", ar: "البحيرة (دمنهور / النوبارية)", en: "Beheira (Damanhour / Nubariya)", centerAr: "بنك الدم الإقليمي بدمنهور / مستشفى غرب النوبارية المركزي", centerEn: "Damanhour Regional Blood Bank / West Nubariya Central Hospital", dist: "1.9 km" },
  { key: "dakahlia", ar: "الدقهلية", en: "Dakahlia", centerAr: "بنك الدم الإقليمي بالمنصورة - مستشفى المنصورة الدولي", centerEn: "Mansoura Regional Blood Bank - Mansoura International Hospital", dist: "2.1 km" },
  { key: "sharqia", ar: "الشرقية", en: "Sharqia", centerAr: "بنك الدم الإقليمي بالزقازيق - مستشفيات جامعة الزقازيق", centerEn: "Zagazig Regional Blood Bank - Zagazig University Hospitals", dist: "2.3 km" },
  { key: "qalyubia", ar: "القليوبية", en: "Qalyubia", centerAr: "بنك الدم الإقليمي ببنها - مستشفى بنها التعليمي", centerEn: "Banha Regional Blood Bank - Banha Teaching Hospital", dist: "1.8 km" },
  { key: "gharbia", ar: "الغربية", en: "Gharbia", centerAr: "بنك الدم الإقليمي بطنطا - مستشفى طنطا الجامعي", centerEn: "Tanta Regional Blood Bank - Tanta University Hospital", dist: "1.6 km" },
  { key: "menoufia", ar: "المنوفية", en: "Menoufia", centerAr: "بنك الدم الإقليمي بشبين الكوم - مستشفى الجامعة", centerEn: "Shebin El-Kom Regional Blood Bank - University Hospital", dist: "2.2 km" },
  { key: "kafr_el_sheikh", ar: "كفر الشيخ", en: "Kafr El Sheikh", centerAr: "بنك الدم الإقليمي بكفر الشيخ - المستشفى العام", centerEn: "Kafr El Sheikh Regional Blood Bank - General Hospital", dist: "2.0 km" },
  { key: "damietta", ar: "دمياط", en: "Damietta", centerAr: "بنك الدم الإقليمي بدمياط - مستشفى دمياط التخصصي", centerEn: "Damietta Regional Blood Bank - Specialized Hospital", dist: "1.9 km" },
  { key: "port_said", ar: "بورسعيد", en: "Port Said", centerAr: "بنك الدم الإقليمي ببورسعيد - مستشفى السلام", centerEn: "Port Said Regional Blood Bank - Al-Salam Hospital", dist: "1.4 km" },
  { key: "ismailia", ar: "الإسماعيلية", en: "Ismailia", centerAr: "بنك الدم الإقليمي بالإسماعيلية - المجمع الطبي", centerEn: "Ismailia Regional Blood Bank - Medical Complex", dist: "1.8 km" },
  { key: "suez", ar: "السويس", en: "Suez", centerAr: "بنك الدم الإقليمي بالسويس - مستشفى السويس العام", centerEn: "Suez Regional Blood Bank - Suez General Hospital", dist: "2.1 km" },
  { key: "matrouh", ar: "مطروح", en: "Matrouh", centerAr: "بنك الدم بمستشفى مطروح العام", centerEn: "Marsa Matrouh General Hospital Blood Bank", dist: "2.5 km" },
  { key: "north_sinai", ar: "شمال سيناء", en: "North Sinai", centerAr: "بنك الدم بمستشفى العريش العام", centerEn: "Al-Arish General Hospital Blood Bank", dist: "2.4 km" },
  { key: "south_sinai", ar: "جنوب سيناء", en: "South Sinai", centerAr: "بنك الدم بمستشفى شرم الشيخ الدولي / الطور العام", centerEn: "Sharm El Sheikh International / El-Tor Hospital Blood Bank", dist: "2.7 km" },
  { key: "red_sea", ar: "البحر الأحمر", en: "Red Sea", centerAr: "بنك الدم الإقليمي بالغردقة - مستشفى الغردقة العام", centerEn: "Hurghada Regional Blood Bank - General Hospital", dist: "2.2 km" },
  { key: "fayoum", ar: "الفيوم", en: "Fayoum", centerAr: "بنك الدم الإقليمي بالفيوم - مستشفى الفيوم العام", centerEn: "Fayoum Regional Blood Bank - General Hospital", dist: "1.9 km" },
  { key: "beni_suef", ar: "بني سويف", en: "Beni Suef", centerAr: "بنك الدم الإقليمي ببني سويف - المستشفى التخصصي", centerEn: "Beni Suef Regional Blood Bank - Specialized Hospital", dist: "2.0 km" },
  { key: "minya", ar: "المنيا", en: "Minya", centerAr: "بنك الدم الإقليمي بالمنيا - مستشفى المنيا الجامعي", centerEn: "Minya Regional Blood Bank - University Hospital", dist: "2.1 km" },
  { key: "assiut", ar: "أسيوط", en: "Assiut", centerAr: "بنك الدم الإقليمي بأسيوط - مستشفيات جامعة أسيوط", centerEn: "Assiut Regional Blood Bank - Assiut University Hospitals", dist: "1.7 km" },
  { key: "sohag", ar: "سوهاج", en: "Sohag", centerAr: "بنك الدم الإقليمي بسوهاج - مستشفى سوهاج التعليمي", centerEn: "Sohag Regional Blood Bank - Teaching Hospital", dist: "2.3 km" },
  { key: "qena", ar: "قنا", en: "Qena", centerAr: "بنك الدم الإقليمي بقنا - مستشفى قنا العام", centerEn: "Qena Regional Blood Bank - General Hospital", dist: "2.0 km" },
  { key: "luxor", ar: "الأقصر", en: "Luxor", centerAr: "بنك الدم الإقليمي بالأقصر - مستشفى الكرنك الدولي", centerEn: "Luxor Regional Blood Bank - Karnak International Hospital", dist: "1.8 km" },
  { key: "aswan", ar: "أسوان", en: "Aswan", centerAr: "بنك الدم الإقليمي بأسوان - مستشفى أسوان الجامعي", centerEn: "Aswan Regional Blood Bank - University Hospital", dist: "1.9 km" },
  { key: "new_valley", ar: "الوادي الجديد", en: "New Valley", centerAr: "بنك الدم بمستشفى الخارجة التخصصي", centerEn: "El-Kharga Specialized Hospital Blood Bank", dist: "2.6 km" }
];

let currentLang = localStorage.getItem("bloodlink_lang") || "ar";
let currentTheme = localStorage.getItem("bloodlink_theme") || "dark";
let donationDestination = "person";
let isMotionPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let fundedBags = Number(localStorage.getItem("bloodlink_funded_bags")) || 148;

// Compatibility Matrix
const compatibilityMap = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"]
};

// Live Blood Stock Data
const bloodInventory = [
  { type: "O-", pct: 18 },
  { type: "O+", pct: 64 },
  { type: "A-", pct: 26 },
  { type: "A+", pct: 72 },
  { type: "B-", pct: 35 },
  { type: "B+", pct: 58 },
  { type: "AB-", pct: 15 },
  { type: "AB+", pct: 80 }
];

// Default Recipients in Need (persisted in localStorage)
const defaultRecipients = [
  {
    id: 1,
    nameAr: "سارة محمود",
    nameEn: "Sara Mahmoud",
    nationalId: "29904150201145",
    blood: "O-",
    cityKey: "alex",
    hospitalAr: "مستشفى جامعة الإسكندرية",
    hospitalEn: "Alexandria University Hospital",
    phone: "01012345678",
    urgency: "critical",
    units: 3,
    distKm: 1.8,
    x: 32,
    y: 28
  },
  {
    id: 2,
    nameAr: "كريم عبد الله",
    nameEn: "Kareem Abdallah",
    nationalId: "30108201802391",
    blood: "AB-",
    cityKey: "beheira",
    hospitalAr: "مستشفى دمنهور التعليمي",
    hospitalEn: "Damanhour Teaching Hospital",
    phone: "01122334455",
    urgency: "critical",
    units: 2,
    distKm: 3.2,
    x: 72,
    y: 36
  },
  {
    id: 3,
    nameAr: "يوسف حسن",
    nameEn: "Youssef Hassan",
    nationalId: "29711031204582",
    blood: "A+",
    cityKey: "dakahlia",
    hospitalAr: "مركز القلب والجهاز الهضمي بالمنصورة",
    hospitalEn: "Mansoura Heart & Digestive Center",
    phone: "01234567890",
    urgency: "moderate",
    units: 2,
    distKm: 2.5,
    x: 64,
    y: 72
  },
  {
    id: 4,
    nameAr: "منى السيد",
    nameEn: "Mona El-Sayed",
    nationalId: "29506180103219",
    blood: "B+",
    cityKey: "cairo",
    hospitalAr: "مستشفى القصر العيني",
    hospitalEn: "Kasr Al-Ainy Hospital",
    phone: "01555667788",
    urgency: "moderate",
    units: 4,
    distKm: 4.1,
    x: 26,
    y: 68
  },
  {
    id: 5,
    nameAr: "عمر طارق",
    nameEn: "Omar Tarek",
    nationalId: "30002142801974",
    blood: "O+",
    cityKey: "aswan",
    hospitalAr: "مستشفى أسوان الجامعي",
    hospitalEn: "Aswan University Hospital",
    phone: "01099887766",
    urgency: "critical",
    units: 3,
    distKm: 2.1,
    x: 48,
    y: 22
  }
];

let recipientsData = JSON.parse(localStorage.getItem("bloodlink_recipients_v5")) || defaultRecipients;

function saveRecipients() {
  localStorage.setItem("bloodlink_recipients_v5", JSON.stringify(recipientsData));
}

function maskNationalId(nid) {
  if (!nid || nid.length < 14) return "3010915•••1234";
  return `${nid.slice(0, 7)}•••${nid.slice(10)}`;
}

function formatBloodBadge(bloodVal) {
  if (bloodVal === "UNKNOWN") {
    return currentLang === "ar" ? "؟" : "?";
  }
  return bloodVal;
}

// Restrict National ID inputs to digits only (max 14)
["donorNationalId", "recNationalId"].forEach(id => {
  const input = document.getElementById(id);
  if (!input) return;
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 14);
  });
});

function getGovObj(govKey) {
  return governoratesList.find(g => g.key === govKey) || governoratesList[3];
}

function getGovName(govKey) {
  const found = getGovObj(govKey);
  return found ? found[currentLang] : govKey;
}

function populateGovSelects() {
  document.querySelectorAll(".city-select").forEach(select => {
    const prev = select.value;
    select.innerHTML = governoratesList
      .map(g => `<option value="${g.key}">${g[currentLang]}</option>`)
      .join("");
    if (prev && governoratesList.some(g => g.key === prev)) {
      select.value = prev;
    } else {
      select.value = "beheira";
    }
  });

  const radarCity = document.getElementById("radarCityFilter");
  const prevRadar = radarCity.value || "ALL";
  radarCity.innerHTML = `<option value="ALL">${i18n[currentLang].filterAllCities}</option>` +
    governoratesList.map(g => `<option value="${g.key}">${g[currentLang]}</option>`).join("");
  radarCity.value = prevRadar;
}

// Toast Notification
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3600);
}

// Render SOS Live Ticker
function renderTicker() {
  const ticker = document.getElementById("sosTicker");
  ticker.innerHTML = recipientsData.map(r => {
    const pName = currentLang === "ar" ? r.nameAr : (r.nameEn || r.nameAr);
    const hosp = currentLang === "ar" ? r.hospitalAr : (r.hospitalEn || r.hospitalAr);
    const gov = getGovName(r.cityKey);
    return currentLang === "ar"
      ? `<span>🩸 مطلوب فصيلة <strong>${r.blood}</strong> للحالة (${pName}) — ${hosp} [${gov}]</span>`
      : `<span>🩸 Urgent <strong>${r.blood}</strong> needed for (${pName}) — ${hosp} [${gov}]</span>`;
  }).join("");
}

// Compatibility Widget
function updateCompatibility(type) {
  const badgesContainer = document.getElementById("targetBadges");
  badgesContainer.innerHTML = compatibilityMap[type]
    .map(t => `<span>${t}</span>`)
    .join("");
}

document.querySelectorAll(".type-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".type-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateCompatibility(btn.dataset.type);
  });
});

// Live Blood Stock Drops
function renderStock() {
  const grid = document.getElementById("dropsGrid");
  grid.innerHTML = bloodInventory.map(item => {
    const isLow = item.pct <= 30;
    const statusText = isLow ? i18n[currentLang].lowStock : i18n[currentLang].okStock;
    return `
      <div class="drop-card ${isLow ? "critical" : ""}">
        <div class="vessel">
          <div class="vessel-fill" style="height: ${item.pct}%"></div>
          <span class="vessel-label">${item.type}</span>
        </div>
        <span class="stock-pct">${item.pct}%</span>
        <span class="stock-badge ${isLow ? "low" : "ok"}">${statusText}</span>
      </div>
    `;
  }).join("");
}

// Recipient Radar Blips & List
function renderRecipients() {
  const bloodFilter = document.getElementById("radarBloodFilter").value;
  const cityFilter = document.getElementById("radarCityFilter").value;
  const blipsBox = document.getElementById("radarBlipsContainer");
  const listBox = document.getElementById("recipientList");

  const filtered = recipientsData.filter(r => {
    const matchBlood = bloodFilter === "ALL" || r.blood === bloodFilter;
    const matchCity = cityFilter === "ALL" || r.cityKey === cityFilter;
    return matchBlood && matchCity;
  });

  blipsBox.innerHTML = filtered.map(r => {
    const pName = currentLang === "ar" ? r.nameAr : (r.nameEn || r.nameAr);
    const hosp = currentLang === "ar" ? r.hospitalAr : (r.hospitalEn || r.hospitalAr);
    return `
      <div class="radar-blip" style="left:${r.x}%; top:${r.y}%;" title="${pName} - ${hosp}">
        ${r.blood}
      </div>
    `;
  }).join("");

  if (filtered.length === 0) {
    listBox.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:14px;">${i18n[currentLang].noCasesInGov}</p>`;
    return;
  }

  listBox.innerHTML = filtered.map(r => {
    const pName = currentLang === "ar" ? r.nameAr : (r.nameEn || r.nameAr);
    const hosp = currentLang === "ar" ? r.hospitalAr : (r.hospitalEn || r.hospitalAr);
    const govLabel = getGovName(r.cityKey);
    const maskedId = maskNationalId(r.nationalId);
    const urgLabel = r.urgency === "critical"
      ? (currentLang === "ar" ? "حرج" : "Critical")
      : (currentLang === "ar" ? "متوسط" : "Moderate");

    return `
      <div class="rec-item">
        <div class="rec-item-info">
          <strong>
            🩸 ${r.blood} — ${pName} (${r.units} ${currentLang === "ar" ? "أكياس" : "units"})
            <span class="urg-pill ${r.urgency}">${urgLabel}</span>
          </strong>
          <small>📍 ${hosp} • ${govLabel} (${r.distKm} ${currentLang === "ar" ? "كم" : "km"})</small>
          <small>🪪 ${currentLang === "ar" ? "رقم قومي موثق:" : "Verified ID:"} <span dir="ltr">${maskedId}</span></small>
        </div>
        <div class="rec-actions">
          <a href="tel:${r.phone}" class="rec-call-btn">📞 ${i18n[currentLang].callBtn}</a>
          <button type="button" class="rec-respond-btn" data-name="${pName}" data-blood="${r.blood}">
            ${i18n[currentLang].respondBtn}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Event Delegation for Respond Buttons
document.getElementById("recipientList").addEventListener("click", e => {
  const btn = e.target.closest(".rec-respond-btn");
  if (!btn) return;
  const { name, blood } = btn.dataset;
  const msg = currentLang === "ar"
    ? `تم إرسال إشعار جاهزيتك للتبرع بفصيلة (${blood}) للحالة: ${name}`
    : `Your readiness to donate (${blood}) has been sent for patient: ${name}`;
  showToast(msg);
});

document.getElementById("radarBloodFilter").addEventListener("change", renderRecipients);
document.getElementById("radarCityFilter").addEventListener("change", renderRecipients);

// Donation Destination Selector (Person vs Hospital)
document.querySelectorAll(".target-option").forEach(opt => {
  opt.addEventListener("click", () => {
    document.querySelectorAll(".target-option").forEach(o => o.classList.remove("active"));
    opt.classList.add("active");
    donationDestination = opt.dataset.target;

    const detailLabel = document.getElementById("targetDetailLabel");
    const detailInput = document.getElementById("targetDetailInput");
    const badge = document.getElementById("cardTargetBadge");

    if (donationDestination === "person") {
      detailLabel.textContent = i18n[currentLang].labelPersonCode;
      detailInput.placeholder = currentLang === "ar" ? "مثال: حالة طوارئ #104" : "e.g. Case #104";
      badge.textContent = currentLang === "ar" ? "تبرع لشخص" : "To Person";
    } else {
      detailLabel.textContent = i18n[currentLang].labelHospitalName;
      detailInput.placeholder = currentLang === "ar" ? "مثال: مستشفى دمنهور التعليمي" : "e.g. Damanhour Teaching Hospital";
      badge.textContent = currentLang === "ar" ? "تبرع لمستشفى" : "To Hospital";
    }
  });
});

// GPS Auto-Fill for Current Location
document.getElementById("detectGpsBtn").addEventListener("click", () => {
  const locInput = document.getElementById("donorLocation");
  const govName = getGovName(document.getElementById("donorCity").value);

  if (!navigator.geolocation) {
    locInput.value = currentLang === "ar" ? `${govName} - وسط المدينة` : `${govName} - City Center`;
    showToast(currentLang === "ar" ? "تم تعيين الموقع التقريبي بنجاح" : "Approximate location set");
    return;
  }

  showToast(currentLang === "ar" ? "جاري تحديد موقعك الحالي..." : "Detecting your current location...");
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude.toFixed(4);
      const lng = pos.coords.longitude.toFixed(4);
      locInput.value = currentLang === "ar"
        ? `${govName} (إحداثيات GPS: ${lat}, ${lng})`
        : `${govName} (GPS: ${lat}, ${lng})`;
      showToast(currentLang === "ar" ? "تم تحديد إحداثيات موقعك الحالي بدقة!" : "Current GPS coordinates detected!");
    },
    () => {
      locInput.value = currentLang === "ar" ? `${govName} - أقرب نقطة مركزية` : `${govName} - Central District`;
      showToast(currentLang === "ar" ? "تم تعبئة المنطقة بناءً على المحافظة المختارة" : "Location filled from selected governorate");
    },
    { timeout: 6000 }
  );
});

// Show Post-Registration Guidance (Unknown Blood Reminder + Nearest Donation Center)
function updateDonorGuidance(blood, cityKey, userLocation, customHospital) {
  const guidanceBox = document.getElementById("donorGuidanceBox");
  const unknownAlert = document.getElementById("unknownBloodAlert");
  const govObj = getGovObj(cityKey);

  guidanceBox.classList.remove("hidden");

  if (blood === "UNKNOWN") {
    unknownAlert.classList.remove("hidden");
  } else {
    unknownAlert.classList.add("hidden");
  }

  const centerTitle = (donationDestination === "hospital" && customHospital)
    ? customHospital
    : (currentLang === "ar" ? govObj.centerAr : govObj.centerEn);

  document.getElementById("nearestCenterName").textContent = centerTitle;
  document.getElementById("nearestCenterDist").textContent = `~ ${govObj.dist}`;
  document.getElementById("nearestCenterAddr").textContent = currentLang === "ar"
    ? `📍 بناءً على موقعك الحالي: (${userLocation}) — محافظة ${govObj.ar}`
    : `📍 Based on your current location: (${userLocation}) — ${govObj.en} Governorate`;
  document.getElementById("nearestCenterHours").textContent = currentLang === "ar"
    ? "🕒 مواعيد العمل: 24 ساعة (بنك دم وطوارئ)"
    : "🕒 Working Hours: 24/7 (Blood Bank & Emergency)";

  const mapQuery = encodeURIComponent(`${centerTitle} ${govObj[currentLang]}`);
  document.getElementById("nearestCenterMapLink").href = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
}

// Smart Eligibility & 90-Day Countdown Calculator
function evaluateEligibility() {
  const ageWeightOk = document.getElementById("chkAgeWeight").checked;
  const healthOk = document.getElementById("chkHealth").checked;
  const lastDateVal = document.getElementById("lastDonationDate").value;
  const status = document.getElementById("eligStatus");

  if (!ageWeightOk || !healthOk) {
    status.className = "elig-status not-ready";
    status.textContent = i18n[currentLang].eligNotReady;
    return;
  }

  if (lastDateVal) {
    const lastDate = new Date(lastDateVal);
    const today = new Date();
    const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    if (diffDays < 90 && diffDays >= 0) {
      const remaining = 90 - diffDays;
      status.className = "elig-status not-ready";
      status.textContent = currentLang === "ar"
        ? `⏳ متبقي ${remaining} يوماً حتى تتمكن من التبرع بأمان (فترة الـ 90 يوم)`
        : `⏳ ${remaining} days remaining until your next safe donation (90-day rule)`;
      return;
    }
  }

  status.className = "elig-status ready";
  status.textContent = i18n[currentLang].eligReady;
}

document.getElementById("chkAgeWeight").addEventListener("change", evaluateEligibility);
document.getElementById("chkHealth").addEventListener("change", evaluateEligibility);
document.getElementById("lastDonationDate").addEventListener("change", evaluateEligibility);

// Load Saved Donor Profile from localStorage
function loadSavedDonorCard() {
  const saved = JSON.parse(localStorage.getItem("bloodlink_donor_card_v5"));
  if (!saved) {
    document.getElementById("cardCityDisplay").textContent =
      currentLang === "ar" ? `${getGovName("beheira")} • متاح الآن` : `${getGovName("beheira")} • Available Now`;
    document.getElementById("cardBloodDisplay").textContent = formatBloodBadge("UNKNOWN");
    return;
  }
  document.getElementById("donorName").value = saved.name;
  document.getElementById("donorNationalId").value = saved.nationalId || "";
  document.getElementById("donorBlood").value = saved.blood || "UNKNOWN";
  document.getElementById("donorCity").value = saved.cityKey;
  document.getElementById("donorLocation").value = saved.location || "";
  document.getElementById("targetDetailInput").value = saved.detail || "";

  document.getElementById("cardNameDisplay").textContent = saved.name;
  document.getElementById("cardBloodDisplay").textContent = formatBloodBadge(saved.blood);
  document.getElementById("cardCityDisplay").textContent =
    currentLang === "ar" ? `${getGovName(saved.cityKey)} • متاح الآن` : `${getGovName(saved.cityKey)} • Available Now`;
  document.getElementById("cardNidDisplay").textContent = `ID: ${maskNationalId(saved.nationalId)}`;
  document.getElementById("cardLocDisplay").textContent = currentLang === "ar"
    ? `📍 الموقع: ${saved.location || getGovName(saved.cityKey)}`
    : `📍 Location: ${saved.location || getGovName(saved.cityKey)}`;
  document.getElementById("cardDetailDisplay").textContent =
    saved.detail || (currentLang === "ar" ? "جاهز للاستجابة الفورية" : "Ready for instant response");

  if (saved.location) {
    updateDonorGuidance(saved.blood, saved.cityKey, saved.location, saved.detail);
  }
}

// Donor Form Submission -> Updates Card + Shows Unknown Blood Reminder & Nearest Center
document.getElementById("donorForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("donorName").value.trim() || "أحمد محمد";
  const nationalId = document.getElementById("donorNationalId").value.trim();
  const blood = document.getElementById("donorBlood").value;
  const cityKey = document.getElementById("donorCity").value;
  const location = document.getElementById("donorLocation").value.trim() || getGovName(cityKey);
  const detail = document.getElementById("targetDetailInput").value.trim();

  if (!/^\d{14}$/.test(nationalId)) {
    showToast(i18n[currentLang].invalidNid);
    return;
  }

  localStorage.setItem("bloodlink_donor_card_v5", JSON.stringify({
    name,
    nationalId,
    blood,
    cityKey,
    location,
    detail,
    destination: donationDestination
  }));

  document.getElementById("cardNameDisplay").textContent = name;
  document.getElementById("cardBloodDisplay").textContent = formatBloodBadge(blood);
  document.getElementById("cardCityDisplay").textContent =
    currentLang === "ar" ? `${getGovName(cityKey)} • متاح الآن` : `${getGovName(cityKey)} • Available Now`;
  document.getElementById("cardNidDisplay").textContent = `ID: ${maskNationalId(nationalId)}`;
  document.getElementById("cardLocDisplay").textContent = currentLang === "ar"
    ? `📍 الموقع: ${location}`
    : `📍 Location: ${location}`;

  const destLabel = donationDestination === "person"
    ? (currentLang === "ar" ? "تبرع لشخص" : "To Person")
    : (currentLang === "ar" ? "تبرع لمستشفى" : "To Hospital");

  document.getElementById("cardTargetBadge").textContent = destLabel;
  document.getElementById("cardDetailDisplay").textContent =
    detail || (currentLang === "ar" ? "جاهز للاستجابة الفورية" : "Ready for instant response");

  updateDonorGuidance(blood, cityKey, location, detail);

  const toastMsg = blood === "UNKNOWN"
    ? (currentLang === "ar"
        ? "تم التسجيل! تم تحديد أقرب مركز وتنبيهك بمعرفة فصيلتك عند التبرع"
        : "Registered! Nearest center located & blood-type reminder activated")
    : (currentLang === "ar"
        ? "تم التسجيل وتحديد أقرب مركز تبرع بالدم لموقعك!"
        : "Registered & nearest blood donation center located!");
  showToast(toastMsg);
});

// Download Digital Hero Card as PNG
document.getElementById("downloadCardBtn").addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = 820;
  canvas.height = 510;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 820, 510);
  grad.addColorStop(0, "#2b060e");
  grad.addColorStop(0.55, "#6b0a1d");
  grad.addColorStop(1, "#190307");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(0, 0, 820, 510, 36);
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 90, 120, 0.6)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "bold 22px sans-serif";
  ctx.fillText("BLOOD LINK HERO PASS", 48, 64);

  ctx.fillStyle = "#ff1e42";
  ctx.beginPath();
  ctx.arc(125, 240, 68, 0, Math.PI * 2);
  ctx.fill();

  const bloodVal = document.getElementById("cardBloodDisplay").textContent;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 46px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(bloodVal, 125, 256);

  ctx.textAlign = "left";
  const donorName = document.getElementById("cardNameDisplay").textContent;
  const donorCity = document.getElementById("cardCityDisplay").textContent;
  const donorNid = document.getElementById("cardNidDisplay").textContent;
  const donorLoc = document.getElementById("cardLocDisplay").textContent;
  const donorSub = document.getElementById("cardDetailDisplay").textContent;

  ctx.font = "bold 36px sans-serif";
  ctx.fillText(donorName, 230, 185);

  ctx.fillStyle = "#ffd6de";
  ctx.font = "21px sans-serif";
  ctx.fillText(donorCity, 230, 226);

  ctx.fillStyle = "#ffb3c1";
  ctx.font = "bold 19px sans-serif";
  ctx.fillText(donorNid, 230, 262);

  ctx.fillStyle = "#ffc2cd";
  ctx.font = "19px sans-serif";
  ctx.fillText(donorLoc, 230, 298);

  ctx.fillStyle = "#ff9eb0";
  ctx.font = "18px sans-serif";
  ctx.fillText(donorSub, 230, 332);

  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("Blood Link • Developed by Team VOID", 48, 455);

  const link = document.createElement("a");
  link.download = `BloodLink-Hero-${bloodVal}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();

  showToast(currentLang === "ar" ? "تم تحميل بطاقة المتبرع بنجاح!" : "Hero Card PNG downloaded!");
});

// Financial Donation Presets & Submission
document.querySelectorAll(".amount-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".amount-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("finAmountInput").value = btn.dataset.amount;
  });
});

function renderFundedBags() {
  document.getElementById("fundedBagsCount").textContent = fundedBags;
  const pct = Math.min(100, Math.round((fundedBags / 200) * 100));
  document.getElementById("finProgressFill").style.width = `${pct}%`;
}

document.getElementById("financialForm").addEventListener("submit", e => {
  e.preventDefault();
  const donorName = document.getElementById("finDonorName").value.trim() || "فاعل خير";
  const amount = Math.max(20, Number(document.getElementById("finAmountInput").value) || 350);
  const govName = getGovName(document.getElementById("finGovSelect").value);

  const bagsAdded = Math.max(1, Math.round(amount / 350));
  fundedBags += bagsAdded;
  localStorage.setItem("bloodlink_funded_bags", String(fundedBags));
  renderFundedBags();

  const receiptBox = document.getElementById("finReceiptBox");
  const receiptText = document.getElementById("finReceiptText");
  receiptBox.classList.remove("hidden");

  receiptText.textContent = currentLang === "ar"
    ? `تم تسجيل مساهمة (${donorName}) بمبلغ ${amount} ج.م لتوفير كيس دم وفحوصات التوافق للحالات المحتاجة في محافظة ${govName}. رقم الإيصال: #BL-${Math.floor(100000 + Math.random() * 900000)}`
    : `Recorded contribution by (${donorName}) of ${amount} EGP to provide blood bags and compatibility tests in ${govName}. Receipt ID: #BL-${Math.floor(100000 + Math.random() * 900000)}`;

  showToast(currentLang === "ar"
    ? `جزاك الله خيراً! مساهمتك (${amount} ج.م) ستوفر كيس دم لمريض محتاج`
    : `Thank you! Your ${amount} EGP contribution helps provide a life-saving blood bag`);
});

// Recipient SOS Form Submission
document.getElementById("recipientForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("recPatientName").value.trim();
  const nationalId = document.getElementById("recNationalId").value.trim();
  const blood = document.getElementById("recBloodType").value;
  const cityKey = document.getElementById("recCity").value;
  const phone = document.getElementById("recPhone").value.trim();
  const urgency = document.getElementById("recUrgency").value;
  const hospital = document.getElementById("recHospital").value.trim();
  const units = Number(document.getElementById("recUnits").value);

  if (!/^\d{14}$/.test(nationalId)) {
    showToast(i18n[currentLang].invalidNid);
    return;
  }

  recipientsData.unshift({
    id: Date.now(),
    nameAr: name,
    nameEn: name,
    nationalId,
    blood,
    cityKey,
    hospitalAr: hospital,
    hospitalEn: hospital,
    phone,
    urgency,
    units,
    distKm: 0.9,
    x: Math.floor(25 + Math.random() * 50),
    y: Math.floor(25 + Math.random() * 50)
  });

  saveRecipients();
  renderTicker();
  renderRecipients();
  e.target.reset();
  showToast(currentLang === "ar" ? "تم إطلاق نداء الاستغاثة وحفظه في الرادار!" : "SOS Request broadcasted & saved!");
});

// 3D Card Tilt Effect (Desktop Mouse + Mobile Touch)
const heroCard = document.getElementById("heroIdCard");

function applyCardTilt(clientX, clientY) {
  const rect = heroCard.getBoundingClientRect();
  const x = (clientX - rect.left) / rect.width - 0.5;
  const y = (clientY - rect.top) / rect.height - 0.5;
  heroCard.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
}

heroCard.addEventListener("mousemove", e => applyCardTilt(e.clientX, e.clientY));
heroCard.addEventListener("mouseleave", () => {
  heroCard.style.transform = "rotateY(0deg) rotateX(0deg)";
});

heroCard.addEventListener("touchmove", e => {
  if (e.touches.length > 0) {
    applyCardTilt(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });

heroCard.addEventListener("touchend", () => {
  heroCard.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const dropBody = document.querySelector("#themeIcon .drop-body");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  dropBody.setAttribute("fill", theme === "dark" ? "#ff1e42" : "#f59e0b");
  localStorage.setItem("bloodlink_theme", theme);
}

applyTheme(currentTheme);

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
});

// Language Toggle (AR <-> EN)
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("bloodlink_lang", lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "عربي";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  populateGovSelects();
  loadSavedDonorCard();
  evaluateEligibility();
  renderFundedBags();
  renderTicker();
  renderStock();
  renderRecipients();
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

// Mobile Menu
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Motion Toggle (Accessibility)
const motionBtn = document.getElementById("motionToggle");
motionBtn.textContent = isMotionPaused ? "▶" : "⏸";
motionBtn.addEventListener("click", () => {
  isMotionPaused = !isMotionPaused;
  motionBtn.textContent = isMotionPaused ? "▶" : "⏸";
});

// Full-Page 3D Interactive Vein & Erythrocytes Flow Animation (Three.js)
function initArtery3D() {
  const canvas = document.getElementById("arteryCanvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 26;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ambientLight = new THREE.AmbientLight(0xff3355, 1.15);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xff1e42, 3.0, 110);
  pointLight1.position.set(-8, 8, 20);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x9e001c, 2.2, 100);
  pointLight2.position.set(14, -10, 14);
  scene.add(pointLight2);

  // Main Vein Vessel (Translucent Organic Wall + Glowing Vein Network)
  const mainCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-38, -12, -8),
    new THREE.Vector3(-16, 6, -2),
    new THREE.Vector3(6, -5, 3),
    new THREE.Vector3(24, 7, -1),
    new THREE.Vector3(40, -6, -7)
  ]);

  const veinWallGeo = new THREE.TubeGeometry(mainCurve, 110, 8.2, 32, false);
  const veinWallMat = new THREE.MeshPhongMaterial({
    color: 0x690013,
    emissive: 0x2a0007,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide
  });
  const veinWallMesh = new THREE.Mesh(veinWallGeo, veinWallMat);
  scene.add(veinWallMesh);

  const veinWireMat = new THREE.MeshBasicMaterial({
    color: 0xff2a4b,
    transparent: true,
    opacity: 0.14,
    wireframe: true
  });
  const veinWireMesh = new THREE.Mesh(veinWallGeo, veinWireMat);
  scene.add(veinWireMesh);

  // Secondary Branching Vein for Depth
  const branchCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-30, 14, -14),
    new THREE.Vector3(-8, -8, -9),
    new THREE.Vector3(16, 12, -11),
    new THREE.Vector3(36, -12, -15)
  ]);
  const branchGeo = new THREE.TubeGeometry(branchCurve, 80, 4.4, 20, false);
  const branchMesh = new THREE.Mesh(branchGeo, veinWireMat);
  scene.add(branchMesh);

  // Biconcave-like Red Blood Cells (Erythrocytes) + Plasma Particles
  const cellGeo = new THREE.TorusGeometry(0.92, 0.44, 16, 30);
  const cellMat = new THREE.MeshStandardMaterial({
    color: 0xe6052c,
    emissive: 0x6b0012,
    roughness: 0.3,
    metalness: 0.18
  });

  const plasmaGeo = new THREE.SphereGeometry(0.18, 8, 8);
  const plasmaMat = new THREE.MeshBasicMaterial({
    color: 0xff99aa,
    transparent: true,
    opacity: 0.55
  });

  const cells = [];
  for (let i = 0; i < 85; i++) {
    const isMain = i < 65;
    const mesh = new THREE.Mesh(cellGeo, cellMat);
    const scale = isMain ? (0.75 + Math.random() * 0.55) : (0.45 + Math.random() * 0.3);
    mesh.scale.set(scale, scale, scale * 0.85);
    const spread = isMain ? 9.5 : 5.0;
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    scene.add(mesh);
    cells.push({
      mesh,
      curve: isMain ? mainCurve : branchCurve,
      progress: Math.random(),
      speed: 0.001 + Math.random() * 0.0019,
      offset,
      rotSpeed: (Math.random() - 0.5) * 0.032
    });
  }

  const plasmaParticles = [];
  for (let i = 0; i < 45; i++) {
    const pMesh = new THREE.Mesh(plasmaGeo, plasmaMat);
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 11,
      (Math.random() - 0.5) * 11,
      (Math.random() - 0.5) * 11
    );
    scene.add(pMesh);
    plasmaParticles.push({
      mesh: pMesh,
      progress: Math.random(),
      speed: 0.0018 + Math.random() * 0.0024,
      offset
    });
  }

  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;

  window.addEventListener("mousemove", e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 4.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 4.5;
  });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY * 0.0025;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);

    if (!isMotionPaused) {
      clock += 0.032;
      // Heartbeat pulse expansion of the vein walls
      const pulse = 1 + Math.pow(Math.sin(clock * 2.1), 2) * 0.045;
      veinWallMesh.scale.set(1, pulse, pulse);
      veinWireMesh.scale.set(1, pulse, pulse);

      cells.forEach(c => {
        c.progress += c.speed;
        if (c.progress > 1) c.progress = 0;
        const pos = c.curve.getPointAt(c.progress);
        c.mesh.position.copy(pos).add(c.offset);
        c.mesh.rotation.x += c.rotSpeed;
        c.mesh.rotation.y += c.rotSpeed;
      });

      plasmaParticles.forEach(p => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        const pos = mainCurve.getPointAt(p.progress);
        p.mesh.position.copy(pos).add(p.offset);
      });
    }

    camera.position.x += (mouseX - camera.position.x) * 0.04;
    camera.position.y += (-mouseY - scrollY - camera.position.y) * 0.04;
    camera.lookAt(0, -scrollY * 0.6, 0);

    renderer.render(scene, camera);
  }

  animate();
}

// Initialize Everything
updateCompatibility("O-");
applyLanguage(currentLang);
initArtery3D();
