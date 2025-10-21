// Portfolio Website JavaScript

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Navigation smooth scroll
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Header background change on scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
  });

  // Portfolio button hover effects
  const portfolioButtons = document.querySelectorAll(".portfolio-text button");

  portfolioButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Skills animation trigger
  const skillsSection = document.querySelector("#skills");

  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Skills animation is handled by the existing jQuery code in HTML
          console.log("Skills section is visible");
        }
      });
    });

    observer.observe(skillsSection);
  }
});

// Contact form validation (if needed)
function validateContactForm(form) {
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector("textarea");

  if (!email.value || !message.value) {
    alert("Please fill in all required fields");
    return false;
  }

  return true;
}

// Utility function for smooth animations
function animateElement(element, properties, duration = 300) {
  return new Promise((resolve) => {
    element.style.transition = `all ${duration}ms ease`;

    Object.keys(properties).forEach((prop) => {
      element.style[prop] = properties[prop];
    });

    setTimeout(resolve, duration);
  });
}

const tl = gsap.timeline({ repeat: -1 });
tl.fromTo(".tl1", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }).to(".tl1", { opacity: 0, y: -50, duration: 1 }).fromTo(".tl2", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, "-=0.5");
