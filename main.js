/* ============================================
   Y2O — Youth2Opportunities
   Complete JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* --- Nav scroll effect --- */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Mobile hamburger --- */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("mobile-open");
      document.body.style.overflow = navLinks.classList.contains("mobile-open")
        ? "hidden"
        : "";
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("mobile-open");
        document.body.style.overflow = "";
      }),
    );
  }

  /* --- Scroll reveal --- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* --- Smooth anchor scroll --- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          (nav.offsetHeight + 20);
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  /* --- Portfolio preview toggle --- */
  const ppStudentView = document.getElementById("pp-student-view");
  const ppExternalView = document.getElementById("pp-external-view");
  const ppBtns = document.querySelectorAll(".pp-toggle-btn");

  if (ppBtns.length && ppStudentView && ppExternalView) {
    ppBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        ppBtns.forEach((b) =>
          b.classList.toggle("active", b.dataset.view === view),
        );
        ppStudentView.style.display = view === "student" ? "" : "none";
        ppExternalView.style.display = view === "external" ? "" : "none";
      });
    });
  }

  /* --- Growth wheel SVG rings --- */
  const wheels = [
    { name: "Leadership", pct: 72, color: "var(--teal)" },
    { name: "Communication", pct: 85, color: "var(--navy)" },
    { name: "Teamwork", pct: 68, color: "var(--maroon)" },
    { name: "Problem Solving", pct: 55, color: "var(--gold)" },
    { name: "Initiative", pct: 90, color: "var(--teal)" },
    { name: "Self-Management", pct: 60, color: "var(--navy)" },
  ];
  const wheelContainer = document.getElementById("pp-wheel");
  if (wheelContainer) {
    wheels.forEach((w) => {
      const d = document.createElement("div");
      d.className = "pp-wheel-item";
      d.innerHTML = `<div class="pp-wheel-ring"><svg viewBox="0 0 36 36"><path class="bg" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831"/><path class="fg" style="stroke:${w.color};stroke-dasharray:${w.pct},100" d="M18 2.0845a15.9155 15.9155 0 010 31.831 15.9155 15.9155 0 010-31.831"/></svg><div class="pp-wheel-label"><span class="pct">${w.pct}</span><span class="nm">${w.name}</span></div></div>`;
      wheelContainer.appendChild(d);
    });
  }

  /* --- Learn More accordions --- */
  const lmCards = document.querySelectorAll(".lm-card");
  lmCards.forEach((card) => {
    const header = card.querySelector(".lm-card-header");
    const body = card.querySelector(".lm-card-body");
    if (header && body) {
      body.style.display = "none";
      header.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        // Close all
        lmCards.forEach((c) => {
          c.classList.remove("open");
          const b = c.querySelector(".lm-card-body");
          if (b) b.style.display = "none";
          const chev = c.querySelector(".lm-chevron");
          if (chev) chev.textContent = "+";
        });
        // Open clicked (if was closed)
        if (!isOpen) {
          card.classList.add("open");
          body.style.display = "";
          const chev = card.querySelector(".lm-chevron");
          if (chev) chev.textContent = "−";
        }
      });
    }
  });

  /* --- Waitlist form --- */
  // get all forms. This is to handle multiple forms in the same page
  let forms = document.querySelectorAll(".launchlist-form-popup");
  // submit form
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get the action url of the form
      let action = form.getAttribute("action");

      // Get the form data
      let formData = new FormData(form);

      // Submit the form
      fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            // replace iframe src
            let iframe = document.querySelector(".launchlist-iframe");
            iframe.src = data.embeddedLink;
            // show modal
            toggleModal();
          } else {
            // You can catch error here
            alert(data.error);
          }
        })
        .catch((error) => {
          // You can catch error here
          console.error(error);
        });
    });
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // keep autoplay after user interaction
    },
    navigation: {
      nextEl: ".portfolio-swiper .swiper-button-next",
      prevEl: ".portfolio-swiper .swiper-button-prev",
    },
  });

  const demoSwiper = new Swiper(".demo-swiper", {
    loop: false,
    pagination: {
      el: ".demo-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".demo-swiper .swiper-button-next",
      prevEl: ".demo-swiper .swiper-button-prev",
    },
  });
});
