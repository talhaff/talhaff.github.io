export const PERSONAL_INFO = {
  name: "Talha Özcan",
  title: "Bilgisayar Mühendisi Adayı",
  university: "İnönü Üniversitesi",
  description: "Karmaşık sistemlerin mimarisini kurgulayan ve sürdürülebilir backend çözümleri üreten bir mühendis adayıyım.",
  github: "https://github.com/talhaff",
  linkedin: "https://www.linkedin.com/in/talha-özcan",
  email: "talhaozcanf@gmail.com"
};

export const NAV_LINKS = [
  { label: "Projeler", href: "#projects" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Hakkımda", href: "#about" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Hotel Management System",
    description: "Java Spring Boot mimarisiyle geliştirilen, PostgreSQL veri tabanı entegrasyonuna sahip uçtan uca otel yönetim paneli.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    technologies: ["React", "Node.js"],
    github: "https://github.com/talhaff/otel-yonetim-sistemi",
  },
  {
    id: 2,
    title: "Taptaze SaaS",
    description: "Restoranlar için modern QR kodlu sipariş yönetim sistemi. Node.js backend ve MongoDB Atlas bulut veritabanı yapısı.",
    tags: ["Node.js", "MongoDB", "Express"],
    technologies: ["React", "Node.js"],
    github: "https://github.com/talhaozcan/taptaze",
  },
  {
    id: 3,
    title: "Minimalist Study Room",
    description: "Blender kullanarak tasarladığım, düşük poligonlu ve estetik odaklı 3D çalışma alanı tasarımı.",
    tags: ["Blender", "3D Design"],
    technologies: ["Blender"],
    github: "#",
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React & Next.js", "Astro Framework", "Tailwind CSS", "TypeScript"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js / Express", "Java / Spring Boot", "PostgreSQL / MongoDB", "Data Mining"]
  },
  {
    category: "Tools & Design",
    items: ["Docker / Linux", "Git / GitHub Actions", "Blender 3D Modeling", "Compiler Design"]
  }
];