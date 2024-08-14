import { burger } from './_burger';

export const layer = {
  layer: document.querySelector('.layer'),
  showLayer() {
    if (!layer.layer.classList.contains('layer_on')) {
      layer.layer.classList.add('layer_on');
      document.body.classList.add('hide-scroll');
      document.body.style.marginRight = `${this.getScrollWidth()}px`;
    } else {
      layer.layer.classList.remove('layer_on');
      document.body.classList.remove('hide-scroll');
      document.body.style.marginRight = `0px`;
    }
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
