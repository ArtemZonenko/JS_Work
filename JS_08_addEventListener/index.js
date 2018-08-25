'use strict';

const galleryItems = [{
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: 'alt text 1',
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: 'alt text 2',
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: 'alt text 3',
  },

];

document.addEventListener(
  'DOMContentLoaded',
  createElements.bind(null, galleryItems),
);

function createElements(arr) {
  const parent = document.querySelector('.js-image-gallery');
  parent.innerHTML = `<div class="fullview">
    <img src="${arr[0].fullview}" alt="${arr[0].alt}">
  </div>
  <ul class="preview">
  </ul>`;

  const ul = document.querySelector(".preview");
  ul.innerHTML = createPreview(arr);

  ul.addEventListener("click", changeView);
}

const createPreview = array => array.reduce((accum, el) => {
  accum += `<li><img src="${el.preview}" data-fullview="${el.fullview}" alt="${el.alt}"></li>`;
  return accum;
}, []);


function changeView(evt) {
  const liS = Array.from(document.querySelectorAll(".preview > li > img"));
  if (liS.indexOf(evt.target) < 0) return;
  const dest = evt.target.dataset.fullview;
  console.log(dest);
  if (!dest) return;
  document.querySelector(".fullview").firstElementChild["src"] = dest;
}
