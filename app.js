/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */

const plants = [
  { id:"radish", emoji:"🌱", name:"Rábano", tagline:"La victoria rápida del kit",
    days:"25–40 días", germination:"4–10 días", sun:"4–6+ horas", water:"Humedad constante",
    mood:"Ideal para ver resultados pronto y ganar confianza.", accent:"rgba(255,80,60,.07)" },
  { id:"leaf-lettuce", emoji:"🥬", name:"Lechuga de hoja", tagline:"La más noble para principiantes",
    days:"30–50 días", germination:"5–10 días", sun:"4–6 horas", water:"Suelo uniforme",
    mood:"Excelente si la luz es buena pero no extrema.", accent:"rgba(60,180,80,.07)" },
  { id:"basil", emoji:"🌿", name:"Albahaca", tagline:"Aromática, linda y muy agradecida",
    days:"35–60 días", germination:"5–10 días", sun:"6+ horas", water:"Estable, sin charcos",
    mood:"Perfecta para fotos, cocina y progreso visible.", accent:"rgba(90,160,60,.09)" },
  { id:"bush-bean", emoji:"🫘", name:"Frijol de mata", tagline:"La opción con fruto sin complicarte",
    days:"45–65 días", germination:"5–10 días", sun:"6+ horas", water:"Humedad con drenaje",
    mood:"Tiene hitos claros: brote, flor y vaina.", accent:"rgba(200,140,60,.07)" }
];

const kits = [
  { id:"inicio", emoji:"🌱", name:"Kit Inicio", tagline:"Tu primera cosecha real",
    price:"₡14.900", currency:"CRC", badge:null, featured:false,
    items:["Maceta con drenaje","Sustrato listo para usar","Semillas (1 especie fácil)","Código de activación app","Guía visual de siembra"],
    cta:"Reservar" },
  { id:"jardin", emoji:"🪴", name:"Kit Jardín", tagline:"El más completo para empezar",
    price:"₡24.900", currency:"CRC", badge:"Más popular", featured:true,
    items:["2 macetas con drenaje","Sustrato premium doble","Semillas (2 especies)","Código de activación app","Guía visual completa","Etiquetas de cultivo"],
    cta:"Reservar" },
  { id:"explorer", emoji:"🌿", name:"Kit Explorer", tagline:"Para una estación de cultivo más completa",
    price:"₡44.900", currency:"CRC", badge:"Edición completa", featured:false,
    items:["4 macetas con drenaje","Sustrato premium","Las 4 especies v1","Código app premium","Guía + bitácora física","Accesorios de cultivo"],
    cta:"Consultar" }
];

const storeProducts = [
  { id:"p1", emoji:"🌱", name:"Kit Inicio",       price:"₡14.900", tag:"Reservar",       available:true },
  { id:"p2", emoji:"🪴", name:"Kit Jardín",       price:"₡24.900", tag:"Reservar",       available:true, popular:true },
  { id:"p3", emoji:"🌿", name:"Kit Explorer",     price:"₡44.900", tag:"Próximamente",   available:false },
  { id:"p4", emoji:"🎁", name:"Kit Regalo",       price:"₡29.900", tag:"Próximamente",   available:false },
  { id:"p5", emoji:"🫘", name:"Semillas extra",   price:"₡4.900",  tag:"Próximamente",   available:false },
  { id:"p6", emoji:"🌍", name:"Sustrato premium", price:"₡3.900",  tag:"Próximamente",   available:false }
];

const faqs = [
  { q:"¿Necesito experiencia para usar Veggestation?",
    a:"Para nada. Está diseñado exactamente para personas que nunca han cultivado. La app te guía paso a paso desde el momento en que siembras." },
  { q:"¿La app funciona en iPhone y Android?",
    a:"Sí. Es una Progressive Web App (PWA), funciona en cualquier navegador moderno — iPhone, Android o computadora. Sin descargar nada de la tienda." },
  { q:"¿Qué pasa si mi planta no germina?",
    a:"El kit incluye semillas extra. Si sigue sin germinar, la app te da orientación y si el problema persiste, te enviamos reposición sin costo adicional." },
  { q:"¿Funciona en un departamento sin jardín?",
    a:"Sí. Solo necesitas una ventana con 4–6 horas de luz natural al día. Las especies de v1 están seleccionadas para espacios interiores pequeños." },
  { q:"¿Cuánto tiempo al día requiere?",
    a:"Entre 2 y 5 minutos. Abres la app, ves la tarea del día, la haces. Los fines de semana tal vez un poco más si hay algo especial en el ciclo." },
  { q:"¿Cómo compro mi kit?",
    a:"Puedes reservarlo directamente desde esta web. Confirmamos disponibilidad, coordinamos entrega y te enviamos tu acceso para empezar a sembrar." },
  { q:"¿El acceso a la app es permanente?",
    a:"Con el kit inicial sí — el código activa acceso completo para ese cultivo. El modelo de suscripción para funciones avanzadas se anunciará antes de que exista." }
];

