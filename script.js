// Reveal sections on scroll and animate the market-simulation bars.
(function () {
  document.getElementById("yr").textContent = new Date().getFullYear();

  const targets = document.querySelectorAll(".section__head, .steps li, .card, .work__item, .split > *, .founder > *, .contact > *, .sim");
  targets.forEach((el) => { if (!el.classList.contains("sim")) el.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach((el) => io.observe(el));
})();
