document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const sectionId = link.getAttribute('href').substring(1);
      document.querySelector(`#${sectionId}`).scrollIntoView({
        behavior: 'smooth',
      });

      // Update active link
      navLinks.forEach((nav) => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
