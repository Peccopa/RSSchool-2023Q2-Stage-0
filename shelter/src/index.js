'use strict';

window.addEventListener('load', (event) => {
  removeLoader();

  const pageUpIco = document.querySelector('.pageup');
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition > 100) {
      pageUpIco.classList.remove('invisible');
    } else {
      pageUpIco.classList.add('invisible');
    }
  });
});

const removeLoader = () => {
  setTimeout(() => {
    document.querySelector('.page').classList.add('opacity-1');
    document.querySelector('.loading').classList.add('opacity-0');
  }, 500);
  setTimeout(() => {
    document.querySelector('.loading').style.display = 'none';
  }, 1000);
};
