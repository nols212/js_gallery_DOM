'use strict';

const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('.gallery__thumb');

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const largeImg = document.getElementById('largeImg');
    const parentLink = image.parentElement;
    const bigSrc = parentLink.href;

    largeImg.src = bigSrc;
  });
});
