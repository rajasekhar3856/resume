// Matrix background animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = canvas.width / 20;
const drops = Array(Math.floor(cols)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = '16px monospace';
  drops.forEach((y, x) => {
    const text = String.fromCharCode(0x30A0 + Math.random()*96);
    ctx.fillText(text, x*20, y*20);
    drops[x] = y*20 > canvas.height || Math.random() > 0.975 ? 0 : y+1;
  });
}

setInterval(draw, 50);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Initial hero section animation
gsap.from('[data-animate="hero"]', {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: 'power3.out'
});

gsap.from('[data-animate="title"]', {
  duration: 1.2,
  opacity: 0,
  y: 30,
  ease: 'power4.out',
  delay: 0.3
});

gsap.from('[data-animate="subtitle"]', {
  duration: 1,
  opacity: 0,
  y: 20,
  ease: 'power3.out',
  delay: 0.6
});

// Contact links stagger animation
gsap.from('[data-animate="contact-item"]', {
  duration: 0.8,
  opacity: 0,
  y: 20,
  stagger: 0.2,
  ease: 'back.out(1.7)',
  delay: 1
});

// Cards scroll animations
gsap.utils.toArray('[data-animate="card"]').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    scale: 0.95,
    ease: 'power3.out'
  });
});

// Timeline events stagger animation
gsap.utils.toArray('[data-animate="timeline-event"]').forEach((event, i) => {
  gsap.from(event, {
    scrollTrigger: {
      trigger: event,
      start: 'top bottom-=50',
      toggleActions: 'play none none reverse'
    },
    duration: 0.6,
    opacity: 0,
    x: -30,
    ease: 'power2.out',
    delay: i * 0.2
  });
});

// Skills hover animation
const skillCategories = document.querySelectorAll('.skill-category, .responsibility-category');
skillCategories.forEach(category => {
  category.addEventListener('mouseenter', () => {
    gsap.to(category, {
      duration: 0.3,
      scale: 1.02,
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      ease: 'power2.out'
    });
  });
  
  category.addEventListener('mouseleave', () => {
    gsap.to(category, {
      duration: 0.3,
      scale: 1,
      boxShadow: 'none',
      ease: 'power2.out'
    });
  });
});

// Footer animation
gsap.from('[data-animate="footer"]', {
  scrollTrigger: {
    trigger: '[data-animate="footer"]',
    start: 'top bottom-=50'
  },
  duration: 1,
  opacity: 0,
  y: 20,
  ease: 'power3.out'
});
