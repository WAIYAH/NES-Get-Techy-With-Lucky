/* ===========================================
   GRAFINEX — JavaScript Functionality
   Portfolio Two: Graphic Designer
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. SMOOTH SCROLLING FOR NAV LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // ===== 2. MOBILE HAMBURGER MENU TOGGLE =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const menuOverlay = document.getElementById('menu-overlay');

  function openMobileMenu() {
    mobileNav.classList.add('open');
    menuOverlay.classList.remove('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileNav) {
      mobileNav.classList.remove('open');
      menuOverlay.classList.add('hidden');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu on link click
  document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== 3. PORTFOLIO FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;

      portfolioCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          // Trigger reflow for animation
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ===== 4. ANIMATED STAT COUNTERS =====
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.target, 10);
      const suffix = stat.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out curve
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        stat.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Observe stats section
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  // ===== 5. TESTIMONIAL AUTO-CAROUSEL =====
  const carousel = document.getElementById('testimonial-carousel');
  const track = document.getElementById('testimonial-track');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;
  const totalSlides = dots.length || 3;
  let carouselInterval;

  function goToSlide(index) {
    currentSlide = index;
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-purple-500', i === currentSlide);
      dot.classList.toggle('bg-zinc-600', i !== currentSlide);
    });
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }

  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 4000);
  }

  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToSlide(i));
  });

  // Pause on hover
  if (carousel) {
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
    startCarousel();
  }

  // ===== 6. SCROLL-TRIGGERED FADE-IN ANIMATIONS =====
  const fadeElements = document.querySelectorAll('.fade-in-section');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ===== 7. SKILL BAR ANIMATION =====
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===== 8. ACTIVE NAV LINK HIGHLIGHTING =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // ===== 9. CONTACT FORM VALIDATION =====
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.field-error').forEach(f => f.classList.remove('field-error'));
      form.querySelectorAll('.error-message').forEach(m => m.classList.remove('show'));

      // Validate Name
      const name = form.querySelector('#form-name');
      if (!name.value.trim()) {
        showError(name, 'name-error', 'Please enter your name.');
        isValid = false;
      }

      // Validate Email
      const email = form.querySelector('#form-email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'email-error', 'Please enter your email.');
        isValid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        showError(email, 'email-error', 'Please enter a valid email address.');
        isValid = false;
      }

      // Validate Project Type
      const projectType = form.querySelector('#form-project');
      if (!projectType.value) {
        showError(projectType, 'project-error', 'Please select a project type.');
        isValid = false;
      }

      // Validate Message
      const message = form.querySelector('#form-message');
      if (!message.value.trim()) {
        showError(message, 'message-error', 'Please enter your message.');
        isValid = false;
      }

      // If valid, show success
      if (isValid) {
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.classList.remove('hidden');
          form.reset();
          // Hide success after 5 seconds
          setTimeout(() => successMsg.classList.add('hidden'), 5000);
        }
      }
    });
  }

  /**
   * Show a validation error on a form field.
   * @param {HTMLElement} field - The input/select/textarea element
   * @param {string} errorId - The id of the error message span
   * @param {string} msg - The error message text
   */
  function showError(field, errorId, msg) {
    field.classList.add('field-error');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('show');
    }
  }

  // ===== 10. BACK-TO-TOP BUTTON =====
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
