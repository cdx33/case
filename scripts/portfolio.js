/* Progressive enhancement only: case content stays readable without JavaScript. */
(() => {
  'use strict';
  document.querySelectorAll('.stat-digit[data-target]').forEach((element) => {
    const target = Number.parseInt(element.dataset.target, 10);
    if (Number.isFinite(target)) element.textContent = String(target);
  });
})();