const roadmap = [
  { phase:"Beta actual", icon:"🌱", title:"Landing + experiencia guiada para una planta",
    items:["Activación de kit","Selección de cultivo","Timeline simple","Tareas de hoy","Ayuda con síntomas básicos"] },
  { phase:"Próxima release", icon:"📸", title:"Bitácora, fotos y recordatorios reales",
    items:["Journal con fotos","Notificaciones web","Ajuste de calendario según progreso","Vista de cosecha"] },
  { phase:"Tienda virtual", icon:"🛒", title:"Comercio y expansión del ecosistema",
    items:["Compra de kits desde la web","Reposiciones","Kits premium","Herbs pack y temporada"] }
];

const activePlant = {
  name:"Albahaca", emoji:"🌿", day:18, stage:"Lista para pinzado ligero", progress:61,
  thisWeek:"Tu planta debería empezar a abrirse y verse más frondosa.",
  todayTask:"Si ya tiene varios pares de hojas, pinza la punta más alta.",
  sun:"6+ horas", water:"Estable, sin charcos", help:"Si se estira mucho, necesita más luz."
};

const scrollIntroFrames = Array.from(
  { length: 100 },
  (_, i) => `./frames/plant_${String(i).padStart(3, "0")}.webp`
);

/* ═══════════════════════════════════════════════════════
   ROUTING
═══════════════════════════════════════════════════════ */

function currentRoute() {
  const h = window.location.hash;
  if (h === "#/app")     return "app";
  if (h === "#/proyecto") return "proyecto";
  return "home";
}

/* ═══════════════════════════════════════════════════════
   TOPBARS
═══════════════════════════════════════════════════════ */

function topbarUser() {
  return `
  <header class="topbar topbar-user">
    <a class="brand" href="#/">
      <span class="brand-mark" aria-hidden="true">V</span>
      <div class="brand-copy"><strong>Veggestation</strong><span>Semilla a cosecha, sin improvisar</span></div>
    </a>
    <nav class="topnav">
      <a href="#como-funciona">Cómo funciona</a>
      <a href="#kits">Kits</a>
      <a href="#tienda">Tienda</a>
      <a href="#faq">FAQ</a>
      <a class="button button-primary button-small topnav-cta" href="#/app">Ver experiencia guiada</a>
    </nav>
  </header>`;
}

function topbarApp() {
  return `
  <header class="topbar">
    <a class="brand" href="#/">
      <span class="brand-mark" aria-hidden="true">V</span>
      <div class="brand-copy"><strong>Veggestation</strong><span>Semilla a cosecha, sin improvisar</span></div>
    </a>
    <nav class="topnav">
      <a href="#/">← Inicio</a>
      <a class="active" href="#/app">App beta</a>
    </nav>
  </header>`;
}

function topbarProject() {
  return `
  <header class="topbar topbar-project">
    <div class="brand-and-badge">
      <a class="brand" href="#/">
        <span class="brand-mark brand-mark-sm" aria-hidden="true">V</span>
        <div class="brand-copy"><strong>Veggestation</strong><span>Semilla a cosecha, sin improvisar</span></div>
      </a>
      <span class="internal-chip">Vista interna</span>
    </div>
    <nav class="topnav">
      <a href="#/">← Sitio de usuario</a>
      <a class="active" href="#/proyecto">Proyecto</a>
      <a href="#/app">Beta app</a>
    </nav>
  </header>`;
}

/* ═══════════════════════════════════════════════════════
   USER LANDING — sections
═══════════════════════════════════════════════════════ */

function scrollIntroSection() {
  return `
  <section class="scroll-intro" id="scrollLanding">
    <div class="scroll-intro-sticky">
      <div class="scroll-intro-media" aria-hidden="true">
        <canvas
          id="scrollLandingCanvas"
          class="scroll-intro-canvas"
          aria-label="Planta germinando"
        ></canvas>
        <div class="scroll-intro-loading" id="scrollLandingLoading">Preparando secuencia…</div>
      </div>
      <div class="scroll-intro-stage">
        <p class="scroll-intro-kicker">Semilla a cosecha</p>
        <h1 class="scroll-intro-title">Veggestation</h1>
        <div class="scroll-intro-cue" aria-hidden="true">
          <span class="scroll-intro-cue-line"></span>
          <span class="scroll-intro-cue-arrow">↓</span>
        </div>
      </div>
    </div>
  </section>`;
}

function heroSection() {
  return `
  <section class="user-hero">
    <div class="user-hero-inner container">
      <div class="user-hero-copy">
        <p class="eyebrow eyebrow-light">Kit físico + App guiada</p>
        <h1 class="hero-display">Tu primera cosecha empieza hoy.</h1>
        <p class="hero-lead">Veggestation convierte cultivar en una experiencia clara, bella y guiada: recibes el kit, activas tu cultivo y sabes exactamente qué hacer en cada etapa.</p>
        <div class="hero-ctas">
          <a class="button button-sun" href="#kits">Ver kits →</a>
          <a class="button button-ghost-light" href="#/app">Ver experiencia</a>
        </div>
        <div class="hero-social-proof">
          <span>🌱 4 especies fáciles</span>
          <span>📱 Guía diaria desde el celular</span>
          <span>🎯 Hecho para principiantes</span>
        </div>
      </div>
      <div class="user-hero-visual" aria-hidden="true">
        <div class="hero-plant-orb">
          <span class="plant-float plant-main">🪴</span>
          <span class="plant-float plant-s1">🌱</span>
          <span class="plant-float plant-s2">🍃</span>
          <span class="plant-float plant-s3">🌿</span>
          <span class="plant-float plant-s4">✨</span>
        </div>
      </div>
    </div>
    <div class="hero-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 64L60 53C120 43 240 21 360 16C480 11 600 21 720 32C840 43 960 53 1080 53C1200 53 1320 43 1380 37L1440 32V64H0Z" fill="#f8f3e6"/>
      </svg>
    </div>
  </section>`;
}

