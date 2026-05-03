/* =============================================
   MAQHAA — World Cup 2026 — JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- NAVBAR SCROLL ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // --- PARTICLES ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.width = (Math.random() * 2 + 1) + 'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (Math.random() * 12 + 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.opacity = Math.random() * 0.6 + 0.2;
      particlesContainer.appendChild(p);
    }
  }

  // --- FADE-IN HERO ELEMENTS ---
  const heroElements = document.querySelectorAll('.hero .fade-in');
  heroElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200 + i * 150);
  });

  // --- SCROLL REVEAL ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Stagger siblings within same parent
    const siblings = el.parentElement.querySelectorAll('.reveal');
    let idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = (idx * 0.08) + 's';
    revealObserver.observe(el);
  });

  // --- MENU TABS ---
  const tabs = document.querySelectorAll('.tab');
  const menuCards = document.querySelectorAll('.menu-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-tab');

      menuCards.forEach(card => {
        if (card.getAttribute('data-category') === cat) {
          card.style.display = 'block';
          // Re-trigger animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- BOOKING FORM SUBMIT ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = bookingForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '✓ Reservation Confirmed!';
      btn.style.background = '#25d366';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        bookingForm.reset();
      }, 3000);
    });
  }

  // --- SMOOTH SCROLL FOR ALL ANCHOR LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- STICKY MOBILE BUTTON (show after hero) ---
  const stickyBtn = document.getElementById('stickyBooking');
  const heroSection = document.getElementById('hero');
  if (stickyBtn && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        stickyBtn.style.display = 'block';
      } else {
        stickyBtn.style.display = 'none';
      }
    });
  }

  // --- NAV ACTIVE LINK ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinkItems.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = '#C9A84C';
      }
    });
  });

  // --- GALLERY PARALLAX SUBTLE ---
  const galleryItems = document.querySelectorAll('.gallery-img');
  window.addEventListener('scroll', () => {
    galleryItems.forEach(img => {
      const rect = img.closest('.gallery-item').getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.06;
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed;
        img.style.transform = `translateY(${offset}px)`;
      }
    });
  });

  // --- COUNTER ANIMATION FOR HERO STATS ---
  const statNums = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const val = el.textContent;
        if (!isNaN(parseInt(val))) {
          const end = parseInt(val);
          let start = 0;
          const duration = 1500;
          const step = (end / duration) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              el.textContent = val;
              clearInterval(interval);
            } else {
              el.textContent = Math.floor(start);
            }
          }, 16);
        }
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(num => statsObserver.observe(num));

});
