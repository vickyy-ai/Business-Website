/* ========================================
   GSAP ANIMATIONS — Hero, Navbar & Sections
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  initNavbarScroll();
  animateEntrance();
  animateSections();
});

/* ========================================
   ENTRANCE ANIMATIONS
   ======================================== */
function animateEntrance() {
  const tl = gsap.timeline({
    defaults: { ease: 'power4.out' },
    delay: 0.3,
  });

  // Wrap each title line's text in a span for slide-up reveal
  document.querySelectorAll('.hero__title-line').forEach((line) => {
    const text = line.textContent;
    line.innerHTML = '<span class="hero__title-line-inner">' + text + '</span>';
  });

  // 1. Navbar elements fade in and slide down
  tl.to('.navbar__logo', {
    opacity: 1,
    y: 0,
    duration: 1,
  })
    .to('.navbar__nav', {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.8')
    .to('.navbar__cta', {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.8')

    // 2. Hero title lines slide up
    .to('.hero__title-line-inner', {
      y: '0%',
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
    }, '-=0.6')

    // 3. Subtitle fades in
    .to('#hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.7')

    // 4. CTA button fades in
    .to('#hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.6')

    // 5. Scroll indicator fades in
    .to('#hero-scroll', {
      opacity: 1,
      duration: 1,
    }, '-=0.4');
}

/* ========================================
   SCROLL-TRIGGERED SECTION ANIMATIONS
   ======================================== */
function animateSections() {
  // Projects header
  gsap.from('.projects__header .section-title', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects__header',
      start: 'top 80%',
    },
  });

  gsap.from('.projects__header .section-subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects__header',
      start: 'top 80%',
    },
  });

  // Project cards
  document.querySelectorAll('.project-card').forEach((card) => {
    const image = card.querySelector('.project-card__image');
    const info = card.querySelector('.project-card__info');

    gsap.from(image, {
      x: card.classList.contains('project-card--reverse') ? 80 : -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
      },
    });

    gsap.from(info, {
      x: card.classList.contains('project-card--reverse') ? -80 : 80,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
      },
    });
  });

  // Works section
  gsap.from('.works__container', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.works',
      start: 'top 80%',
    },
  });

  gsap.from('.works__item', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.works__grid',
      start: 'top 80%',
    },
  });

  // Events section
  gsap.from('.events__header', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.events',
      start: 'top 80%',
    },
  });

  gsap.from('.events__info', {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.2, // slight delay after header
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.events__container',
      start: 'top 80%',
    },
  });

  gsap.from('.events__video-player', {
    y: 80,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.events__video',
      start: 'top 80%',
    },
  });

  // Awards section
  gsap.from('.awards__header', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.awards',
      start: 'top 80%',
    },
  });

  // Animate award items with a smooth stagger
  const awardsContainer = document.querySelector('.awards__container');
  if (awardsContainer) {
    const items = awardsContainer.querySelectorAll('.award-item');
    
    gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: awardsContainer,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // --- CRAZY 3D PARALLAX TILT ---
    items.forEach(item => {
      const visual = item.querySelector('.award-visual');
      
      item.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = visual.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        
        // Calculate rotation (max 15 degrees)
        const rotX = ((mouseY / height) - 0.5) * -15;
        const rotY = ((mouseX / width) - 0.5) * 15;
        
        gsap.to(visual, {
          rotateX: rotX,
          rotateY: rotY,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: true
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(visual, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true
        });
      });
    });
  }

  // Navbar color change - entire white zone extending to the footer
  ScrollTrigger.create({
    trigger: '.projects',
    start: 'top 60px',
    endTrigger: '#footer',
    end: 'bottom bottom',
    onEnter: () => updateNavbarColors('dark'),
    onLeaveBack: () => updateNavbarColors('light'),
  });
}

/* ========================================
   NAVBAR COLOR TRANSITIONS
   ======================================== */
function updateNavbarColors(mode) {
  const navbar = document.querySelector('.navbar');

  if (mode === 'dark') {
    navbar.classList.add('navbar--dark-text');
  } else {
    navbar.classList.remove('navbar--dark-text');
  }
}

/* ========================================
   NAVBAR SCROLL EFFECT
   ======================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    
    if (currentScrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide navbar on scroll up, show on scroll down (user's specific request)
    if (currentScrollY < lastScrollY && currentScrollY > 100) {
      navbar.classList.add('navbar--hidden');
    } else {
      navbar.classList.remove('navbar--hidden');
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });
}