function nameSection() {
  return `
  <section class="name-section" id="nombre">
    <div class="container">
      <div class="name-layout">
        <div class="name-story">
          <div class="name-marquee" aria-hidden="true">
            <span class="name-marquee-word">Veggestation</span>
          </div>
          <div class="name-hero-lockup" aria-label="Desglose visual del nombre Veggestation">
            <div class="name-badge name-badge-veg">
              <span class="name-badge-label">VEG</span>
              <p>lo vegetal, lo verde, lo que brota</p>
            </div>
            <div class="name-badge name-badge-ges">
              <span class="name-badge-label">GESTATION</span>
              <p>acompañar el crecimiento hasta verlo cambiar</p>
            </div>
            <h3 class="name-big-word">
              <span class="name-big-veg">VEG</span><span class="name-big-ges">GESTATION</span>
            </h3>
          </div>
          <div class="name-caption">
            <p>Vegetal al inicio. El crecimiento en el resto.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function howItWorksSection() {
  const steps = [
    { n:"01", emoji:"📦", title:"Compra el kit",        text:"Elige tu kit. Te llega a casa listo para sembrar en menos de 10 minutos." },
    { n:"02", emoji:"🔑", title:"Siembra y activa",     text:"Usa el código del kit para activar tu acompañamiento en la app." },
    { n:"03", emoji:"📱", title:"La app te guía",       text:"Recibe tareas diarias, recordatorios y consejos adaptados a tu etapa." },
    { n:"04", emoji:"🥬", title:"Cosecha",              text:"Llega al momento que lo hace todo valer la pena." }
  ];
  return `
  <section class="how-section" id="como-funciona">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">Cómo funciona</p>
        <h2>De la caja a la cosecha en cuatro pasos</h2>
      </div>
      <div class="steps-flow">
        ${steps.map((s, i) => `
          <div class="step-item">
            <div class="step-num">${s.n}</div>
            <div class="step-emoji">${s.emoji}</div>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </div>
          ${i < steps.length - 1 ? '<div class="step-connector" aria-hidden="true">→</div>' : ""}
        `).join("")}
      </div>
    </div>
  </section>`;
}

function plantsSection() {
  return `
  <section class="plants-section" id="cultivos">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">Los cultivos v1</p>
        <h2>Seleccionados para que llegues a la cosecha</h2>
        <p class="section-lead">Cuatro especies escogidas por ser fáciles, visuales y gratificantes para principiantes.</p>
      </div>
      <div class="plants-user-grid">
        ${plants.map(p => `
        <div class="plant-user-card" style="--plant-accent:${p.accent}">
          <div class="puc-emoji">${p.emoji}</div>
          <h3>${p.name}</h3>
          <p class="puc-tagline">${p.tagline}</p>
          <div class="puc-meta">
            <span>⏱ ${p.days}</span>
            <span>☀️ ${p.sun}</span>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function kitsSection() {
  return `
  <section class="kits-section" id="kits">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">Los kits</p>
        <h2>Todo lo que necesitas en una caja</h2>
        <p class="section-lead">Cada kit incluye el producto físico y acceso completo a la app guiada.</p>
      </div>
      <div class="kits-grid">
        ${kits.map(k => `
        <div class="kit-card ${k.featured ? "kit-featured" : ""}">
          ${k.badge ? `<div class="kit-badge ${k.featured ? "badge-green" : "badge-gray"}">${k.badge}</div>` : ""}
          <div class="kit-emoji">${k.emoji}</div>
          <h3>${k.name}</h3>
          <p class="kit-tagline">${k.tagline}</p>
          <div class="kit-price"><strong>${k.price}</strong><span>${k.currency}</span></div>
          <ul class="kit-items">${k.items.map(i => `<li>${i}</li>`).join("")}</ul>
          <button class="button ${k.featured ? "button-primary" : "button-secondary"} kit-cta"
                  data-kit="${k.id}" type="button">${k.cta}</button>
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function appPreviewSection() {
  const p = activePlant;
  return `
  <section class="app-preview-section" id="app-preview">
    <div class="container">
      <div class="app-split">
        <div class="app-split-copy">
          <p class="eyebrow eyebrow-light">La app</p>
          <h2>Tu guía personal, en el bolsillo</h2>
          <p class="section-lead light">Diseñada para que la primera pantalla que veas cada mañana te diga exactamente qué hacer.</p>
          <ul class="app-features-list">
            <li>📋 Tarea del día personalizada por etapa</li>
            <li>📈 Timeline visual de semilla a cosecha</li>
            <li>💧 Recordatorios de riego y cuidado</li>
            <li>🔍 Ayuda rápida cuando algo se ve raro</li>
            <li>📸 Bitácora visual para seguir el progreso</li>
          </ul>
          <a class="button button-sun" href="#/app">Explorar la experiencia →</a>
        </div>
        <div class="app-split-phone">
          <div class="mini-bezel">
            <div class="mini-frame">
              <div class="mini-notch"><div class="mini-pill"></div></div>
              <div class="mini-content">
                <div class="mini-welcome">
                  <div>
                    <p style="font-size:.68rem;opacity:.65;text-transform:uppercase;letter-spacing:.1em;margin:0 0 .2rem">Hola, Esteban 👋</p>
                    <p style="font-weight:600;font-size:.95rem;line-height:1.2;margin:0">Tu cultivo va bien.</p>
                  </div>
                  <span style="font-size:1.8rem;line-height:1">${p.emoji}</span>
                </div>
                <div class="mini-plant-card">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem">
                    <span class="chip chip-dark" style="font-size:.65rem;padding:.25rem .55rem">${p.name}</span>
                    <span style="font-size:.68rem;opacity:.55">Día ${p.day}</span>
                  </div>
                  <p style="font-size:.78rem;font-weight:600;margin:0 0 .35rem">${p.stage}</p>
                  <div style="height:.45rem;background:rgba(0,0,0,.1);border-radius:99px;overflow:hidden">
                    <div style="height:100%;width:${p.progress}%;background:linear-gradient(90deg,#6dbf72,#2d6b44);border-radius:99px"></div>
                  </div>
                  <p style="font-size:.68rem;opacity:.45;text-align:right;margin:.2rem 0 0">${p.progress}%</p>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:.45rem">
                  <div class="mini-mini-card">
                    <p style="font-size:.6rem;opacity:.45;text-transform:uppercase;letter-spacing:.08em;margin:0 0 .2rem">Hoy</p>
                    <p style="font-size:.72rem;line-height:1.3;margin:0">${p.todayTask.substring(0,38)}…</p>
                  </div>
                  <div class="mini-mini-card">
                    <p style="font-size:.6rem;opacity:.45;text-transform:uppercase;letter-spacing:.08em;margin:0 0 .25rem">Condiciones</p>
                    <p style="font-size:.72rem;margin:0 0 .15rem">☀️ ${p.sun}</p>
                    <p style="font-size:.72rem;margin:0">💧 ${p.water}</p>
                  </div>
                </div>
                <div class="mini-bottom-nav">
                  <span class="mini-tab active">🏠</span>
                  <span class="mini-tab">📈</span>
                  <span class="mini-tab">📓</span>
                  <span class="mini-tab">❓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function storeSection() {
  return `
  <section class="store-section" id="tienda">
    <div class="container">
      <div class="section-head center">
        <p class="eyebrow">La tienda</p>
        <h2>Todo para cultivar, en un solo lugar</h2>
        <p class="section-lead">Reserva tu kit, consulta disponibilidad y descubre los próximos complementos del ecosistema Veggestation.</p>
      </div>
      <div class="store-grid">
        ${storeProducts.map(p => `
        <div class="product-card ${!p.available ? "product-soon" : ""}">
          ${p.popular ? `<div class="product-popular">Popular</div>` : ""}
          <div class="product-emoji">${p.emoji}</div>
          <h3>${p.name}</h3>
          <p class="product-price">${p.price} <span>CRC</span></p>
          <button class="button ${p.available ? "button-primary" : "button-secondary"} product-cta"
                  type="button" data-product="${p.id}" ${!p.available ? "disabled" : ""}>
            ${p.tag}
          </button>
          ${!p.available ? `<p class="soon-note">Disponible por temporada</p>` : ""}
        </div>`).join("")}
      </div>
    </div>
  </section>`;
}

function faqSection() {
  return `
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="faq-inner">
        <div class="faq-head">
          <p class="eyebrow">FAQ</p>
          <h2>Preguntas frecuentes</h2>
          <p class="section-lead left">Las dudas más comunes, respondidas sin rodeos.</p>
        </div>
        <div class="faq-list">
          ${faqs.map((f, i) => `
          <div class="faq-item" data-faq="${i}">
            <button class="faq-q" type="button" aria-expanded="false">
              <span>${f.q}</span>
              <span class="faq-chevron" aria-hidden="true">↓</span>
            </button>
            <div class="faq-a" aria-hidden="true"><p>${f.a}</p></div>
          </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function ctaBand() {
  return `
  <section class="cta-band">
    <div class="container">
      <div class="cta-band-inner">
        <div class="cta-band-copy">
          <p class="eyebrow eyebrow-light">Empieza hoy</p>
          <h2>Tu primera cosecha está a un kit de distancia.</h2>
          <p>Reserva tu kit, recibe acompañamiento guiado y convierte un pequeño espacio en tu propia estación de cultivo.</p>
        </div>
        <div class="cta-band-form">
          <div class="email-form">
            <input class="email-input" type="email" placeholder="tu@email.com" aria-label="Tu email" />
            <button class="button button-sun" type="button" id="emailCta">Quiero mi kit</button>
          </div>
          <p class="form-note">Te contactamos para disponibilidad, lanzamiento de kits y novedades relevantes.</p>
          <div class="cta-band-actions">
            <a class="button button-ghost-light" href="#kits">Ver kits</a>
            <a class="button button-ghost-light" href="#/app">Ver experiencia guiada</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function siteFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="brand-mark brand-mark-sm">V</span>
          <div>
            <strong>Veggestation</strong>
            <p>Semilla a cosecha, sin improvisar.</p>
          </div>
        </div>
        <div class="footer-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#kits">Kits</a>
          <a href="#tienda">Tienda</a>
          <a href="#faq">FAQ</a>
          <a href="#/app">Experiencia guiada</a>
        </div>
        <div class="footer-meta">
          <p>© 2026 Veggestation. Cultivar con claridad.</p>
        </div>
      </div>
    </div>
  </footer>`;
}

function clientSite() {
  return `
  <div class="client-page-shell" id="clientPageShell">
    ${topbarUser()}
    ${heroSection()}
    ${nameSection()}
    ${howItWorksSection()}
    ${plantsSection()}
    ${kitsSection()}
    ${appPreviewSection()}
    ${storeSection()}
    ${faqSection()}
    ${ctaBand()}
    ${siteFooter()}
  </div>`;
}

function userLanding() {
  return `
  ${scrollIntroSection()}
  ${clientSite()}`;
}

/* ═══════════════════════════════════════════════════════
   BETA APP PAGE
═══════════════════════════════════════════════════════ */

function betaPage() {
  const p = activePlant;
  const dots = [
    { label:"Semilla", state:"done" }, { label:"Brote", state:"done" },
    { label:"Hojas",   state:"active" }, { label:"Pinzado", state:"" },
    { label:"Cosecha", state:"" }
  ];
  return `
  <main class="app-page">
    <div class="phone-outer">
      <div class="phone-bezel">
        <div class="phone-frame">
          <div class="phone-notch"><div class="phone-notch-pill"></div></div>
          <div class="phone-status">
            <span style="font-weight:600">Veggestation</span>
            <span>${new Date().toLocaleDateString("es-MX",{weekday:"short",day:"numeric",month:"short"})}</span>
          </div>
          <div class="phone-scroll">
            <div class="welcome">
              <div>
                <p class="eyebrow">Hola, Esteban 👋</p>
                <h1>Tu cultivo va en buen camino.</h1>
              </div>
              <button class="button button-primary button-small" type="button">📷 Foto</button>
            </div>
            <div class="active-plant-card">
              <div class="card-topline">
                <span class="chip chip-dark">${p.emoji} ${p.name}</span>
                <span style="font-size:.8rem;color:var(--ink-60)">Día ${p.day}</span>
              </div>
              <h2>${p.stage}</h2>
              <p>${p.thisWeek}</p>
              <div class="progress-block">
                <div class="progress-meta">
                  <span>Progreso estimado</span><strong>${p.progress}%</strong>
                </div>
                <div class="progress-bar"><span style="width:${p.progress}%"></span></div>
              </div>
            </div>
            <div class="app-grid">
              <article class="app-mini-card">
                <p class="card-label">Tarea de hoy</p>
                <h3>Qué hacer ahora</h3>
                <p style="font-size:.83rem;color:var(--ink-60)">${p.todayTask}</p>
              </article>
              <article class="app-mini-card">
                <p class="card-label">Condiciones</p>
                <h3>Sol y riego</h3>
                <ul>
                  <li>☀️ ${p.sun}</li>
                  <li>💧 ${p.water}</li>
                  <li>💡 ${p.help}</li>
                </ul>
              </article>
            </div>
            <div class="active-plant-card">
              <p class="card-label">Timeline · semilla hasta cosecha</p>
              <div class="mini-timeline">
                ${dots.map(d => `
                <div class="timeline-dot ${d.state}">
                  <div class="dot"></div><small>${d.label}</small>
                </div>`).join("")}
              </div>
            </div>
            <div class="active-plant-card">
              <p class="card-label">Mi planta no se ve bien</p>
              <p style="font-size:.85rem;color:var(--ink-60);margin:.25rem 0 .1rem">Ayuda rápida</p>
              <div class="symptoms">
                <button class="symptom" type="button">🍂 Hojas amarillas</button>
                <button class="symptom" type="button">📉 Tallo débil</button>
                <button class="symptom" type="button">⏳ No germina</button>
                <button class="symptom" type="button">🏜️ Tierra muy seca</button>
              </div>
            </div>
            <nav class="bottom-nav">
              <span class="bottom-tab active">🏠 Home</span>
              <span class="bottom-tab">📈 Timeline</span>
              <span class="bottom-tab">📓 Bitácora</span>
              <span class="bottom-tab">❓ Ayuda</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <aside class="app-sidepanel">
      <div class="section-head">
        <p class="eyebrow">Tu guía diaria</p>
        <h2>Todo lo importante de tu cultivo, en una sola vista</h2>
      </div>
      <div class="cards">
        <article class="card"><div style="font-size:1.6rem;margin-bottom:.5rem">✅</div>
          <h3>Qué está pasando hoy</h3>
          <p>Ves el estado de tu planta, la acción recomendada y el avance del cultivo sin tener que interpretar señales confusas.</p>
        </article>
        <article class="card"><div style="font-size:1.6rem;margin-bottom:.5rem">🚀</div>
          <h3>Qué hacer a continuación</h3>
          <p>Cada pantalla te da una siguiente acción concreta para que cuidar tu planta se sienta simple, ligera y constante.</p>
        </article>
        <article class="card"><div style="font-size:1.6rem;margin-bottom:.5rem">🎯</div>
          <h3>La tranquilidad de cultivar bien</h3>
          <p>Veggestation está diseñada para darte claridad, confianza y una sensación real de progreso desde la semilla hasta la cosecha.</p>
        </article>
      </div>
    </aside>
  </main>`;
}

/* ═══════════════════════════════════════════════════════
   PROJECT PAGE (internal — #/proyecto)
═══════════════════════════════════════════════════════ */

function metric(label, value, icon) {
  return `<div class="metric">
    <strong>${icon ? icon + " " : ""}${value}</strong>
    <span>${label}</span>
  </div>`;
}

function renderPlantCard(p) {
  return `
  <article class="card plant-card" style="background:linear-gradient(160deg,var(--white-glass),${p.accent} 100%)">
    <div class="plant-emoji-hero">${p.emoji}</div>
    <div class="card-topline">
      <span class="chip">${p.name}</span>
      <span style="font-size:.8rem;color:var(--ink-60)">${p.days}</span>
    </div>
    <h3>${p.tagline}</h3><p>${p.mood}</p>
    <dl class="specs">
      <div><dt>Germinación</dt><dd>${p.germination}</dd></div>
      <div><dt>Sol</dt><dd>${p.sun}</dd></div>
      <div><dt>Riego</dt><dd>${p.water}</dd></div>
    </dl>
  </article>`;
}

function renderRoadmapCard(step) {
  return `
  <article class="timeline-card">
    <div class="timeline-phase">${step.icon} ${step.phase}</div>
    <h3>${step.title}</h3>
    <ul class="clean-list">${step.items.map(i => `<li>${i}</li>`).join("")}</ul>
  </article>`;
}

function projectPage() {
  return `
  <main class="page">
    <div class="project-notice">
      <span>🔒</span>
      <p>Esta es la <strong>vista interna del proyecto</strong>. Aquí monitoras el avance, la propuesta y el roadmap.
         <a href="#/">Ver sitio de usuario →</a></p>
    </div>

    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">PWA + kit físico para principiantes</p>
        <h1>Una experiencia para cuidar verduras desde la <em>semilla</em> hasta la cosecha.</h1>
        <p class="hero-text">Veggestation combina un kit físico y una app mobile-first para acompañar a la persona en cada etapa. La idea no es vender solo una maceta: es vender tranquilidad, progreso visible y una primera cosecha real.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/app">Abrir beta app</a>
          <a class="button button-secondary" href="#modelo-int">Ver modelo</a>
        </div>
        <div class="hero-metrics">
          ${metric("Cultivos v1","4 fáciles","🌱")}
          ${metric("Experiencia","Mobile first","📱")}
          ${metric("Canal futuro","Tienda virtual","🛒")}
        </div>
      </div>
      <div class="hero-card glass">
        <div class="kit-card-header">
          <span class="chip chip-accent">Kit inicial</span>
          <span class="chip chip-soft">Beta conceptual</span>
        </div>
        <h2>Qué trae el kit</h2>
        <ul class="clean-list">
          <li>Maceta con sistema de drenaje</li>
          <li>Sustrato premium y piedritas</li>
          <li>Semillas de una especie fácil</li>
          <li>Código de acceso a la app</li>
          <li>Guía visual para sembrar en minutos</li>
        </ul>
        <p class="card-footnote">Todo pensado para que una persona sin experiencia pueda empezar sin comprar nada más.</p>
        <div class="kit-illustration"><span>🪴</span><span>🌱</span><span>🥬</span></div>
      </div>
    </section>

    <section id="modelo-int" class="section">
      <div class="section-head"><p class="eyebrow">Modelo del proyecto</p><h2>Cómo funciona Veggestation</h2></div>
      <div class="how-cards">
        <div class="how-card"><div class="how-num">1</div><h3>Producto físico</h3><p>Un kit compacto con maceta, sustrato, drenaje, semillas e instructivo visual.</p></div>
        <div class="how-card"><div class="how-num">2</div><h3>Acceso digital</h3><p>El usuario activa su código, registra la siembra y recibe acompañamiento por etapas.</p></div>
        <div class="how-card"><div class="how-num">3</div><h3>Monetización futura</h3><p>Tienda virtual, reposiciones, bundles y experiencias premium para usuarios recurrentes.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">Cultivos para v1</p><h2>Seleccionados para minimizar frustración y maximizar progreso</h2></div>
      <div class="cards plant-grid">${plants.map(renderPlantCard).join("")}</div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">Beta del usuario</p><h2>Qué resuelve la app desde el día uno</h2></div>
      <div class="showcase-grid">
        <article class="feature-panel"><span class="feature-icon">📋</span><h3>Pantalla principal diaria</h3><p>Le dice al usuario qué hacer hoy, qué esperar esta semana y si va bien según la etapa.</p></article>
        <article class="feature-panel"><span class="feature-icon">📈</span><h3>Timeline por etapas</h3><p>Vuelve visible el progreso y reduce la ansiedad de no saber si la planta está creciendo bien.</p></article>
        <article class="feature-panel"><span class="feature-icon">🔍</span><h3>Ayuda cuando algo se ve raro</h3><p>En lugar de diagnósticos complejos, la beta sugiere acciones concretas con lenguaje fácil.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><p class="eyebrow">Roadmap</p><h2>De companion app a ecosistema con tienda</h2></div>
      <div class="timeline">${roadmap.map(renderRoadmapCard).join("")}</div>
    </section>

    <section class="section commerce">
      <div class="commerce-bg">
        <div class="section-head" style="margin-bottom:1.5rem">
          <p class="eyebrow">Previsto para tienda virtual</p><h2>La web también prepara el terreno comercial</h2>
        </div>
        <div class="cards three-up">
          <article class="card"><div style="font-size:1.8rem;margin-bottom:.6rem">📦</div><h3>Kits base</h3><p>Compra directa de kits para principiantes con experiencia guiada incluida.</p></article>
          <article class="card"><div style="font-size:1.8rem;margin-bottom:.6rem">🔄</div><h3>Reposiciones</h3><p>Semillas, sustrato y recargas para volver a sembrar sin recomprar todo.</p></article>
          <article class="card"><div style="font-size:1.8rem;margin-bottom:.6rem">✨</div><h3>Expansiones</h3><p>Nuevas especies, kits premium, regalos y colecciones por temporada.</p></article>
        </div>
      </div>
    </section>
  </main>`;
}

/* ═══════════════════════════════════════════════════════
   INTERACTIONS
═══════════════════════════════════════════════════════ */

function initFAQ() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(el => {
        el.classList.remove("open");
        el.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        el.querySelector(".faq-a").setAttribute("aria-hidden", "true");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        item.querySelector(".faq-a").setAttribute("aria-hidden", "false");
      }
    });
  });
}

function initCTAs() {
  document.querySelectorAll(".kit-cta, .product-cta").forEach(btn => {
    if (btn.disabled) return;
    btn.addEventListener("click", () => showToast("¡Reservado! 🌱 Te avisamos cuando abramos la tienda."));
  });
  document.getElementById("emailCta")?.addEventListener("click", () => {
    const input = document.querySelector(".email-input");
    if (input?.value?.includes("@")) {
      showToast("¡Listo! 🌿 Te avisamos cuando abramos.");
      input.value = "";
    } else {
      showToast("Ingresa un email válido 📧");
    }
  });
}

let _scrollLandingCleanup;
function initScrollLanding() {
  const section = document.getElementById("scrollLanding");
  const canvas = document.getElementById("scrollLandingCanvas");
  const loading = document.getElementById("scrollLandingLoading");
  const clientPageShell = document.getElementById("clientPageShell");
  if (!section || !canvas || !clientPageShell) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;
  let rafId = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let lastScrollY = window.scrollY;
  let currentFrameIndex = -1;
  let loadedFrames = new Array(scrollIntroFrames.length).fill(null);
  let disposed = false;
  let hasSnappedToSite = false;
  let snapTimeoutId = 0;
  const context = canvas.getContext("2d", { alpha: false });
  const introFrameCount = scrollIntroFrames.length;
  const dissolveStartFrame = 84;
  const dissolveEndFrame = 100;
  const dissolveStartIndex = Math.max(0, dissolveStartFrame - 1);
  const dissolveEndIndex = Math.max(dissolveStartIndex, dissolveEndFrame - 1);
  const dissolveStartProgress = dissolveStartIndex / Math.max(introFrameCount - 1, 1);
  const dissolveEndProgress = Math.min(1, dissolveEndIndex / Math.max(introFrameCount - 1, 1));

  const drawFrame = (frameSource) => {
    if (!context || !frameSource) return;
    const { width, height } = canvas.getBoundingClientRect();
    const renderWidth = Math.max(Math.round(width * window.devicePixelRatio), 1);
    const renderHeight = Math.max(Math.round(height * window.devicePixelRatio), 1);

    if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
      canvas.width = renderWidth;
      canvas.height = renderHeight;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#f7f1e3";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const srcWidth = frameSource.width || frameSource.videoWidth || 1;
    const srcHeight = frameSource.height || frameSource.videoHeight || 1;
    const scale = Math.max(canvas.width / srcWidth, canvas.height / srcHeight);
    const drawWidth = srcWidth * scale;
    const drawHeight = srcHeight * scale;
    const dx = (canvas.width - drawWidth) / 2;
    const dy = (canvas.height - drawHeight) / 2;

    context.drawImage(frameSource, dx, dy, drawWidth, drawHeight);
  };

  const renderCurrentFrame = () => {
    const availableFrames = loadedFrames.filter(Boolean);
    if (!availableFrames.length) return;
    const scrubProgress = Math.min(currentProgress / 0.82, 1);
    const nextFrameIndex = Math.min(
      loadedFrames.length - 1,
      Math.round(scrubProgress * (loadedFrames.length - 1))
    );

    let resolvedIndex = nextFrameIndex;
    while (resolvedIndex >= 0 && !loadedFrames[resolvedIndex]) {
      resolvedIndex -= 1;
    }
    if (resolvedIndex < 0) {
      resolvedIndex = loadedFrames.findIndex(Boolean);
    }
    if (resolvedIndex < 0) return;

    if (resolvedIndex !== currentFrameIndex) {
      currentFrameIndex = resolvedIndex;
      drawFrame(loadedFrames[currentFrameIndex]);
    }
  };

  const setVars = (progress) => {
    const title = Math.min(progress / 0.18, 1);
    const reveal = progress <= dissolveStartProgress
      ? 0
      : Math.min((progress - dissolveStartProgress) / Math.max(dissolveEndProgress - dissolveStartProgress, 0.001), 1);
    const dissolve = progress <= dissolveStartProgress
      ? 0
      : Math.min((progress - dissolveStartProgress) / Math.max(dissolveEndProgress - dissolveStartProgress, 0.001), 1);

    document.documentElement.style.setProperty("--intro-progress", progress.toFixed(4));
    document.documentElement.style.setProperty("--intro-title-progress", title.toFixed(4));
    document.documentElement.style.setProperty("--intro-reveal", reveal.toFixed(4));
    document.documentElement.style.setProperty("--intro-dissolve", dissolve.toFixed(4));
  };

  const animate = () => {
    rafId = 0;
    currentProgress += (targetProgress - currentProgress) * (prefersReducedMotion ? 1 : 0.1);
    if (Math.abs(targetProgress - currentProgress) < 0.001) {
      currentProgress = targetProgress;
    }

    setVars(currentProgress);
    renderCurrentFrame();

    if (Math.abs(targetProgress - currentProgress) >= 0.001) {
      rafId = requestAnimationFrame(animate);
    }
  };

  const update = () => {
    ticking = false;

    const total = Math.max(section.offsetHeight - window.innerHeight, 1);
    const top = Math.max(0, -section.getBoundingClientRect().top);
    targetProgress = Math.min(1, top / total);
    const scrollingDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;

    if (!hasSnappedToSite && scrollingDown && targetProgress >= dissolveEndProgress) {
      hasSnappedToSite = true;
      const topbar = clientPageShell.querySelector(".topbar");
      const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
      const siteTop = Math.max(
        0,
        window.scrollY + clientPageShell.getBoundingClientRect().top - topbarHeight
      );
      window.scrollTo({
        top: siteTop,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });

      clearTimeout(snapTimeoutId);
      snapTimeoutId = window.setTimeout(() => {
        snapTimeoutId = 0;
      }, prefersReducedMotion ? 0 : 700);
    } else if (hasSnappedToSite && !scrollingDown && targetProgress < dissolveStartProgress * 0.9) {
      hasSnappedToSite = false;
    }

    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const onResize = () => {
    currentFrameIndex = -1;
    renderCurrentFrame();
    requestUpdate();
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", onResize);
  loading?.classList.add("is-visible");

  let loadedCount = 0;
  let failedCount = 0;

  scrollIntroFrames.forEach((src, index) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (disposed) return;
      loadedFrames[index] = image;
      loadedCount += 1;

      if (loadedCount === 1) {
        loading?.classList.remove("is-visible");
        currentFrameIndex = -1;
        renderCurrentFrame();
      } else {
        requestUpdate();
      }
    };
    image.onerror = () => {
      if (disposed) return;
      failedCount += 1;
      if (loadedCount === 0 && failedCount === scrollIntroFrames.length && loading) {
        loading.textContent = "No pudimos cargar la secuencia.";
        loading.classList.add("is-visible");
      }
    };
    image.src = src;
  });

  _scrollLandingCleanup = () => {
    disposed = true;
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", onResize);
    if (rafId) cancelAnimationFrame(rafId);
    if (snapTimeoutId) clearTimeout(snapTimeoutId);
    loadedFrames = [];
    document.documentElement.style.removeProperty("--intro-progress");
    document.documentElement.style.removeProperty("--intro-title-progress");
    document.documentElement.style.removeProperty("--intro-reveal");
    document.documentElement.style.removeProperty("--intro-dissolve");
  };
}

let _toastTimer;
function showToast(msg) {
  let t = document.getElementById("vg-toast");
  if (!t) { t = Object.assign(document.createElement("div"), { id:"vg-toast" }); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("toast-show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove("toast-show"), 3500);
}

/* ═══════════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════════ */

function render() {
  const route = currentRoute();
  if (_scrollLandingCleanup) {
    _scrollLandingCleanup();
    _scrollLandingCleanup = null;
  }
  let topbar, content;
  if      (route === "app")      { topbar = topbarApp();     content = betaPage(); }
  else if (route === "proyecto") { topbar = topbarProject(); content = projectPage(); }
  else                           { topbar = "";             content = userLanding(); }

  document.getElementById("root").innerHTML = `<div class="shell shell-${route}">${topbar}${content}</div>`;

  if (route === "home") { initScrollLanding(); initFAQ(); initCTAs(); }
}

window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) window.location.hash = "#/";
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
  render();
});
