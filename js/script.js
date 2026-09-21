document.addEventListener('DOMContentLoaded', () => {

  // Preloader
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => preloader.classList.add('hide'));
  setTimeout(() => preloader.classList.add('hide'), 1200);

  // Navbar scroll state
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    backTop.classList.toggle('show', window.scrollY > 500);
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Menu tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`.menu-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });

  // Reservation form
  const form = document.getElementById('reservaForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = '¡Gracias! Tu solicitud de reserva fue recibida. Te contactaremos pronto.';
    form.reset();
    setTimeout(() => formMsg.textContent = '', 6000);
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll reveal
  const revealTargets = document.querySelectorAll('.menu-card, .g-item, .testi-card, .about-grid, .reservas-grid');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
});
