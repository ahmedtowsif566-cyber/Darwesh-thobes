// Basic shared JS for EN/AR text swap, small helpers (used on all pages)

// Put your contact email and location here (already set)
const SITE_EMAIL = "ahmedtowsif566@gmail.com";
const SITE_PHONE = "+1 (New York)";
const SITE_LOCATION = "New York, USA";

// Content translations (only the keys we used)
const content = {
  en: {
    brandName: "Darwish Thobes",
    brandTag: "Traditional • Luxurious • Tailored",
    heroTop: "Established 2025 • Hand-finished",
    heroTitle: "Welcome to Darwish Thobe — where tradition meets modern luxury.",
    heroDesc: "Premium fabrics, custom tailoring and timeless designs inspired by tradition and refined for modern elegance.",
    shopCta: "Shop Collection",
    inquireCta: "Request Custom Order",
    homeExtra: "We also accept bespoke orders and bulk tailoring for events or retailers.",
    featuredTitle: "Featured Collection",
    p1Title: "Classic White Thobe",
    p1Desc: "Clean cut, premium cotton blend. Perfect for formal and everyday wear.",
    p1Price: "$75",
    p2Title: "Tailored Elegance",
    p2Desc: "Slim profile with reinforced seams. Available in multiple sizes.",
    p2Price: "$95",
    aboutTitle: "Our Story",
    aboutText: "Darwesh Thobes is a family-run house blending craftsman tailoring with modern finishing. We source high-quality fabrics and tailor each piece to meet our customers' preferences.",
    aboutExtra: "We offer custom sizing, fabric selection and fast shipping worldwide.",
    qualityTitle: "Premium Quality",
    qualityText: "Carefully selected fabrics — stitched to last.",
    tailorTitle: "Custom Tailoring",
    tailorText: "Personal measurements and finishings to suit your style.",
    supportTitle: "Dedicated Support",
    supportText: "Fast replies, order tracking and aftercare advice.",
    shopTitle: "Shop",
    shopIntro: "Browse our ready-to-ship and bespoke pieces. Click a product to see details or request measurements.",
    contactTitle: "Contact Us",
    contactText: "Send inquiries, custom requests or bulk orders.",
    visitTitle: "Visit / Orders",
    visitText: "We accept studio visits by appointment. For custom orders, please contact us to schedule measurements.",
    footerText: "© " + new Date().getFullYear() + " Darwesh Thobe — All rights reserved."
  },
  ar: {
    brandName: "دارويش ثوب",
    brandTag: "تقليدي • فاخر • مفصل",
    heroTop: "تأسّس 2025 • إنهاء يدوي",
    heroTitle: "مرحبًا بكم في دارويش ثوب — حيث يلتقي التراث بالفخامة الحديثة.",
    heroDesc: "أقمشة عالية الجودة، خياطة حسب الطلب وتصاميم تجمع بين التراث والأناقة الحديثة.",
    shopCta: "تسوّق المجموعة",
    inquireCta: "اطلب ثوبًا مخصّصًا",
    homeExtra: "نقدّم خدمات تفصيل حسب الطلب وطلبات الجملة للمناسبات والتجار.",
    featuredTitle: "المجموعة المميزة",
    p1Title: "ثوب أبيض كلاسيكي",
    p1Desc: "قصة نظيفة، قماش قطني فخم. مثالي للمناسبات والاستخدام اليومي.",
    p1Price: "$75",
    p2Title: "أناقة مفصّلة",
    p2Desc: "قَصّة رفيعة مع درزات معزّزة. متوفّر بمقاسات مختلفة.",
    p2Price: "$95",
    aboutTitle: "قِصّتنا",
    aboutText: "دارويش ثوب دار عائلي يجمع بين مهارة الخياطين والتشطيبات الحديثة. نختار أقمشة عالية الجودة ونفصّل كل قطعة بحسب رغبات العملاء.",
    aboutExtra: "نوفّر خدمات القياس الخاص، اختيار القماش، وشحن سريع حول العالم.",
    qualityTitle: "جودة فائقة",
    qualityText: "أقمشة مختارة بعناية — وخياطة تدوم.",
    tailorTitle: "تفصيل حسب القياس",
    tailorText: "قياسات شخصية وتشطيبات تتناسب مع أسلوبك.",
    supportTitle: "دعم مخصّص",
    supportText: "ردود سريعة، تتبّع الطلبات ونصائح للعناية.",
    shopTitle: "المتجر",
    shopIntro: "تصفّح قطعنا الجاهزة والمصمّمة حسب الطلب. اضغط على المنتج لعرض التفاصيل أو لطلب القياسات.",
    contactTitle: "تواصل معنا",
    contactText: "أرسل استفساراتك أو طلبات التفصيل أو طلبات الجملة.",
    visitTitle: "الزيارة / الطلبات",
    visitText: "نستقبل زيارات الاستوديو بالمواعيد. لطلبات التفصيل، تواصل معنا لتحديد موعد القياسات.",
    footerText: "© " + new Date().getFullYear() + " دارويش ثوب — جميع الحقوق محفوظة."
  }
};

