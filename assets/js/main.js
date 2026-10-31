document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-menu .btn');

  // 1. Animação de Scroll do Header
  if (header) {
    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  // 2. Abrir / Fechar Menu Hambúrguer no Celular
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Fechar Menu' : 'Abrir Menu');
    });

    // Fechar o menu automaticamente ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir Menu');
      });
    });
  }
});