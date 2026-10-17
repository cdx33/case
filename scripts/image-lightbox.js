(() => {
  'use strict';
  const dialog = document.getElementById('image-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const preview = dialog.querySelector('img');
  const close = dialog.querySelector('button');
  document.querySelectorAll('.figure--wide img').forEach((image) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'figure-zoom';
    button.setAttribute('aria-label', `Enlarge image: ${image.alt || 'Project figure'}`);
    image.before(button);
    button.append(image);
    button.addEventListener('click', () => {
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      dialog.showModal();
    });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { preview.removeAttribute('src'); });
})();
