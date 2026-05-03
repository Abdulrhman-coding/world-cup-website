/* =============================================
   MAQHAA — World Cup 2026 — JavaScript (Arabic RTL)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- NAVBAR SCROLL ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // --- FOOTBALL PARTICLES ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    // Regular gold dust particles
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      const size = (Math.random() * 2.5 + 1) + 'px';
      p.style.width = size;
      p.style.height = size;
      p.style.animationDuration = (Math.random() * 14 + 8) + 's';
      p.style.animationDelay = (Math.random() * 12) + 's';
      p.style.opacity = Math.random() * 0.5 + 0.2;
      particlesContainer.appendChild(p);
    }
    // Football emoji floaters
    const footballEmojis = ['⚽', '★', '⚽', '★', '⚽'];
    footballEmojis.forEach((emoji, i) => {
      const el = document.createElement('div');
      el.textContent = emoji;
      el.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 14 + 10}px;
        left: ${Math.random() * 100}%;
        opacity: 0;
        animation: particleFloat ${Math.random() * 16 + 12}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        pointer-events: none;
        filter: opacity(0.25);
      `;
      particlesContainer.appendChild(el);
    });
  }

  // --- FADE-IN HERO ELEMENTS ---
  document.querySelectorAll('.hero .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 250 + i * 160);
  });

  // --- SCROLL REVEAL ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => {
    const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = (idx * 0.09) + 's';
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
      btn.textContent = '✓ تم تأكيد حجزك!';
      btn.style.background = '#25d366';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        bookingForm.reset();
      }, 3500);
    });
  }

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- STICKY MOBILE BUTTON (show after hero) ---
  const stickyBtn = document.getElementById('stickyBooking');
  const heroSection = document.getElementById('hero');
  if (stickyBtn && heroSection) {
    window.addEventListener('scroll', () => {
      stickyBtn.style.display = heroSection.getBoundingClientRect().bottom < 0 ? 'block' : 'none';
    });
  }

  // --- ACTIVE NAV LINK ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 120) current = section.getAttribute('id');
    });
    navLinkItems.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) link.style.color = '#C9A84C';
    });
  });

  // --- GALLERY PARALLAX ---
  const galleryItems = document.querySelectorAll('.gallery-img');
  window.addEventListener('scroll', () => {
    galleryItems.forEach(img => {
      const rect = img.closest('.gallery-item').getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.05;
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
          const step = (end / 1500) * 16;
          const interval = setInterval(() => {
            start += step;
            if (start >= end) { el.textContent = val; clearInterval(interval); }
            else { el.textContent = Math.floor(start); }
          }, 16);
        }
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(num => statsObserver.observe(num));

  // --- FIELD SVG ENTRANCE ANIMATION ---
  const fieldSvg = document.querySelector('.field-svg');
  if (fieldSvg) {
    fieldSvg.style.opacity = '0';
    fieldSvg.style.transform = 'scale(1.04)';
    fieldSvg.style.transition = 'opacity 1.8s ease, transform 2s ease';
    setTimeout(() => {
      fieldSvg.style.opacity = '0.55';
      fieldSvg.style.transform = 'scale(1)';
    }, 300);
  }

  // --- CARD TILT EFFECT ON HOVER ---
  document.querySelectorAll('.exp-card, .offer-card, .testi-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
