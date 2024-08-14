export const pageup = {
  showPageUpIco() {
    const pageUpIco = document.querySelector('.pageup');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      pageUpIco.classList.remove('invisible');
    } else {
      pageUpIco.classList.add('invisible');
    }
  },
};
