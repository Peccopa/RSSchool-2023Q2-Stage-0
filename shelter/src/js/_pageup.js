export const pageup = {
  showPageUpIco() {
    const pageUpIco = document.querySelector('.pageup');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      pageUpIco.classList.remove('invisible');
      setTimeout(() => {
        document.querySelectorAll('.nav__link').forEach((e) => {
          e.classList.remove('nav_selected');
        });
        document.querySelector('.nav__link_main').classList.add('nav_selected');
      }, 500);
    } else {
      pageUpIco.classList.add('invisible');
    }
  },
};
