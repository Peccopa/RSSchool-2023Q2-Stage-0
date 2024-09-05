'use strict';

import { loader } from './js/_loader';
import { pageup } from './js/_pageup';
import { burger } from './js/_burger';
import { layer } from './js/_layer';
import { carousel } from './js/_carousel';

window.addEventListener('load', (event) => {
  const url = document.querySelector('.pets-page')
    ? '../data/data.json'
    : './src/data/data.json';

  const getData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  getData(url).then((data) => {
    loadPage(data);
  });
});

const loadPage = function (data) {
  loader.removeLoader();
  window.addEventListener('scroll', pageup.showPageUpIco);
  burger.menu.addEventListener('click', burger.openBurgerMenu);
  layer.layer.addEventListener('click', burger.openBurgerMenu);
  burger.nav.addEventListener('click', (e) => burger.link(e));
  carousel.fillFrameClip(data);
  carousel.addCarouselEvents(data);
  carousel.mouseScreen();
  carousel.touchScreen();
};

// console.log(`
// Oценка за задание 100 баллов.

// Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
// блок <header>: +2
// блок Not only: +2
// блок About: +2
// блок Our Friends: +2
// блок Help: +2
// блок In addition: +2
// блок <footer>: +2

// Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
// блок <header>: +2
// блок Not only: +2
// блок About: +2
// блок Our Friends: +2
// блок Help: +2
// блок In addition: +2
// блок <footer>: +2

// Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
// блок <header>: +2
// блок Not only: +2
// блок About: +2
// блок Our Friends: +2
// блок Help: +2
// блок In addition: +2
// блок <footer>: +2

// Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
// блок <header>: +2
// блок Our Friends: +2
// блок <footer>: +2

// Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
// блок <header>: +2
// блок Our Friends: +2
// блок <footer>: +2

// Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
// блок <header>: +2
// блок Our Friends: +2
// блок <footer>: +2

// Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
// нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
// нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5
// нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5
// нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5

// Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8
// на странице Main: +4
// на странице Pets: +4

// При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4

// Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
// Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8
// `);
