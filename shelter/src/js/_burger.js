import { layer } from './_layer';

export const burger = {
  menu: document.querySelector('.burger'),
  nav: document.querySelector('.nav'),
  openBurgerMenu() {
    if (
      !burger.menu.classList.contains('burger_opened') &&
      !layer.layer.classList.contains('layer_on')
    ) {
      burger.menu.classList.add('burger_opened');
      burger.nav.classList.add('nav_opened');
      layer.showLayer();
    } else {
      burger.menu.classList.remove('burger_opened');
      burger.nav.classList.remove('nav_opened');
      layer.showLayer();
    }
  },
  link(e) {
    const target = e.target.classList;
    if (target.contains('nav_selected')) burger.openBurgerMenu();
    if (target.contains('nav__link') && !target.contains('nav_selected')) {
      document.querySelectorAll('.nav__link').forEach((e) => {
        e.classList.remove('nav_selected');
      });
      target.add('nav_selected');
    }
    if (
      document.querySelector('.page').offsetWidth + layer.getScrollWidth() <
      768
    ) {
      if (e.target.hasAttribute('data-link')) burger.openBurgerMenu();
    }
  },
};
