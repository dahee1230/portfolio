// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Initialize all functionality
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initPortfolioFilters();
    initServicesTabs();
    initTestimonialSlider();
    initFormHandlers();
    initSmoothScrolling();
    initMobileMenu();

    // Navigation functionality
    function initNavigation() {
        const header = document.querySelector('.header');
        const scrollIndicator = document.querySelector('.scroll-btn');

        // Header scroll effect
        gsap.to(header, {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(15px)',
            scrollTrigger: {
                trigger: 'body',
                start: 'top -80px',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        });

        // Scroll indicator click
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: '#about',
                    ease: 'power2.inOut'
                });
            });
        }

        // Navigation links smooth scroll
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                if (target.startsWith('#')) {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: target,
                        ease: 'power2.inOut'
                    });
                }
            });
        });
    }

    // Hero section animations
    function initHeroAnimations() {
        const tl = gsap.timeline();

        // Animate hero elements on load
        tl.from('.hero-title', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-buttons .btn-primary', {
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        .from('.hero-buttons .btn-link', {
            duration: 0.6,
            x: -30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.circle-image', {
            duration: 1.2,
            scale: 0.8,
            rotation: 10,
            opacity: 0,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.8')
        .from('.scroll-indicator', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3');

        // Floating animation for circle image
        gsap.to('.circle-image', {
            duration: 6,
            y: -20,
            rotation: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Dot patterns animation
        gsap.to('.dot-pattern-1', {
            duration: 8,
            rotation: 360,
            repeat: -1,
            ease: 'none'
        });

        gsap.to('.dot-pattern-2', {
            duration: 10,
            rotation: -360,
            repeat: -1,
            ease: 'none'
        });
    }

    // Scroll-triggered animations
    function initScrollAnimations() {
        // Section fade-in animations
        gsap.utils.toArray('section').forEach((section, index) => {
            if (!section.classList.contains('hero')) {
                gsap.from(section, {
                    duration: 1,
                    y: 100,
                    opacity: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                });
            }
        });

        // Stats counter animation
        gsap.utils.toArray('.stat-number').forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
            
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 80%',
                onEnter: () => {
                    gsap.from({ value: 0 }, {
                        duration: 2,
                        value: numericValue,
                        ease: 'power2.out',
                        onUpdate: function() {
                            const currentValue = Math.round(this.targets()[0].value);
                            if (finalValue.includes('%')) {
                                stat.textContent = currentValue + '%';
                            } else if (finalValue.includes('+')) {
                                stat.textContent = currentValue + '+';
                            } else if (finalValue.includes('k')) {
                                stat.textContent = (currentValue / 1000).toFixed(1) + 'k';
                            } else if (finalValue.includes('x')) {
                                stat.textContent = currentValue + 'x';
                            }
                        }
                    });
                }
            });
        });

        // Portfolio items animation
        gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
            gsap.from(item, {
                duration: 0.8,
                y: 80,
                opacity: 0,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Process steps animation
        gsap.utils.toArray('.step-item').forEach((step, index) => {
            gsap.from(step, {
                duration: 0.8,
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: step,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Image hover effects
        gsap.utils.toArray('.image-grid img, .service-image img').forEach(img => {
            img.addEventListener('mouseenter', () => {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });

            img.addEventListener('mouseleave', () => {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Portfolio filters
    function initPortfolioFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                portfolioItems.forEach((item, index) => {
                    const category = item.dataset.category;
                    const shouldShow = filter === 'all' || category === filter;

                    if (shouldShow) {
                        gsap.to(item, {
                            duration: 0.5,
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            delay: index * 0.1,
                            ease: 'power2.out'
                        });
                        item.style.display = 'block';
                    } else {
                        gsap.to(item, {
                            duration: 0.3,
                            opacity: 0,
                            scale: 0.8,
                            y: 20,
                            ease: 'power2.in',
                            onComplete: () => {
                                item.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });

        // Portfolio item hover effects
        portfolioItems.forEach(item => {
            const overlay = item.querySelector('.portfolio-overlay');
            
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    duration: 0.3,
                    y: -10,
                    ease: 'power2.out'
                });
                
                if (overlay) {
                    gsap.to(overlay, {
                        duration: 0.3,
                        y: 0,
                        opacity: 1,
                        ease: 'power2.out'
                    });
                }
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    duration: 0.3,
                    y: 0,
                    ease: 'power2.out'
                });
                
                if (overlay) {
                    gsap.to(overlay, {
                        duration: 0.3,
                        y: '100%',
                        opacity: 0,
                        ease: 'power2.in'
                    });
                }
            });
        });
    }

    // Services tabs functionality
    function initServicesTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;

                // Remove active class from all buttons and panels
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));

                // Add active class to clicked button and corresponding panel
                btn.classList.add('active');
                document.getElementById(targetTab)?.classList.add('active');

                // Animate panel content
                const activePanel = document.getElementById(targetTab);
                if (activePanel) {
                    const content = activePanel.querySelector('.service-content');
                    gsap.from(content, {
                        duration: 0.6,
                        opacity: 0,
                        y: 30,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    // Testimonial slider
    function initTestimonialSlider() {
        const items = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.nav-dot');
        let currentSlide = 0;

        function showSlide(index) {
            // Hide all items
            items.forEach((item, i) => {
                item.classList.remove('active');
                dots[i]?.classList.remove('active');
            });

            // Show current item
            items[index]?.classList.add('active');
            dots[index]?.classList.add('active');

            // Animate content
            const activeItem = items[index];
            if (activeItem) {
                gsap.from(activeItem.children, {
                    duration: 0.8,
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            }
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto-play slider
        setInterval(() => {
            currentSlide = (currentSlide + 1) % items.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Form handlers
    function initFormHandlers() {
        // Newsletter form
        const subscribeForm = document.querySelector('.subscribe-form');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = subscribeForm.querySelector('input[type="email"]').value;
                
                if (email) {
                    // Animate success feedback
                    gsap.to(subscribeForm, {
                        duration: 0.3,
                        scale: 0.95,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(subscribeForm, {
                                duration: 0.3,
                                scale: 1,
                                ease: 'back.out(1.7)'
                            });
                        }
                    });
                    
                    // Show success message (you can customize this)
                    alert('Thank you for subscribing!');
                    subscribeForm.reset();
                }
            });
        }

        // Contact form
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Animate form submission
                gsap.to(contactForm, {
                    duration: 0.3,
                    scale: 0.98,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to(contactForm, {
                            duration: 0.3,
                            scale: 1,
                            ease: 'back.out(1.7)'
                        });
                    }
                });
                
                // Show success message (you can customize this)
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                }
            });
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        let isMenuOpen = false;

        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                
                // Animate hamburger menu
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (isMenuOpen) {
                    gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
                    gsap.to(spans[1], { opacity: 0, duration: 0.3 });
                    gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
                    
                    // Show menu
                    navMenu.style.display = 'flex';
                    gsap.from(navMenu, {
                        duration: 0.3,
                        opacity: 0,
                        y: -20,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(spans, { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
                    
                    // Hide menu
                    gsap.to(navMenu, {
                        duration: 0.3,
                        opacity: 0,
                        y: -20,
                        ease: 'power2.in',
                        onComplete: () => {
                            navMenu.style.display = 'none';
                        }
                    });
                }
            });
        }
    }

    // Button hover effects
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.3,
                y: -3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Video play button effect
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            gsap.to(playBtn, {
                duration: 0.2,
                scale: 0.9,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.to(playBtn, {
                        duration: 0.2,
                        scale: 1,
                        ease: 'back.out(1.7)'
                    });
                }
            });
            // Add your video play logic here
            alert('Video would play here!');
        });
    }

    // Parallax effect for hero background
    gsap.to('.gradient-shape', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        gsap.to('body', {
            duration: 0.5,
            opacity: 1,
            ease: 'power2.out'
        });
    });

    // Set initial body opacity
    gsap.set('body', { opacity: 0 });
});

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    gsap.to(window, {
        duration: 1.2,
        scrollTo: sectionId,
        ease: 'power2.inOut'
    });
}