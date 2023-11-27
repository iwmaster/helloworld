import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* output each row as an H2 element */
  const h2 = document.createElement('h2');
  [...block.children].forEach((row) => {
    h2.innerHTML = row.innerHTML;
    h2.append(h2);
  });
  block.innerHTML = '';
  block.append(h2);
}
