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

// Contact form: if the action is a web endpoint (e.g. Formspree), submit in place and show a message.
(function () {
  const form = document.getElementById("audit-form");
  if (!form || !/^https:/.test(form.getAttribute("action"))) return;
  form.removeAttribute("enctype");
  const status = form.querySelector(".form__status");
  const btn = form.querySelector("button");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true; status.className = "form__status"; status.textContent = "Sending…";
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      form.reset();
      status.className = "form__status ok";
      status.textContent = "Thanks. Simon will be in touch within one business day.";
    } catch {
      status.className = "form__status err";
      status.textContent = "Something went wrong. Please email simon@veritium.com.au directly.";
    } finally { btn.disabled = false; }
  });
})();
