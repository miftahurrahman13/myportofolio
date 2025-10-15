// Inisialisasi animasi scroll
AOS.init({
  duration: 1000,
  once: true
});

// Tahun otomatis di footer
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-container");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(40px)";
  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
});

