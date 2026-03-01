'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery__thumb')) {
    e.preventDefault();

    const parentLink = e.target.parentElement;
    const bigSrc = parentLink.href;
    largeImg.src = bigSrc;
  }
});
