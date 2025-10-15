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

// ================== ANIMASI BAR SKILL ==================
(function(){
  const fills = document.querySelectorAll('.progress-fill');
  const skillsSection = document.querySelector('.skills-section');

  function runFill() {
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    const trigger = window.innerHeight - 100; // mulai animasi 100px sebelum kelihatan
    if (rect.top < trigger) {
      fills.forEach(f => {
        const pct = parseInt(f.getAttribute('data-percentage'), 10) || 0;
        f.style.width = pct + '%';
        f.classList.add('filled');
        const percentText = f.closest('.skill-card').querySelector('.skill-percent');
        if (percentText) percentText.textContent = pct + '%';
      });
      window.removeEventListener('scroll', runFill);
    }
  }

  window.addEventListener('scroll', runFill);
  runFill(); // kalau user sudah di posisi bawah
})();
