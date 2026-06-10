document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.collapsible-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.closest('.collapsible');
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      section.classList.toggle('collapsed', expanded);
    });
  });
});
