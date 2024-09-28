import { layer } from './_layer';
import { PetCard } from './PetCard';

export const carousel = {
  carousel: document.querySelector('.carousel'),
  sliderClip: document.querySelector('.slider__clip'),
  frameClip: [[], [], []],
  data: [],
  modalWindow: {},
  currentFramePackSize: 0,
  resizeFramePackSize: 0,

  framePackSize() {
    if (window.innerWidth > 1131) {
      return (this.currentFramePackSize = 3);
    }
    if (window.innerWidth < 1131 && window.innerWidth > 767) {
      return (this.currentFramePackSize = 2);
    }
    if (window.innerWidth <= 767) {
      return (this.currentFramePackSize = 1);
    }
  },

  screenCheckSize() {
    if (window.innerWidth > 1131) {
      carousel.resizeFramePackSize = 3;
    }
    if (window.innerWidth < 1131 && window.innerWidth > 767) {
      carousel.resizeFramePackSize = 2;
    }
    if (window.innerWidth <= 767) {
      carousel.resizeFramePackSize = 1;
    }
    if (carousel.resizeFramePackSize !== carousel.currentFramePackSize)
      carousel.screenResize();
  },

  screenResize() {
    if (carousel.resizeFramePackSize > carousel.currentFramePackSize) {
      carousel.addFrames(this.data);
    }
    if (carousel.resizeFramePackSize < carousel.currentFramePackSize) {
      carousel.removeFrames(this.data);
    }
    this.framePackSize();
  },

  addFrames(data) {
    for (let i = 0; i < this.frameClip.length; i += 1) {
      let randomNum = this.randomInt(0, data.length - 1);
      if (
        this.frameClip[i].includes(randomNum) ||
        this.frameClip[i - 1]?.includes(randomNum) ||
        this.frameClip[i + 1]?.includes(randomNum)
      ) {
        i -= 1;
      } else {
        this.frameClip[i].push(randomNum);
      }
    }
    this.sliderClip.replaceChildren();
    this.frameClip.flat().forEach((e) => {
      new PetCard(data[e]).generatePetCardMid(this.sliderClip, 'after');
    });
  },

  removeFrames() {
    this.frameClip.forEach((e) => {
      e.pop();
      this.sliderClip.removeChild(this.sliderClip.lastChild);
    });
  },

  addCarouselEvents(pets) {
    this.data = pets;
    this.carousel.addEventListener('click', this.clickSliderButton);
    this.sliderClip.addEventListener('animationend', this.sliderAnimationEnd);
    window.addEventListener('resize', this.screenCheckSize);
  },

  clickSliderButton(e) {
    carousel.clickOnCarousel(e);
  },

  sliderAnimationEnd(e) {
    if (e.animationName === 'move-left') {
      carousel.sliderClip.classList.remove('transition-left');
      carousel.getLeftFramePack(carousel.data);
      carousel.carousel.addEventListener('click', carousel.clickSliderButton);
    }
    if (e.animationName === 'move-right') {
      carousel.sliderClip.classList.remove('transition-right');
      carousel.getRightFramePack(carousel.data);
      carousel.carousel.addEventListener('click', carousel.clickSliderButton);
    }
  },

  showPetCardModal(path) {
    const card = this.data.find((e) => e.img === path);
    layer.showLayer();
    this.modalWindow = new PetCard(card);
    this.modalWindow.generateModalWindow();
  },

  clickOnCarousel(e) {
    if (e.target.classList.contains('pet-card'))
      this.showPetCardModal(e.target.childNodes[0].attributes.src.nodeValue);
    if (e.target.parentElement.classList.contains('pet-card'))
      this.showPetCardModal(
        e.target.parentNode.childNodes[0].attributes.src.nodeValue
      );
    if (e.target.classList.contains('carousel__btn_left')) {
      this.sliderClip.classList.add('transition-left');
      carousel.carousel.removeEventListener(
        'click',
        carousel.clickSliderButton
      );
    }
    if (e.target.classList.contains('carousel__btn_right')) {
      this.sliderClip.classList.add('transition-right');
      carousel.carousel.removeEventListener(
        'click',
        carousel.clickSliderButton
      );
    }
  },

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getFrameClip(data) {
    for (let framePack = 0; framePack < this.frameClip.length; framePack += 1) {
      for (let i = 0; i < this.framePackSize(); i += 1) {
        let randomNum = this.randomInt(0, data.length - 1);
        if (
          this.frameClip[framePack].includes(randomNum) ||
          this.frameClip[framePack - 1]?.includes(randomNum)
        ) {
          i -= 1;
        } else {
          this.frameClip[framePack].push(randomNum);
        }
      }
    }
    return this.frameClip;
  },

  getRightFramePack(data) {
    this.frameClip.shift();
    this.frameClip.push([]);
    for (let i = 0; i < this.framePackSize(); i += 1) {
      let randomNum = this.randomInt(0, data.length - 1);
      if (
        this.frameClip[2].includes(randomNum) ||
        this.frameClip[1].includes(randomNum)
      ) {
        i -= 1;
      } else {
        this.frameClip[2].push(randomNum);
        new PetCard(data[randomNum]).generatePetCardMid(
          this.sliderClip,
          'after'
        );
        this.sliderClip.removeChild(this.sliderClip.firstChild);
      }
    }
  },

  getLeftFramePack(data) {
    this.frameClip.pop();
    this.frameClip.unshift([]);
    for (let i = 0; i < this.framePackSize(); i += 1) {
      let randomNum = this.randomInt(0, data.length - 1);
      if (
        this.frameClip[0].includes(randomNum) ||
        this.frameClip[1].includes(randomNum)
      ) {
        i -= 1;
      } else {
        this.frameClip[0].push(randomNum);
        new PetCard(data[randomNum]).generatePetCardMid(
          this.sliderClip,
          'before'
        );
        this.sliderClip.removeChild(this.sliderClip.lastChild);
      }
    }
  },

  fillFrameClip(data) {
    this.getFrameClip(data)
      .flat()
      .forEach((e) => {
        new PetCard(data[e]).generatePetCardMid(this.sliderClip, 'after');
      });
  },

  mouseScreen() {
    let mouseStartX = null;
    this.carousel.addEventListener(
      'mousedown',
      function (event) {
        carousel.sliderClip.setAttribute('mouseinframe', 'in');
        mouseStartX = event.screenX;
      },
      false
    );
    this.carousel.addEventListener(
      'mouseup',
      function (event) {
        let mouseEndX = event.screenX;
        if (mouseStartX - mouseEndX > 270) {
          carousel.sliderClip.classList.add('transition-right');
        } else if (mouseEndX - mouseStartX > 270) {
          carousel.sliderClip.classList.add('transition-left');
        }
        carousel.sliderClip.setAttribute('mouseinframe', 'out');
      },
      false
    );
  },

  touchScreen() {
    let touchStartX = null;
    this.carousel.addEventListener(
      'touchstart',
      function (event) {
        carousel.sliderClip.setAttribute('mouseinframe', 'in');
        touchStartX = event.changedTouches[0].screenX;
      },
      false
    );
    this.carousel.addEventListener(
      'touchend',
      function (event) {
        let touchEndX = event.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 27) {
          carousel.sliderClip.classList.add('transition-right');
        } else if (touchEndX - touchStartX > 27) {
          carousel.sliderClip.classList.add('transition-left');
        }
        carousel.sliderClip.setAttribute('mouseinframe', 'out');
      },
      false
    );
  },
};
