(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent = '☰';
    }));
  }
  const notes = [
    '“You do not have to rush every beautiful thing.”',
    '“Let today be a little softer around the edges.”',
    '“There is room for a fresh start in an ordinary afternoon.”',
    '“Connection can begin with a simple hello.”',
    '“Make a little space for the thing that makes you curious.”',
    '“You are allowed to enjoy the small, good things.”',
    '“A pause is part of the journey, not a delay.”'
  ];
  const draw = document.querySelector('#draw-note');
  const note = document.querySelector('#jar-note');
  let last = -1;
  if (draw && note) draw.addEventListener('click', () => {
    let next; do { next = Math.floor(Math.random() * notes.length); } while (notes.length > 1 && next === last);
    last = next; note.classList.add('changing');
    window.setTimeout(() => { note.textContent = notes[next]; note.classList.remove('changing'); }, 120);
  });
})();
