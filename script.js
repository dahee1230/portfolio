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

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    
    // 디버깅을 위한 콘솔 로그
    console.log('Modal opened:', modalId);
    
    // 간단한 애니메이션으로 변경
    setTimeout(() => {
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
      }
    }, 10);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    console.log('Modal closing:', modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 배경 스크롤 복원
  }
}

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    const modalId = event.target.id;
    closeModal(modalId);
  }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const openModal = document.querySelector('.modal[style*="block"]');
    if (openModal) {
      closeModal(openModal.id);
    }
  }
});

// Top Button 기능
document.addEventListener('DOMContentLoaded', function() {
  const topButton = document.getElementById('topButton');
  
  // 스크롤 시 버튼 표시/숨김
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      topButton.classList.add('visible');
    } else {
      topButton.classList.remove('visible');
    }
  });
  
  // 버튼 클릭 시 맨 위로 스크롤
  topButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
