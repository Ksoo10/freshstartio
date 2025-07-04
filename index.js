document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeElements.forEach(element => observer.observe(element));
});


document.querySelectorAll('.accordion-details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('.accordion-details').forEach(other => {
        if (other !== detail) other.open = false;
      });
    }
  });
});


