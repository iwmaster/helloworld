import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* output each row as an H2 element */
  const h2 = document.createElement('h2');
  [...block.children].forEach((row) => {
    h2.innerHTML = row.innerHTML;
  });
  block.append(h2);
}