export const PORTFOLIO_DATA = {
  tr: {
    personal: {
      name: "Talha Özcan",
      title: "Bilgisayar Mühendisi & Full-Stack Sistem Mimarı",
      shortRole: "Bilgisayar Mühendisi",
      university: "İnönü Üniversitesi",
      degree: "Bilgisayar Mühendisliği (Lisans Mezunu)",
      gpa: "3.25",
      status: "🟢 Yeni Projelere & Fırsatlara Açık // Available for Work",
      bio: "Merhaba, ben Talha Özcan. İnönü Üniversitesi Bilgisayar Mühendisliği'nden 3.25 GPA ile mezun oldum. Yüksek performanslı backend mimarileri, dağıtık sistemler, veri tutarlılığı ve ölçeklenebilir modern yazılım ekosistemleri inşa ediyorum.",
      github: "https://github.com/talhaff",
      linkedin: "https://www.linkedin.com/in/talha-özcan",
      email: "talhaozcanf@gmail.com",
      stats: [
        { label: "Akademik GPA", value: "3.25 (Mezun)" },
        { label: "Mimari Proje", value: "5+" },
        { label: "Sistem Uptime Hedefi", value: "%99.9" },
        { label: "Backend API Latency", value: "<45ms" }
      ],
      roles: [
        'Yüksek Performanslı Backend Sistemleri',
        'Gerçek Zamanlı Dağıtık Mimariler',
        'Endüstriyel ERP & Teklif Motorları',
        'Modern Mobil & Web Ekosistemleri'
      ]
    },
    nav: [
      { label: "Projeler", href: "#projects" },
      { label: "Sistem & Yetenekler", href: "#skills" },
      { label: "Hakkımda", href: "#about" },
      { label: "İletişim", href: "#contact" }
    ],
    projects: [
      {
        id: 1,
        title: "Endüstriyel Maliyet & ERP Teklif Motoru",
        category: "ERP & Sistem Mimarisi",
        shortDesc: "Fabrikalar için milisaniyelik dinamik maliyet analizi, hammadde verimlilik simülasyonu ve otomatik teklif motoru.",
        description: "Senkroon Yazılım bünyesindeki staj sürecimde geliştirdiğim; endüstriyel üretim hatlarındaki yüzlerce değişkeni anlık hesaplayan, karmaşık reçete ağaçlarını işleyen ve kurumsal ERP/CRM altyapılarına entegre olan yüksek performanslı web platformu.",
        architecture: "React 19 + .NET Core Web API + PostgreSQL + Redis Caching",
        metrics: {
          speed: "<35ms Hesaplama Süresi",
          scale: "10k+ Dinamik Reçete / Sn",
          impact: "%40 Teklif Hazırlama Hızı Artışı"
        },
        highlights: [
          "Karmaşık endüstriyel algoritmaların backend'de optimize edilmesi",
          "PostgreSQL üzerinde çok katmanlı indeksleme ve query optimizasyonu",
          "Rol tabanlı yetkilendirme (RBAC) ve kurumsal audit loglama"
        ],
        tags: ["React", ".NET Core", "PostgreSQL", "ERP/CRM", "Redis"],
        github: "https://github.com/talhaff/MaliyetHesapla_V2",
        featured: true
      },
      {
        id: 2,
        title: "Taptaze - Realtime Q-Commerce Ekosistemi",
        category: "Full-Stack & Mobil",
        shortDesc: "Getir & Yemeksepeti modelinde, WebSocket tabanlı canlı sipariş ve kurye takip platformu.",
        description: "Manav ve taze gıda operasyonları için uçtan uca kurgulanmış; müşteri mobil uygulaması, kurye yönetim paneli ve canlı sipariş dağıtım motorunu içeren dağıtık ekosistem.",
        architecture: "React Native + Node.js/Express + MongoDB + Socket.io",
        metrics: {
          speed: "<20ms Socket Ping",
          scale: "Çift Yönlü Canlı Konum Akışı",
          impact: "Sıfır Gecikmeli Sipariş Senkronizasyonu"
        },
        highlights: [
          "Socket.io ile anlık sipariş durumu ve harita tabanlı kurye takibi",
          "MongoDB coğrafi indeksleme (2dsphere index) ile en yakın kurye eşleme",
          "Push notification entegrasyonu ve offline-first veri saklama"
        ],
        tags: ["React Native", "Node.js", "MongoDB", "Socket.io", "Geospatial"],
        github: "https://github.com/talhaff/taptaze-app",
        featured: true
      },
      {
        id: 3,
        title: "Otel Yönetim & Rezervasyon Dağıtım Sistemi",
        category: "Enterprise Backend",
        shortDesc: "Java Spring Boot mimarili, ACID uyumlu kurumsal oda rezervasyonu ve finans yönetim çekirdeği.",
        description: "Yüksek eşzamanlı rezervasyon isteklerini (concurrency) çakışma olmadan yöneten, oda doluluk matrislerini anlık hesaplayan ve kurumsal muhasebe modülleri barındıran kurumsal backend.",
        architecture: "Java 21 + Spring Boot 3 + PostgreSQL + Hibernate ORM + JUnit",
        metrics: {
          speed: "P99 <50ms",
          scale: "ACID Garantili İşlem Çekirdeği",
          impact: "Sıfır Çifte Rezervasyon (Zero Overbooking)"
        },
        highlights: [
          "Pessimistic / Optimistic Locking ile çifte rezervasyon önleme",
          "Clean Architecture & Domain Driven Design (DDD) prensipleri",
          "RESTful API dokümantasyonu (Swagger/OpenAPI) ve CI test coverage"
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "Clean Arch", "Hibernate"],
        github: "https://github.com/talhaff/otel-yonetim-sistemi",
        featured: true
      },
      {
        id: 4,
        title: "Arya Sanat Akademi - Modern Kurumsal Platform",
        category: "Frontend & Performance",
        shortDesc: "Gelişmiş SEO optimizasyonu, interaktif kurs yönetim arayüzü ve ultra hızlı yüklenme skorları.",
        description: "Arya Sanat Akademi'nin kurumsal kimliğini yansıtan, SSR mimarisiyle sıfır CLS ve 100 Lighthouse skoru hedefleyen modern web platformu.",
        architecture: "React + Next.js + Tailwind CSS + Vercel Edge Network",
        metrics: {
          speed: "100/100 Lighthouse Skoru",
          scale: "Edge CDN Caching",
          impact: "Organik Arama Trafiğinde %180 Artış"
        },
        highlights: [
          "Next.js SSR/SSG stratejisiyle optimize edilmiş içerik sunumu",
          "Dinamik schema.org JSON-LD mikro veri entegrasyonu",
          "Mobil öncelikli responsive glassmorphism kullanıcı deneyimi"
        ],
        tags: ["React", "Next.js", "Tailwind CSS", "SEO", "Edge UI"],
        github: "https://aryasanatakademim.com",
        featured: false
      },
      {
        id: 5,
        title: "Senior Engineering Creative Portfolio",
        category: "Creative Engineering",
        shortDesc: "Web Audio API synth sesleri, interaktif mimari simülatörü ve CLI terminali barındıran web platformu.",
        description: "Ziyaretçiye klasik CV yerine gerçek bir mühendislik deneyimi sunan; Web Audio API tabanlı mikro ses sentezleyici, gerçek zamanlı FPS telemetry HUD ve interaktif API Playground içeren portfolyo.",
        architecture: "React 19 + Vite + Tailwind v4 + Framer Motion + Web Audio API",
        metrics: {
          speed: "60 FPS Akıcı Animasyon",
          scale: "0 Harici Ses Kütüphanesi",
          impact: "Awwwards Standardında Mikro Etkileşimler"
        },
        highlights: [
          "Web Audio API ile harici dosya olmadan saf matematiksel ses sentezi",
          "Framer Motion spring fizik motoru ile manyetik imleç ve HUD",
          "Etkileşimli CLI Terminal ve mimari akış simülatörü"
        ],
        tags: ["React 19", "Tailwind 4", "Framer Motion", "Web Audio", "Vite"],
        github: "https://github.com/talhaff/website",
        featured: false
      }
    ],
    categories: ['Tümü', 'ERP & Sistem Mimarisi', 'Full-Stack & Mobil', 'Enterprise Backend', 'Creative Engineering'],
    skills: [
      {
        category: "Backend & Mimari",
        description: "Dağıtık sistemler, RESTful API'lar, mikroservis mimarileri ve yüksek throughput'lu sunucu çözümleri.",
        items: [
          { name: "Node.js / Express", level: 90, tag: "Primary" },
          { name: "Java & Spring Boot", level: 85, tag: "Enterprise" },
          { name: ".NET Core Web API", level: 80, tag: "Industrial ERP" },
          { name: "REST & WebSocket / Socket.io", level: 90, tag: "Real-time" }
        ]
      },
      {
        category: "Veritabanı & Veri Yönetimi",
        description: "İlişkisel ve NoSQL veritabanlarında yüksek performanslı sorgu optimizasyonu, indeksleme ve modelleme.",
        items: [
          { name: "PostgreSQL", level: 90, tag: "Relational / ACID" },
          { name: "MongoDB", level: 85, tag: "Document / Geospatial" },
          { name: "Redis", level: 80, tag: "In-Memory & Cache" },
          { name: "Hibernate / Entity Framework", level: 85, tag: "ORM" }
        ]
      },
      {
        category: "Modern Web & Mobil",
        description: "Ultra akıcı arayüzler, state management ve platformlar arası mobil uygulama geliştirme.",
        items: [
          { name: "React 19 & Next.js", level: 95, tag: "Core Frontend" },
          { name: "React Native", level: 85, tag: "Mobile Ecosystem" },
          { name: "Tailwind CSS 4", level: 95, tag: "Modern Styling" },
          { name: "Framer Motion", level: 90, tag: "Creative Motion" }
        ]
      },
      {
        category: "DevOps, Araçlar & Metodoloji",
        description: "Konteynerizasyon, versiyon kontrolü, CI/CD hatları ve temiz kod prensipleri.",
        items: [
          { name: "Docker & Linux", level: 85, tag: "Infrastructure" },
          { name: "Git & CI/CD Pipelines", level: 90, tag: "Workflow" },
          { name: "Clean Arch & SOLID", level: 90, tag: "Software Principles" },
          { name: "System Design & UML", level: 85, tag: "Engineering" }
        ]
      }
    ],
    pipeline: [
      { step: '01', title: 'Modern UI & Mobile', tech: 'React 19 / React Native / Next.js', desc: 'Ultra akıcı kullanıcı arayüzleri & mobil ekosistem' },
      { step: '02', title: 'API Gateway & Services', tech: 'Node.js / Spring Boot / .NET Core', desc: 'REST, WebSocket, gRPC ve mikroservis yönlendirme' },
      { step: '03', title: 'Storage & Caching', tech: 'PostgreSQL / MongoDB / Redis', desc: 'ACID garantili işlem çekirdeği ve in-memory cache' },
      { step: '04', title: 'DevOps & Reliability', tech: 'Docker / Linux / CI/CD / Monitoring', desc: 'Konteyner dağıtımı, yüksek uptime ve ölçeklenebilirlik' }
    ],
    principles: [
      { title: 'Sistem Ölçeklenebilirliği', desc: 'Tek bir makineden dağıtık servislere kadar darboğaz yaratmayan asenkron mimariler.' },
      { title: 'Veri Bütünlüğü (ACID)', desc: 'Finansal ve endüstriyel ERP süreçlerinde sıfır veri kaybı ve deterministik transaction yönetimi.' },
      { title: 'Clean Architecture & SOLID', desc: 'Bakımı kolay, gevşek bağlı (decoupled) ve test edilebilir modüler kod standartları.' },
      { title: 'Yüksek Performans & Düşük Latency', desc: 'Veritabanı indekslemesinden frontend render optimizasyonuna kadar milisaniyelik hassasiyet.' }
    ],
    simEndpoints: [
      {
        id: 'erp',
        name: 'Endüstriyel Maliyet API',
        method: 'POST',
        path: '/api/v1/factory/calculate-cost',
        latency: '18ms',
        status: 200,
        nodes: ['İstemci (Client)', 'API Gateway', '.NET Core Engine', 'PostgreSQL (Indexed)'],
        reqPayload: { factoryId: 'ERP-CORE-09', batchSize: 5000, rawMaterials: ['ALU-7075', 'TITAN-GR5'] },
        resPayload: {
          status: 'CALCULATED',
          unitCost: 142.50,
          totalCost: 712500,
          profitMargin: '%28.4',
          cacheHit: true,
          timestamp: '2026-10-10T02:00:15Z'
        }
      },
      {
        id: 'socket',
        name: 'Taptaze Q-Commerce Stream',
        method: 'WS',
        path: 'wss://stream.taptaze.app/courier/location',
        latency: '8ms',
        status: 101,
        nodes: ['React Native', 'Socket.io Cluster', 'Redis Pub/Sub', 'MongoDB (2dsphere)'],
        reqPayload: { event: 'COURIER_PING', courierId: 'CR-8821', geo: [38.3552, 38.3095] },
        resPayload: {
          event: 'DISPATCH_ACK',
          matchedOrders: 3,
          etaMinutes: 11,
          batteryLevel: '%94',
          signalQuality: 'EXCELLENT'
        }
      },
      {
        id: 'hotel',
        name: 'Spring Boot ACID Lock Core',
        method: 'POST',
        path: '/api/v2/reservations/lock-and-commit',
        latency: '29ms',
        status: 201,
        nodes: ['Web Client', 'Spring Gateway', 'Lock Manager (Pessimistic)', 'PostgreSQL ACID Core'],
        reqPayload: { roomId: 'SUITE-402', guestId: 'G-9901', dates: ['2026-11-01', '2026-11-05'] },
        resPayload: {
          reservationId: 'RES-890241',
          transactionStatus: 'COMMITTED',
          isolationLevel: 'SERIALIZABLE',
          overbookingRisk: 'ZERO_PERCENT'
        }
      }
    ],
    ui: {
      heroTitle1: "Mühendislik Temelli,",
      heroTitle2: "Yüksek Ölçekli Sistemler",
      heroTitle3: "Kurguluyorum.",
      ctaProjects: "Projeleri İncele",
      ctaTerminal: "Terminal (CLI)",
      ctaContact: "İletişim",
      simTitle: "Talha-Engineering // Live Architecture Simulator",
      simInstruction: "Bir Canlı Mimari İş Akışı Seçin & Tetikleyin:",
      simPipelineTitle: "Sistem Veri Akış Düğümleri (Active Pipeline):",
      simProcessing: "İstek İşleniyor...",
      simCompleted: "✓ Tamamlandı",
      simReqTitle: "Giden İstek (Payload)",
      simResTitle: "Milisaniyelik Yanıt (Response)",
      projectsHeaderTag: "// 01. MÜHENDİSLİK VİTRİNİ",
      projectsHeading1: "Üretim Seviyesi",
      projectsHeading2: "Projeler & Sistemler",
      projectsSub: "Fabrika ERP/CRM altyapılarından gerçek zamanlı mobil dağıtım ağlarına, yüksek eşzamanlılık ve veri bütünlüğü odaklı mühendislik çalışmaları.",
      tabOverview: "Genel Bakış",
      tabArch: "Mimari",
      tabMetrics: "Metrikler",
      archStackLabel: "Stack Mimarisi:",
      skillsHeaderTag: "// 02. TEKNOLOJİ & SİSTEM MİMARİSİ",
      skillsHeading1: "Mühendislik Yığını &",
      skillsHeading2: "Mimari Düğümleri",
      skillsSub: "Yalnızca syntax bilmek değil; sistem bileşenlerinin birbirleriyle nasıl konuştuğunu, veri bütünlüğünü ve darboğazların nasıl optimize edildiğini kavramak.",
      skillsPipelineLabel: "Uçtan Uca Sistem Mimarisi Akışı (System Architecture Pipeline):",
      skillsSelectDomain: "Uzmanlık Alanı Seçin:",
      aboutHeaderTag: "// 03. HAKKIMDA & KARİYER YOLCULUĞU",
      aboutHeading1: "Mühendislik Vizyonu &",
      aboutHeading2: "Akademik Temeller",
      aboutSub: "Teoriyi pratiğe döken, kurumsal yazılım sektöründe gerçek problemleri çözen ve sürekli öğrenen bir mühendislik yaklaşımı.",
      aboutTitle: "Problem Çözücü,",
      aboutTitleGradient: "Sistem Mimarı.",
      aboutBio1: "İnönü Üniversitesi Bilgisayar Mühendisliği bölümünden 3.25 GPA ile mezun oldum. Mühendisliği sadece kod satırlarından ibaret değil; sürdürülebilir, ölçülebilir ve hataya dayanıklı sistemler tasarlamak olarak görüyorum.",
      aboutBio2: "Senkroon Yazılım bünyesindeki staj sürecimde endüstriyel fabrikaların üretim hatlarındaki karmaşık maliyet, fire ve hammadde analizlerini milisaniyeler içinde hesaplayan ERP/CRM çözümleri geliştirdim.",
      aboutBio3: "Şu anda dağıtık backend sistemleri, yüksek performanslı veritabanı optimizasyonları ve gerçek zamanlı web/mobil mimarileri üzerine odaklanıyorum.",
      aboutTimelineTitle: "Eğitim & Deneyim Zaman Tüneli",
      timelineSenkroonRole: "Software Developer (Staj)",
      timelineSenkroonStatus: "Tamamlandı",
      timelineSenkroonCompany: "Senkroon Yazılım",
      timelineSenkroonDesc: "Fabrikalar için web tabanlı maliyet hesaplama, endüstriyel reçete optimizasyonu ve ERP/CRM entegrasyonları. .NET Core, PostgreSQL ve React mimarileri üzerine çalışma ve başarıyla tamamlanan staj süreci.",
      timelineInonuDegree: "Bilgisayar Mühendisliği (Lisans Mezunu)",
      timelineInonuStatus: "2022 - 2026 (Mezun)",
      timelineInonuDesc: "Veri yapıları, algoritmalar, işletim sistemleri, veritabanı yönetim sistemleri ve dağıtık yazılım mimarileri üzerine yoğunlaşmış akademik süreç başarıyla tamamlandı.",
      principlesTitle: "Temel Mühendislik İlkelerim",
      contactHeaderTag: "// 04. İLETİŞİM & PROJE BAŞLATMA",
      contactHeading1: "Geleceğin Sistemlerini",
      contactHeading2: "Birlikte İnşa Edelim.",
      contactSub: "Karmaşık teknik zorlukları, yüksek performanslı backend çözümlerini ve kullanıcı odaklı modern web/mobil ekosistemlerini konuşmak için her zaman açığım.",
      contactEmailLabel: "Doğrudan E-posta",
      contactCopy: "Kopyala",
      contactCopied: "✓ Kopyalandı",
      contactLinkedInLabel: "Profesyonel Ağ",
      contactGithubLabel: "Açık Kaynak Kodlar",
      contactTerminalTrigger: "Terminalden Ulaş ($ contact)",
      footerCopyright: "Talha Özcan. Tüm Hakları Saklıdır. • High-Performance Web Engineering."
    }
  },
  en: {
    personal: {
      name: "Talha Özcan",
      title: "Computer Engineer & Full-Stack Systems Architect",
      shortRole: "Computer Engineer",
      university: "Inonu University",
      degree: "Computer Engineering (B.Sc. Graduate)",
      gpa: "3.25",
      status: "🟢 Available for Work // Open to Opportunities",
      bio: "Hello, I am Talha Özcan. Graduated in Computer Engineering from Inonu University with a 3.25 GPA. I architect high-performance backend systems, distributed architectures, data-consistent engines, and scalable modern web/mobile ecosystems.",
      github: "https://github.com/talhaff",
      linkedin: "https://www.linkedin.com/in/talha-özcan",
      email: "talhaozcanf@gmail.com",
      stats: [
        { label: "Academic GPA", value: "3.25 (Graduated)" },
        { label: "Architected Projects", value: "5+" },
        { label: "Uptime Target", value: "99.9%" },
        { label: "Backend Latency", value: "<45ms" }
      ],
      roles: [
        'High-Performance Backend Systems',
        'Real-Time Distributed Architectures',
        'Industrial ERP & Cost Engines',
        'Modern Mobile & Web Ecosystems'
      ]
    },
    nav: [
      { label: "Projects", href: "#projects" },
      { label: "System & Skills", href: "#skills" },
      { label: "About Me", href: "#about" },
      { label: "Contact", href: "#contact" }
    ],
    projects: [
      {
        id: 1,
        title: "Industrial Cost & ERP Quotation Engine",
        category: "ERP & Systems Architecture",
        shortDesc: "Millisecond-level dynamic cost analysis, raw material yield simulation, and automated quotation engine for manufacturing plants.",
        description: "An enterprise platform developed during my internship at Senkroon Software; calculates hundreds of variables in industrial production lines in real-time, processes complex recipe trees, and integrates seamlessly into ERP/CRM infrastructures.",
        architecture: "React 19 + .NET Core Web API + PostgreSQL + Redis Caching",
        metrics: {
          speed: "<35ms Calculation Time",
          scale: "10k+ Dynamic Recipes / Sec",
          impact: "40% Faster Quotation Turnaround"
        },
        highlights: [
          "Backend optimization of complex industrial manufacturing algorithms",
          "Multi-level indexing and query execution planning on PostgreSQL",
          "Role-Based Access Control (RBAC) and enterprise audit logging"
        ],
        tags: ["React", ".NET Core", "PostgreSQL", "ERP/CRM", "Redis"],
        github: "https://github.com/talhaff/MaliyetHesapla_V2",
        featured: true
      },
      {
        id: 2,
        title: "Taptaze - Realtime Q-Commerce Ecosystem",
        category: "Full-Stack & Mobile",
        shortDesc: "WebSocket-based live order dispatch and courier tracking platform modeled after Getir & Gorillas.",
        description: "An end-to-end distributed ecosystem built for fresh grocery logistics, featuring a client mobile app, courier dispatch portal, and real-time live routing engine.",
        architecture: "React Native + Node.js/Express + MongoDB + Socket.io",
        metrics: {
          speed: "<20ms Socket Ping",
          scale: "Bidirectional Live Geo-Stream",
          impact: "Zero-Latency Order Synchronization"
        },
        highlights: [
          "Real-time order lifecycle and map-based courier tracking via Socket.io",
          "MongoDB 2dsphere geospatial indexing for nearest courier dispatch",
          "Push notification pipeline and offline-first client storage"
        ],
        tags: ["React Native", "Node.js", "MongoDB", "Socket.io", "Geospatial"],
        github: "https://github.com/talhaff/taptaze-app",
        featured: true
      },
      {
        id: 3,
        title: "Hotel Management & Booking Core",
        category: "Enterprise Backend",
        shortDesc: "Java Spring Boot architecture, ACID-compliant room reservations, and transactional billing core.",
        description: "An enterprise backend designed to handle high-concurrency booking requests without conflicts, dynamically computing occupancy matrices with deterministic transaction isolation.",
        architecture: "Java 21 + Spring Boot 3 + PostgreSQL + Hibernate ORM + JUnit",
        metrics: {
          speed: "P99 <50ms",
          scale: "ACID Guaranteed Core",
          impact: "Zero Overbooking Risk"
        },
        highlights: [
          "Pessimistic / Optimistic locking strategies preventing double-bookings",
          "Clean Architecture & Domain Driven Design (DDD) principles",
          "RESTful API OpenAPI/Swagger documentation and high CI test coverage"
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "Clean Arch", "Hibernate"],
        github: "https://github.com/talhaff/otel-yonetim-sistemi",
        featured: true
      },
      {
        id: 4,
        title: "Arya Art Academy - High-Performance Web Portal",
        category: "Frontend & Performance",
        shortDesc: "Advanced SEO engineering, interactive course catalog, and ultra-fast edge loading scores.",
        description: "A modern institutional web platform reflecting the brand identity of Arya Art Academy, built on SSR architecture to achieve zero CLS and 100 Lighthouse performance.",
        architecture: "React + Next.js + Tailwind CSS + Vercel Edge Network",
        metrics: {
          speed: "100/100 Lighthouse Performance",
          scale: "Edge CDN Caching",
          impact: "180% Organic Search Traffic Growth"
        },
        highlights: [
          "Next.js SSR/SSG rendering strategy for optimized content delivery",
          "Dynamic schema.org JSON-LD structured microdata integration",
          "Mobile-first responsive glassmorphism user experience"
        ],
        tags: ["React", "Next.js", "Tailwind CSS", "SEO", "Edge UI"],
        github: "https://aryasanatakademim.com",
        featured: false
      },
      {
        id: 5,
        title: "Senior Engineering Creative Portfolio",
        category: "Creative Engineering",
        shortDesc: "Web Audio API sound synthesis, interactive architecture simulator, and developer CLI terminal.",
        description: "An interactive portfolio experience offering visitors a Web Audio API synthesizer, real-time FPS telemetry HUD, and an interactive API flow simulator.",
        architecture: "React 19 + Vite + Tailwind v4 + Framer Motion + Web Audio API",
        metrics: {
          speed: "60 FPS Fluid Motion",
          scale: "Zero External Audio Libraries",
          impact: "Awwwards-Caliber Micro-Interactions"
        },
        highlights: [
          "Pure mathematical sound synthesis via Web Audio API without audio files",
          "Framer Motion spring physics engine for magnetic cursor and HUD",
          "Interactive developer CLI Terminal and live architecture simulator"
        ],
        tags: ["React 19", "Tailwind 4", "Framer Motion", "Web Audio", "Vite"],
        github: "https://github.com/talhaff/website",
        featured: false
      }
    ],
    categories: ['All', 'ERP & Systems Architecture', 'Full-Stack & Mobile', 'Enterprise Backend', 'Creative Engineering'],
    skills: [
      {
        category: "Backend & Architecture",
        description: "Distributed systems, RESTful APIs, microservices architectures, and high-throughput server solutions.",
        items: [
          { name: "Node.js / Express", level: 90, tag: "Primary" },
          { name: "Java & Spring Boot", level: 85, tag: "Enterprise" },
          { name: ".NET Core Web API", level: 80, tag: "Industrial ERP" },
          { name: "REST & WebSocket / Socket.io", level: 90, tag: "Real-time" }
        ]
      },
      {
        category: "Database & Data Management",
        description: "High-performance query tuning, indexing, and data modeling in relational and NoSQL databases.",
        items: [
          { name: "PostgreSQL", level: 90, tag: "Relational / ACID" },
          { name: "MongoDB", level: 85, tag: "Document / Geospatial" },
          { name: "Redis", level: 80, tag: "In-Memory & Cache" },
          { name: "Hibernate / Entity Framework", level: 85, tag: "ORM" }
        ]
      },
      {
        category: "Modern Web & Mobile",
        description: "Ultra-fluid interfaces, robust state management, and cross-platform mobile development.",
        items: [
          { name: "React 19 & Next.js", level: 95, tag: "Core Frontend" },
          { name: "React Native", level: 85, tag: "Mobile Ecosystem" },
          { name: "Tailwind CSS 4", level: 95, tag: "Modern Styling" },
          { name: "Framer Motion", level: 90, tag: "Creative Motion" }
        ]
      },
      {
        category: "DevOps, Tools & Methodology",
        description: "Containerization, version control, CI/CD pipelines, and software design principles.",
        items: [
          { name: "Docker & Linux", level: 85, tag: "Infrastructure" },
          { name: "Git & CI/CD Pipelines", level: 90, tag: "Workflow" },
          { name: "Clean Arch & SOLID", level: 90, tag: "Software Principles" },
          { name: "System Design & UML", level: 85, tag: "Engineering" }
        ]
      }
    ],
    pipeline: [
      { step: '01', title: 'Modern UI & Mobile', tech: 'React 19 / React Native / Next.js', desc: 'Ultra-fluid user interfaces & mobile client ecosystems' },
      { step: '02', title: 'API Gateway & Services', tech: 'Node.js / Spring Boot / .NET Core', desc: 'REST, WebSocket, gRPC routing and microservices' },
      { step: '03', title: 'Storage & Caching', tech: 'PostgreSQL / MongoDB / Redis', desc: 'ACID-guaranteed transactional storage and in-memory caching' },
      { step: '04', title: 'DevOps & Reliability', tech: 'Docker / Linux / CI/CD / Monitoring', desc: 'Container deployment, high availability, and scalability' }
    ],
    principles: [
      { title: 'System Scalability', desc: 'Asynchronous architectures scaling seamlessly from single instances to distributed clusters.' },
      { title: 'Data Integrity (ACID)', desc: 'Zero data loss and deterministic transaction execution across financial and industrial processes.' },
      { title: 'Clean Architecture & SOLID', desc: 'Maintainable, decoupled, and unit-tested modular codebases.' },
      { title: 'High Performance & Low Latency', desc: 'Sub-millisecond optimization from database indexes to frontend render loops.' }
    ],
    simEndpoints: [
      {
        id: 'erp',
        name: 'Industrial Costing API',
        method: 'POST',
        path: '/api/v1/factory/calculate-cost',
        latency: '18ms',
        status: 200,
        nodes: ['Client App', 'API Gateway', '.NET Core Engine', 'PostgreSQL (Indexed)'],
        reqPayload: { factoryId: 'ERP-CORE-09', batchSize: 5000, rawMaterials: ['ALU-7075', 'TITAN-GR5'] },
        resPayload: {
          status: 'CALCULATED',
          unitCost: 142.50,
          totalCost: 712500,
          profitMargin: '28.4%',
          cacheHit: true,
          timestamp: '2026-10-10T02:00:15Z'
        }
      },
      {
        id: 'socket',
        name: 'Taptaze Q-Commerce Stream',
        method: 'WS',
        path: 'wss://stream.taptaze.app/courier/location',
        latency: '8ms',
        status: 101,
        nodes: ['React Native', 'Socket.io Cluster', 'Redis Pub/Sub', 'MongoDB (2dsphere)'],
        reqPayload: { event: 'COURIER_PING', courierId: 'CR-8821', geo: [38.3552, 38.3095] },
        resPayload: {
          event: 'DISPATCH_ACK',
          matchedOrders: 3,
          etaMinutes: 11,
          batteryLevel: '94%',
          signalQuality: 'EXCELLENT'
        }
      },
      {
        id: 'hotel',
        name: 'Spring Boot ACID Lock Core',
        method: 'POST',
        path: '/api/v2/reservations/lock-and-commit',
        latency: '29ms',
        status: 201,
        nodes: ['Web Client', 'Spring Gateway', 'Lock Manager (Pessimistic)', 'PostgreSQL ACID Core'],
        reqPayload: { roomId: 'SUITE-402', guestId: 'G-9901', dates: ['2026-11-01', '2026-11-05'] },
        resPayload: {
          reservationId: 'RES-890241',
          transactionStatus: 'COMMITTED',
          isolationLevel: 'SERIALIZABLE',
          overbookingRisk: 'ZERO_PERCENT'
        }
      }
    ],
    ui: {
      heroTitle1: "Engineering-Driven,",
      heroTitle2: "High-Scale Systems",
      heroTitle3: "Architected.",
      ctaProjects: "Explore Projects",
      ctaTerminal: "Terminal (CLI)",
      ctaContact: "Get in Touch",
      simTitle: "Talha-Engineering // Live Architecture Simulator",
      simInstruction: "Select & Trigger a Live Architecture Workflow:",
      simPipelineTitle: "System Data Flow Pipeline (Active):",
      simProcessing: "Processing Request...",
      simCompleted: "✓ Completed",
      simReqTitle: "Outgoing Request (Payload)",
      simResTitle: "Millisecond Response (Payload)",
      projectsHeaderTag: "// 01. ENGINEERING SHOWCASE",
      projectsHeading1: "Production-Grade",
      projectsHeading2: "Projects & Systems",
      projectsSub: "From industrial ERP/CRM backbones to real-time mobile logistics networks, engineered for concurrency and data integrity.",
      tabOverview: "Overview",
      tabArch: "Architecture",
      tabMetrics: "Metrics",
      archStackLabel: "Stack Architecture:",
      skillsHeaderTag: "// 02. TECH STACK & ARCHITECTURE",
      skillsHeading1: "Engineering Stack &",
      skillsHeading2: "Architecture Nodes",
      skillsSub: "Beyond syntax: understanding how distributed components communicate, ensuring data consistency, and eliminating bottlenecks.",
      skillsPipelineLabel: "End-to-End System Architecture Pipeline:",
      skillsSelectDomain: "Select Engineering Domain:",
      aboutHeaderTag: "// 03. ABOUT & CAREER JOURNEY",
      aboutHeading1: "Engineering Vision &",
      aboutHeading2: "Academic Foundations",
      aboutSub: "Translating theoretical computer science into production software, solving enterprise problems with a continuous learning mindset.",
      aboutTitle: "Problem Solver,",
      aboutTitleGradient: "Systems Architect.",
      aboutBio1: "Graduated with a 3.25 GPA in Computer Engineering from Inonu University. I approach engineering not merely as writing code, but as building resilient, measurable, and scalable systems.",
      aboutBio2: "During my software development internship at Senkroon Software, I engineered ERP/CRM solutions computing complex manufacturing costs, material yields, and scrap rates in sub-seconds.",
      aboutBio3: "Currently focusing on distributed backend architectures, high-performance database optimization, and real-time fullstack ecosystems.",
      aboutTimelineTitle: "Education & Experience Timeline",
      timelineSenkroonRole: "Software Developer (Intern)",
      timelineSenkroonStatus: "Completed",
      timelineSenkroonCompany: "Senkroon Software",
      timelineSenkroonDesc: "Web-based industrial cost estimation, recipe tree optimization, and ERP/CRM integrations. Developed with .NET Core, PostgreSQL, and React.",
      timelineInonuDegree: "Computer Engineering (B.Sc. Graduate)",
      timelineInonuStatus: "2022 - 2026 (Graduated)",
      timelineInonuDesc: "Completed rigorous academic curriculum focusing on data structures, algorithms, operating systems, database management systems, and distributed architectures.",
      principlesTitle: "Core Engineering Principles",
      contactHeaderTag: "// 04. CONTACT & INITIATE PROJECT",
      contactHeading1: "Let's Engineer the",
      contactHeading2: "Future of Systems Together.",
      contactSub: "Always open to discussing complex technical challenges, high-performance backend architectures, and user-centric modern web/mobile products.",
      contactEmailLabel: "Direct Email",
      contactCopy: "Copy",
      contactCopied: "✓ Copied",
      contactLinkedInLabel: "Professional Network",
      contactGithubLabel: "Open Source Code",
      contactTerminalTrigger: "Reach via Terminal ($ contact)",
      footerCopyright: "Talha Özcan. All Rights Reserved. • High-Performance Web Engineering."
    }
  }
};

// Default export compatibility
export const PERSONAL_INFO = PORTFOLIO_DATA.tr.personal;
export const NAV_LINKS = PORTFOLIO_DATA.tr.nav;
export const PROJECTS = PORTFOLIO_DATA.tr.projects;
export const SKILLS = PORTFOLIO_DATA.tr.skills.map(s => ({
  category: s.category,
  items: s.items.map(i => i.name)
}));
export const SKILLS_DETAILED = PORTFOLIO_DATA.tr.skills;
