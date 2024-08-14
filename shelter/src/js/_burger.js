import { layer } from './_layer';

export const burger = {
  menu: document.querySelector('.burger'),
  nav: document.querySelector('.nav'),
  openBurgerMenu() {
    if (!burger.menu.classList.contains('burger_opened')) {
      burger.menu.classList.add('burger_opened');
      burger.nav.classList.add('nav_opened');
      layer.showLayer();
    } else {
      burger.menu.classList.remove('burger_opened');
      burger.nav.classList.remove('nav_opened');
      layer.showLayer();
    }
  },
};
