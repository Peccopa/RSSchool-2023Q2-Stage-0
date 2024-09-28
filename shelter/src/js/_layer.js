import { burger } from './_burger';
import { carousel } from './_carousel';

export const layer = {
  layer: document.querySelector('.layer'),
  pageUpIco: document.querySelector('.pageup'),
  showLayer() {
    if (!layer.layer.classList.contains('layer_on')) {
      layer.layer.classList.add('layer_on');
      document.body.classList.add('hide-scroll');
      document.body.style.marginRight = `${this.getScrollWidth()}px`;
      if (window.scrollY > 100) {
        this.pageUpIco.classList.add('invisible');
        this.pageUpIco.style.right = `-100px`;
      }
    } else {
      layer.layer.classList.remove('layer_on');
      document.body.classList.remove('hide-scroll');
      document.body.style.marginRight = `0px`;
      if (document.querySelector('.modal-window')) {
        const modalWindow = document.querySelector('.modal-window');
        modalWindow.style.left = `${150}%`;
        setTimeout(() => {
          modalWindow.remove();
        }, 500);
      }
      if (window.scrollY > 100) {
        this.showPageUpIco();
      }
    }
  },
  showPageUpIco() {
    this.pageUpIco.style.right = `30px`;
    this.pageUpIco.classList.remove('invisible');
  },
  getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  },
};
