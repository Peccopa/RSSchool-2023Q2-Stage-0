import { PetCard } from './PetCard';

export const carousel = {
  carousel: document.querySelector('.carousel'),
  sliderClip: document.querySelector('.slider__clip'),
  frameClip: [[], [], []],
  data: [],

  framePackSize() {
    // if (window.innerWidth < 1200 && window.innerWidth > 960) return 2;
    // if (window.innerWidth < 960) return 1;
    return 3;
  },

  addCarouselEvents(data) {
    this.data = data;
    this.carousel.addEventListener('click', this.clickSliderButton);
    this.sliderClip.addEventListener('animationend', this.sliderAnimationEnd);
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

  clickOnCarousel(e) {
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
      )
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
    console.log('test');
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
};