// Apply language to the page (swaps text by ids and data-key attributes)
function applyLanguage(lang = 'en') {
  const keys = content[lang] || content.en;

  // set HTML dir and lang
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }

  // elements with simple ids used across pages
  const idMap = [
    'brandName','brandTag','heroTop','heroTitle','heroDesc','shopCta','inquireCta','homeExtra',
    'featuredTitle','p1Title','p1Desc','p1Price','p2Title','p2Desc','p2Price',
    'aboutTitle','aboutText','aboutExtra','qualityTitle','qualityText','tailorTitle','tailorText',
    'supportTitle','supportText','shopTitle','shopIntro','contactTitle','contactText','visitTitle','visitText'
  ];

  idMap.forEach(id=>{
    const el = document.getElementById(id);
    if (el && keys[id] !== undefined) el.textContent = keys[id];
  });

  // elements with data-key attributes
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    if (keys[key] !== undefined) el.textContent = keys[key];
  });

  // footer
  document.querySelectorAll('#footerText, #footerTextAbout, #footerTextShop, #footerTextContact').forEach(f=>{
    if (f) f.textContent = keys.footerText;
  });

  // update any visible year counters
  document.querySelectorAll('#year,#yearA,#yearS,#yearC').forEach(y => {
    if(y) y.textContent = new Date().getFullYear();
  });

  // update mailto link text if present
  const mailto = document.getElementById('mailtoLink');
  if (mailto) mailto.href = "mailto:" + SITE_EMAIL;

  // small alignment tweak for card blocks
  document.querySelectorAll('.hero-card, .card, .form-card').forEach(c=>{
    c.style.textAlign = (lang === 'ar') ? 'right' : 'left';
  });

  // set active state for language buttons on the page
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase().startsWith(lang));
  });

  // save current language
  localStorage.setItem('site_lang', lang);
}

// Initialize language on load using saved value or default 'en'
document.addEventListener('DOMContentLoaded', function(){
  const saved = localStorage.getItem('site_lang') || 'en';
  applyLanguage(saved);

  // attach language buttons (each page has its own button ids)
  document.querySelectorAll('.lang-switch').forEach(switcher=>{
    const enBtn = switcher.querySelector('.lang-btn:first-child');
    const arBtn = switcher.querySelector('.lang-btn:last-child');
    if(enBtn) enBtn.onclick = ()=>applyLanguage('en');
    if(arBtn) arBtn.onclick = ()=>applyLanguage('ar');
  });

  // prefill contact fields if query param present (used by prefillSubject)
  const params = new URLSearchParams(window.location.search);
  const pre = params.get('prefill');
  if (pre) {
    const subjEl = document.getElementById('subject');
    if (subjEl) subjEl.value = decodeURIComponent(pre);
  }

  // fill quick contact info
  const phoneEl = document.getElementById('phone');
  if (phoneEl) phoneEl.textContent = SITE_PHONE;
  const addressEl = document.getElementById('address');
  if (addressEl) addressEl.textContent = SITE_LOCATION;
  const mailEl = document.getElementById('mailtoLink');
  if (mailEl) mailEl.href = "mailto:" + SITE_EMAIL;
});

// Prefill subject and navigate to contact page by opening contact.html with query param
function prefillSubject(productId) {
  const titleKey = productId === 1 ? 'p1Title' : 'p2Title';
  const lang = localStorage.getItem('site_lang') || 'en';
  const title = content[lang][titleKey] || content.en[titleKey];
  const prefix = (lang === 'ar') ? 'استفسار عن: ' : 'Inquiry about: ';
  // open contact page and pass subject via query param so contact page can pick it up
  const subjectText = encodeURIComponent(prefix + title);
  window.location.href = 'contact.html?prefill=' + subjectText;
}

// Contact form submit (uses mailto fallback)
function submitForm() {
  const name = document.getElementById('name')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  const subject = document.getElementById('subject')?.value?.trim() || 'Website inquiry';
  const message = document.getElementById('message')?.value?.trim();

  if (!name || !email || !message) {
    const lang = localStorage.getItem('site_lang') || 'en';
    alert(lang === 'ar' ? 'يرجى ملء الاسم والبريد والرسالة.' : 'Please fill name, email and message.');
    return;
  }

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}
