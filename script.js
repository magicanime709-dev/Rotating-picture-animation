
const box = document.querySelector('.box');

// mouse (desktop)
box.addEventListener('mousedown', () => {
  box.classList.add('paused');
});

box.addEventListener('mouseup', () => {
  box.classList.remove('paused');
});

box.addEventListener('mouseleave', () => {
  box.classList.remove('paused');
});

// touch (mobile)
box.addEventListener('touchstart', () => {
  box.classList.add('paused');
});

box.addEventListener('touchend', () => {
  box.classList.remove('paused');
});

// prevents pop up options
box.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});