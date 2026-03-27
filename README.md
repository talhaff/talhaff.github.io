# Talha Özcan | Software Engineering Portfolio

Bu proje, bir bilgisayar mühendisi adayı olarak geliştirdiğim sistemleri, teknik yetkinliklerimi ve vizyonumu sergileyen profesyonel bir portfolyo web sitesidir. Yazılım geliştirme süreçlerinde **SOLID** prensipleri ve **Temiz Kod (Clean Code)** standartları esas alınarak inşa edilmiştir.

🚀 **Canlı Demo:
 
## 🛠️ Teknik Yığın (Tech Stack)

* **Frontend:** [React.js](https://reactjs.org/) (Bileşen tabanlı mimari)
* **Build Tool:** [Vite](https://vitejs.dev/) (Yüksek performanslı geliştirme ortamı)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Modern ve responsive tasarım)
* **Deployment:** Vercel / GitHub Pages

## 🏗️ Mimari ve Prensipler

Bu portfolyo, sadece bir web sitesi değil, bir mühendislik ürünü olarak tasarlanmıştır:

* **SOLID & Modular Design:** Her bileşen (Navbar, Hero, Projects, vb.) kendi sorumluluğuna sahiptir. Veri ve arayüz katmanları tamamen birbirinden ayrılmıştır (**Separation of Concerns**).
* **Dynamic Data Layer:** Tüm içerik `src/data/portfolio.js` üzerinden yönetilir. Bu sayede kodun içine dokunmadan içerik güncellenebilir (**Open/Closed Principle**).
* **Responsive UI:** Mobil, tablet ve masaüstü cihazlar için %100 uyumlu, akıcı bir kullanıcı deneyimi sunar.
* **Modern UX:** Glassmorphism etkileri, yumuşak geçişler ve optimize edilmiş tipografi.

## 📁 Proje Yapısı

```text
src/
├── components/   # Tekrar kullanılabilir küçük UI parçaları (Atomic)
├── data/         # Sitenin tüm içerik ve konfigürasyon verileri
├── sections/     # Sayfanın ana bölümleri (Hero, Projects, Skills, vb.)
├── App.jsx       # Ana uygulama birleştirici
└── index.css     # Tailwind v4 yapılandırması