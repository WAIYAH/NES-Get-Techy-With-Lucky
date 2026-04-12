/* ===========================================
   NEXUS ICT — JavaScript Functionality
   Portfolio Three: ICT Consultant
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. SMOOTH SCROLLING =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

  // ===== 2. MOBILE HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.remove('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      menuOverlay.classList.add('hidden');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMobileMenu);
  }

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ===== 3. HERO TYPING EFFECT =====
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'IT Infrastructure',
      'Cloud Architecture',
      'Cybersecurity',
      'Digital Transformation',
      'Data Analytics'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeLoop() {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === current.length) {
        typingSpeed = 2000; // pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      setTimeout(typeLoop, typingSpeed);
    }

    typeLoop();
  }

  // ===== 4. SCROLL-TRIGGERED REVEAL ANIMATIONS =====
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ===== 5. ANIMATED STAT COUNTERS =====
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.target, 10);
      const suffix = stat.dataset.suffix || '';
      const duration = 2200;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.textContent = Math.floor(eased * target) + suffix;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          stat.textContent = target + suffix;
        }
      }

      requestAnimationFrame(tick);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObs.observe(statsSection);
  }

  // ===== 6. CASE STUDIES FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');

      const cat = btn.dataset.filter;

      caseCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'block';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ===== 7. TESTIMONIAL CAROUSEL =====
  const slider = document.getElementById('testimonial-slider');
  const dots = document.querySelectorAll('.t-dot');
  let currentSlide = 0;
  const totalSlides = dots.length || 3;
  let autoSlide;

  function goToSlide(i) {
    currentSlide = i;
    if (slider) slider.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, idx) => {
      d.classList.toggle('bg-sky-500', idx === i);
      d.classList.toggle('bg-slate-300', idx !== i);
    });
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }

  function startAuto() { autoSlide = setInterval(nextSlide, 5000); }
  function stopAuto()  { clearInterval(autoSlide); }

  dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));

  const carouselWrap = document.getElementById('testimonial-carousel');
  if (carouselWrap) {
    carouselWrap.addEventListener('mouseenter', stopAuto);
    carouselWrap.addEventListener('mouseleave', startAuto);
    startAuto();
  }

  // ===== 8. ACTIVE NAV HIGHLIGHTING =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
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
      let valid = true;

      // Clear previous
      form.querySelectorAll('.field-error').forEach(f => f.classList.remove('field-error'));
      form.querySelectorAll('.error-msg').forEach(m => m.classList.remove('show'));

      const name = form.querySelector('#f-name');
      const email = form.querySelector('#f-email');
      const service = form.querySelector('#f-service');
      const message = form.querySelector('#f-message');
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim()) { flagError(name, 'err-name', 'Name is required.'); valid = false; }
      if (!email.value.trim()) { flagError(email, 'err-email', 'Email is required.'); valid = false; }
      else if (!emailRe.test(email.value.trim())) { flagError(email, 'err-email', 'Enter a valid email address.'); valid = false; }
      if (!service.value) { flagError(service, 'err-service', 'Please select a service.'); valid = false; }
      if (!message.value.trim()) { flagError(message, 'err-message', 'Message is required.'); valid = false; }

      if (valid) {
        const success = document.getElementById('form-success');
        if (success) {
          success.classList.remove('hidden');
          form.reset();
          setTimeout(() => success.classList.add('hidden'), 5000);
        }
      }
    });
  }

  function flagError(field, errorId, msg) {
    field.classList.add('field-error');
    const el = document.getElementById(errorId);
    if (el) { el.textContent = msg; el.classList.add('show'); }
  }

  // ===== 10. BACK-TO-TOP BUTTON =====
  const btt = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (btt) {
      btt.classList.toggle('show', window.scrollY > 300);
    }
  });

  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== 11. NAVBAR BACKGROUND ON SCROLL =====
  const header = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }
  });

});
