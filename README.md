<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Darwesh Thobes — دارويش ثوب</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

  <!-- Suggested image filenames:
       - logo.png           (your first image - logo)
       - thobe1.jpg         (portrait photo 1)
       - thobe2.jpg         (portrait photo 2)
       - hero.jpg           (large hero image) optional
     Place these files in same folder as index.html or update the paths below.
  -->

  <style>
    :root{
      --bg:#f6f2ef;
      --card:#fff;
      --accent:#b98f2b; /* luxurious gold */
      --muted:#78706a;
      --dark:#0f0f10;
      --maxw:1100px;
      --radius:14px;
      --glass: rgba(255,255,255,0.65);
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font-family:Roboto,system-ui,Segoe UI,Arial;
      background:linear-gradient(180deg,#fbf8f6 0%, #f0eae2 100%);
      color:var(--dark);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    /* Container */
    .site{max-width:var(--maxw); margin:24px auto; padding:28px;}

    /* Header */
    header{display:flex; align-items:center; justify-content:space-between; gap:18px; margin-bottom:28px;}
    .brand{display:flex; align-items:center; gap:16px;}
    .brand img{height:64px; border-radius:10px; box-shadow:0 6px 18px rgba(0,0,0,0.12);}
    .brand h1{font-family: 'Playfair Display', serif; font-size:20px; margin:0;}
    .brand p{margin:0; font-size:12px; color:var(--muted)}

    nav{display:flex; gap:12px; align-items:center;}
    .nav-link{background:transparent; border:none; font-weight:500; padding:8px 12px; cursor:pointer; border-radius:10px;}
    .nav-link:hover{background:rgba(0,0,0,0.04)}
    .cta{background:var(--accent); color:white; padding:10px 14px; border-radius:10px; border:none; font-weight:600; box-shadow: 0 6px 20px rgba(185,143,43,0.2); cursor:pointer;}
    .lang-switch{display:flex; gap:6px; align-items:center; background:var(--glass); padding:6px; border-radius:12px;}
    .lang-btn{border:0; background:transparent; padding:6px 8px; cursor:pointer; font-weight:600;}
    .lang-btn.active{background:#00000008; border-radius:8px;}

    /* Hero */
    .hero{display:grid; grid-template-columns: 1fr 420px; gap:28px; align-items:center; margin-bottom:32px;}
    .hero-card{background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75)); border-radius:var(--radius); padding:28px; box-shadow:0 12px 40px rgba(15,15,16,0.06);}
    .headline{font-family:'Playfair Display',serif; font-size:34px; margin:8px 0 12px;}
    .sub{color:var(--muted); font-size:15px; line-height:1.6}
    .hero-cta{margin-top:18px; display:flex; gap:12px; align-items:center}

    .hero-img{border-radius:14px; overflow:hidden; box-shadow:0 12px 40px rgba(15,15,16,0.08); background:#eee}
    .hero-img img{width:100%; height:100%; object-fit:cover; display:block}

    /* Sections */
    section{margin-bottom:28px}
    .grid{display:grid; gap:18px;}
    .products{grid-template-columns: repeat(auto-fit,minmax(220px,1fr));}
    .card{background:var(--card); border-radius:12px; overflow:hidden; box-shadow:0 8px 30px rgba(15,15,16,0.05); padding:12px; display:flex; flex-direction:column; gap:10px}
    .product-media{height:260px; border-radius:10px; overflow:hidden; background:#f4f4f4}
    .product-media img{width:100%;height:100%;object-fit:cover;display:block}
    .product-title{font-family:'Playfair Display',serif; font-size:16px; margin:0}
    .product-desc{color:var(--muted); font-size:13px; margin:0 0 6px}
    .price{font-weight:700; color:var(--accent); font-size:16px}

    /* Contact */
    .contact{display:grid; grid-template-columns:1fr 360px; gap:18px; align-items:start;}
    .form{background:linear-gradient(180deg,#fff,#fbfbfb); padding:18px; border-radius:12px}
    .form input,.form textarea{width:100%; padding:10px; border-radius:8px; border:1px solid #e6e2de; margin-bottom:10px}
    .form button{background:var(--dark); color:white; padding:10px 14px; border-radius:8px; border:0; cursor:pointer}

    /* Footer */
    footer{margin-top:28px; text-align:center; color:var(--muted); font-size:13px; padding:18px 8px;}

    /* Responsive */
    @media (max-width:980px){
      .hero{grid-template-columns:1fr; }
      .contact{grid-template-columns:1fr}
    }

    /* Small finesse for Arabic direction */
    [dir="rtl"] .brand h1{font-size:20px}
  </style>
</head>
<body>
  <div class="site" id="site">

    <!-- HEADER -->
    <header>
      <div class="brand">
        <img src="logo.png" alt="Brand logo" id="logoImg" />
        <div>
          <h1 id="brandName">Darwesh Thobes</h1>
          <p id="brandTag">Traditional • Luxurious • Tailored</p>
        </div>
      </div>

      <nav>
        <button class="nav-link" data-page="home" onclick="navigate('home')">Home</button>
        <button class="nav-link" data-page="about" onclick="navigate('about')">About</button>
        <button class="nav-link" data-page="shop" onclick="navigate('shop')">Shop</button>
        <button class="nav-link" data-page="contact" onclick="navigate('contact')">Contact</button>

        <div style="width:10px"></div>

        <div class="lang-switch" role="tablist" aria-label="Language">
          <button id="enBtn" class="lang-btn active" onclick="setLang('en')">EN</button>
          <button id="arBtn" class="lang-btn" onclick="setLang('ar')">ع</button>
        </div>

        <button class="cta" onclick="navigate('shop')" id="buyNow">Shop Now</button>
      </nav>
    </header>

    <!-- CONTENT: we swap visible page sections -->
    <main>
      <!-- HOME -->
      <div id="page-home" class="page">
        <div class="hero">
          <div class="hero-card">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:10px; height:10px; border-radius:50%; background:var(--accent)"></div>
              <div style="font-size:12px; color:var(--muted)" id="heroTop">Established 2025 • Hand-finished</div>
            </div>

            <h2 class="headline" id="heroTitle">Exquisite Thobes — Crafted with care</h2>
            <p class="sub" id="heroDesc">Premium fabrics, custom tailoring and timeless designs inspired by tradition and refined for modern elegance.</p>

            <div class="hero-cta">
              <button class="cta" onclick="navigate('shop')" id="shopCta">Shop Collection</button>
              <button class="nav-link" onclick="navigate('contact')" id="inquireCta">Request Custom Order</button>
            </div>

            <div style="margin-top:18px; color:var(--muted); font-size:13px" id="homeExtra">We also accept bespoke orders and bulk tailoring for events or retailers.</div>
          </div>

          <div class="hero-img">
            <img src="thobe1.jpg" alt="Thobe hero" />
          </div>
        </div>

        <section id="featured" class="grid">
          <h3 id="featuredTitle" style="margin:0 0 6px; font-family:PlayfairDisplay,serif">Featured Collection</h3>
          <div class="grid products" id="productsGrid">
            <!-- Example product cards (replace images and details as needed) -->
            <article class="card">
              <div class="product-media"><img src="thobe1.jpg" alt="Thobe 1"></div>
              <h4 class="product-title" data-key="p1Title">Classic White Thobe</h4>
              <p class="product-desc" data-key="p1Desc">Clean cut, premium cotton blend. Perfect for formal and everyday wear.</p>
              <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                <div class="price" data-key="p1Price">$60</div>
                <button class="cta" onclick="openProduct(1)" style="padding:8px 10px">View</button>
              </div>
            </article>

            <article class="card">
              <div class="product-media"><img src="thobe2.jpg" alt="Thobe 2"></div>
              <h4 class="product-title" data-key="p2Title">Tailored Elegance</h4>
              <p class="product-desc" data-key="p2Desc">Slim profile with reinforced seams. Available in multiple sizes.</p>
              <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                <div class="price" data-key="p2Price">$60</div>
                <button class="cta" onclick="openProduct(2)" style="padding:8px 10px">View</button>
              </div>
            </article>

            <!-- Add more product cards here -->
          </div>
        </section>
      </div>

      <!-- ABOUT -->
      <div id="page-about" class="page" style="display:none;">
        <section class="hero-card">
          <h2 style="font-family:'Playfair Display',serif;" id="aboutTitle">Our Story</h2>
          <p id="aboutText" class="sub">
            Darwesh Thobes is a family-run house blending craftsman tailoring with modern finishing. We source high-quality fabrics and tailor each piece to meet our customers' preferences.
          </p>
          <p style="color:var(--muted); margin-top:10px;" id="aboutExtra">We offer custom sizing, fabric selection and fast shipping worldwide.</p>
        </section>

        <section style="display:flex; gap:18px; margin-top:16px; flex-wrap:wrap;">
          <div class="card" style="flex:1; min-width:260px;">
            <h4 data-key="qualityTitle">Premium Quality</h4>
            <p data-key="qualityText" class="product-desc">Carefully selected fabrics — stitched to last.</p>
          </div>
          <div class="card" style="flex:1; min-width:260px;">
            <h4 data-key="tailorTitle">Custom Tailoring</h4>
            <p data-key="tailorText" class="product-desc">Personal measurements and finishings to suit your style.</p>
          </div>
          <div class="card" style="flex:1; min-width:260px;">
            <h4 data-key="supportTitle">Dedicated Support</h4>
            <p data-key="supportText" class="product-desc">Fast replies, order tracking and aftercare advice.</p>
          </div>
        </section>
      </div>

      <!-- SHOP -->
      <div id="page-shop" class="page" style="display:none;">
        <section>
          <h2 style="font-family:Playfair Display,serif;" id="shopTitle">Shop</h2>
          <p id="shopIntro" class="sub">Browse our ready-to-ship and bespoke pieces. Click a product to see details or request measurements.</p>
        </section>

        <section class="grid products" id="shopProducts">
          <!-- Reuse product cards or generate dynamically.
               To add a product: copy an <article class="card"> block,
               change image src, title, description, price, and openProduct id.
          -->
        </section>
      </div>

      <!-- CONTACT -->
      <div id="page-contact" class="page" style="display:none;">
        <section class="contact">
          <div class="form">
            <h3 id="contactTitle">Contact Us</h3>
            <p id="contactText" style="color:var(--muted)">Send inquiries, custom requests or bulk orders.</p>

            <input type="text" id="name" placeholder="Your name" />
            <input type="email" id="email" placeholder="Email" />
            <input type="text" id="subject" placeholder="Subject" />
            <textarea id="message" rows="6" placeholder="Message"></textarea>
            <button onclick="submitForm()">Send Message</button>

            <p style="color:var(--muted); font-size:13px; margin-top:10px;">Or email us directly: <a href="mailto:orders@example.com" id="mailto">orders@example.com</a></p>
          </div>

          <div style="padding:12px;">
            <div class="card" style="padding:18px">
              <h4 id="visitTitle">Visit / Orders</h4>
              <p id="visitText" class="product-desc">We accept studio visits by appointment. For custom orders, please contact us to schedule measurements.</p>
              <p style="margin-top:12px; font-weight:700;">Phone: +123 456 789</p>
              <p style="font-weight:700;">Address: City, Country</p>
            </div>

            <div style="margin-top:12px; text-align:center;">
              <img src="thobe2.jpg" alt="Shop photo" style="border-radius:10px; width:100%; max-width:320px; box-shadow:0 10px 30px rgba(0,0,0,0.06);" />
            </div>
          </div>
        </section>
      </div>

    </main>

    <footer>
      <div id="footerText">© <span id="year"></span> Darwesh Thobes — All rights reserved.</div>
    </footer>
  </div>

  <script>
    /* Basic navigation */
    function navigate(page){
      document.querySelectorAll('.page').forEach(p=>p.style.display='none');
      const el = document.getElementById('page-' + page);
      if(el) el.style.display = '';
      // update active nav (visual)
      document.querySelectorAll('.nav-link').forEach(b=>b.style.opacity='1');
      document.querySelector('.nav-link[data-page="'+page+'"]')?.style.opacity = '0.8';
    }

    // Show home initially
    navigate('home');

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    /* Multi-language content (EN/AR) */
    const content = {
      en:{
        brandName: "Darwesh Thobes",
        brandTag: "Traditional • Luxurious • Tailored",
        heroTop: "Established 2025 • Hand-finished",
        heroTitle: "Exquisite Thobes — Crafted with care",
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
        footerText: "© " + new Date().getFullYear() + " Darwesh Thobes — All rights reserved."
      },
      ar:{
        brandName: "دارويش ثوب",
        brandTag: "تقليدي • فاخر • مفصل",
        heroTop: "تأسّس 2025 • إنهاء يدوي",
        heroTitle: "ثياب فاخرة — مصمّمة بعناية",
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

    // set language and swap text + direction
    let currentLang = 'en';
    function setLang(lang){
      currentLang = lang;
      // direction
      if(lang === 'ar'){
        document.documentElement.setAttribute('dir','rtl');
        document.documentElement.setAttribute('lang','ar');
      } else {
        document.documentElement.setAttribute('dir','ltr');
        document.documentElement.setAttribute('lang','en');
      }

      // swap text nodes by data keys and id keys
      const keys = content[lang];
      for(const id in keys){
        const el = document.getElementById(id);
        if(el) el.textContent = keys[id];
      }

      // swap elements that use data-key attributes
      document.querySelectorAll('[data-key]').forEach(el=>{
        const key = el.getAttribute('data-key');
        if(keys[key]) el.textContent = keys[key];
      });

      // toggle active class
      document.getElementById('enBtn').classList.toggle('active', lang==='en');
      document.getElementById('arBtn').classList.toggle('active', lang==='ar');

      // update CTA button labels which may be plain buttons
      document.getElementById('shopCta').textContent = keys['shopCta'] || document.getElementById('shopCta').textContent;
      document.getElementById('inquireCta').textContent = keys['inquireCta'] || document.getElementById('inquireCta').textContent;
      document.getElementById('buyNow').textContent = keys['shopCta'] || document.getElementById('buyNow').textContent;

      // header brand and tag
      document.getElementById('brandName').textContent = keys['brandName'];
      document.getElementById('brandTag').textContent = keys['brandTag'];
      // footer
      document.getElementById('footerText').textContent = keys['footerText'];

      // text direction sensitive alignment (simple)
      document.querySelectorAll('.hero-card, .card, .form').forEach(c=>{
        c.style.textAlign = (lang==='ar') ? 'right' : 'left';
      });
    }

    // initialize language
    setLang('en');

    // Small product "detail" stub - here we just open contact with subject
    function openProduct(id){
      navigate('contact');
      const titles = {
        1: content[currentLang].p1Title,
        2: content[currentLang].p2Title
      };
      document.getElementById('subject').value = (titles[id] ? (currentLang==='ar' ? 'استفسار عن: ' : 'Inquiry about: ') + titles[id] : '');
      window.scrollTo({top:0, behavior:'smooth'});
    }

    // Form submit (no backend)
    function submitForm(){
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const sub = document.getElementById('subject').value.trim();
      const msg = document.getElementById('message').value.trim();

      if(!name || !email || !msg){
        alert(currentLang === 'ar' ? 'يرجى ملء الاسم والبريد والرسالة.' : 'Please fill name, email and message.');
        return;
      }

      // Mailto fallback for demo (opens user's mail client)
      const mailto = 'mailto:orders@example.com'
        + '?subject=' + encodeURIComponent(sub || 'Website inquiry')
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
      window.location.href = mailto;
    }

    // Optionally auto-populate the Shop page by copying featured cards into shopProducts
    (function populateShop(){
      const shop = document.getElementById('shopProducts');
      const featured = document.getElementById('productsGrid');
      if(!featured || !shop) return;
      // Clone the featured product cards into shop area
      Array.from(featured.children).forEach(card=>{
        const clone = card.cloneNode(true);
        // Remove inline onclicks that might conflict and leave View button
        shop.appendChild(clone);
      });
    })();

  </script>
</body>
</html>
