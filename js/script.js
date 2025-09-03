// Animasi scroll sederhana
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".product-card, .about, .hero");
  elements.forEach(el => {
    let pos = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (pos < windowHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Tambahan efek animasi
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

/*teks pengembangan*/
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.className = "dev-banner";

  const text = document.createElement("span");
  text.textContent = "🚧 Web ini sedang dalam proses pengembangan 🚧 design by abdulcss";

  banner.appendChild(text);
  document.body.prepend(banner);
});
