import { carousel } from './_carousel';
import { layer } from './_layer';
import { PetCard } from './PetCard';

export const pagination = {
  data: [],
  queue: [],
  modalWindow: {},
  pageNumber: 1,
  cardsNumber: 3,
  carousel: document.querySelector('.carousel'),
  sliderClip: document.querySelector('.slider-clip'),
  petsNavigation: document.querySelector('.pets-navigation'),
  paginationNumber: document.querySelector('.pagination-number'),
  pagMinRightBtn: document.querySelector('.pag-min-right'),
  pagMaxRightBtn: document.querySelector('.pag-max-right'),
  pagMinLeftBtn: document.querySelector('.pag-min-left'),
  pagMaxLeftBtn: document.querySelector('.pag-max-left'),

  getDataForPagination(cards) {
    this.data = cards.map((e, i, a) => {
      e.img = '..' + e.img.slice(5);
      return e;
    });
    const newData = [];
    for (let i = 0; i < 6; i += 1) {
      newData.push(this.data);
    }
    this.data = newData.flat();
  },

  getQueueForPagination() {
    let count = 0;
    const queue = [];
    while (count < this.data.length / 4) {
      const arr = [];
      for (let i = 0; i < 4; i += 1) {
        let randomNum = carousel.randomInt(0, 7);
        if (arr.includes(randomNum) || queue[count - 1]?.includes(randomNum)) {
          i -= 1;
        } else {
          arr.push(randomNum);
        }
      }
      queue.push(arr);
      count += 1;
    }
    this.queue = queue.flat();
    const testArray = this.queue.map((e) => this.data[e].name);
    console.log(testArray);
  },

  getNumberOfCardsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1250 && screenWidth > 640) return 6;
    if (screenWidth > 1250) return 8;
    if (screenWidth <= 640) return 3;
  },

  addPaginationEvents() {
    this.touchScreen();
    this.mouseScreen();
    window.addEventListener('resize', this.resizeCardList);
    this.petsNavigation.addEventListener('click', this.clickOnPetsNavigation);
    this.carousel.addEventListener('click', this.clickOnPetsCard);
  },

  resizeCardList(e) {
    const resizeCardNumbers = pagination.getNumberOfCardsPerPage();
    // ADD CARDS
    if (resizeCardNumbers > pagination.cardsNumber) {
      if (resizeCardNumbers === 6) {
        pagination.pageNumber = Math.ceil(pagination.pageNumber / 2);
        pagination.paginationNumber.textContent = pagination.pageNumber;
        pagination.createCardList();
        pagination.cardsNumber = resizeCardNumbers;
      }
      if (resizeCardNumbers === 8) {
        pagination.pageNumber = Math.ceil(pagination.pageNumber / 1.5);
        pagination.paginationNumber.textContent = pagination.pageNumber;
        pagination.createCardList();
        pagination.cardsNumber = resizeCardNumbers;
      }
    }
    // REMOVE CARDS
    if (resizeCardNumbers < pagination.cardsNumber) {
      if (resizeCardNumbers === 6) {
        pagination.pageNumber = Math.floor((pagination.pageNumber / 3) * 4);
        pagination.paginationNumber.textContent = pagination.pageNumber;
        pagination.createCardList();
        pagination.cardsNumber = resizeCardNumbers;
      }
      if (resizeCardNumbers === 3) {
        if (pagination.pageNumber > 1) pagination.pageNumber *= 2;
        pagination.paginationNumber.textContent = pagination.pageNumber;
        pagination.createCardList();
        pagination.cardsNumber = resizeCardNumbers;
      }
    }
  },

  clickOnPetsNavigation(e) {
    if (e.target.classList.contains('pag-min-right')) pagination.pagMinRight();
    if (e.target.classList.contains('pag-max-right')) pagination.pagMaxRight();
    if (e.target.classList.contains('pag-min-left')) pagination.pagMinLeft();
    if (e.target.classList.contains('pag-max-left')) pagination.pagMaxLeft();
    pagination.checkNavButtons();
  },

  checkNavButtons() {
    if (this.pageNumber === 1) {
      this.pagMinLeftBtn.classList.add('inactive-arrow');
      this.pagMaxLeftBtn.classList.add('inactive-arrow');
    }
    if (this.pageNumber > 1) {
      this.pagMinLeftBtn.classList.remove('inactive-arrow');
      this.pagMaxLeftBtn.classList.remove('inactive-arrow');
    }
    if (this.pageNumber === Math.ceil(this.data.length / this.cardsNumber)) {
      this.pagMinRightBtn.classList.add('inactive-arrow');
      this.pagMaxRightBtn.classList.add('inactive-arrow');
    }
    if (this.pageNumber < Math.ceil(this.data.length / this.cardsNumber)) {
      this.pagMinRightBtn.classList.remove('inactive-arrow');
      this.pagMaxRightBtn.classList.remove('inactive-arrow');
    }
  },

  createCardList() {
    this.petsNavigation.removeEventListener(
      'click',
      this.clickOnPetsNavigation
    );
    document.querySelector('.slider__clip').style.opacity = 0;
    setTimeout(() => {
      document.querySelectorAll('.pet-card').forEach((e) => e.remove());
      for (let i = 0; i < this.cardsNumber; i += 1) {
        if (
          this.data[this.queue[(this.pageNumber - 1) * this.cardsNumber + i]]
        ) {
          new PetCard(
            this.data[this.queue[(this.pageNumber - 1) * this.cardsNumber + i]]
          ).generatePetCardMid(
            document.querySelector('.slider__clip'),
            'after'
          );
        }
      }
      if (document.querySelectorAll('.pet-card').length !== this.cardsNumber)
        window.scrollTo(0, 0);
      document.querySelector('.slider__clip').style.opacity = 1;
      this.petsNavigation.addEventListener('click', this.clickOnPetsNavigation);
    }, 300);
  },

  pagMinRight() {
    if (this.pageNumber * this.cardsNumber < this.queue.length) {
      this.pageNumber += 1;
      this.paginationNumber.textContent = this.pageNumber;
      this.createCardList();
    }
  },

  pagMinLeft() {
    if (this.pageNumber * this.cardsNumber > this.cardsNumber) {
      this.pageNumber -= 1;
      this.paginationNumber.textContent = this.pageNumber;
      this.createCardList();
    }
  },

  pagMaxRight() {
    this.pageNumber = Math.ceil(this.data.length / this.cardsNumber);
    this.paginationNumber.textContent = this.pageNumber;
    this.createCardList();
  },

  pagMaxLeft() {
    this.pageNumber = 1;
    this.paginationNumber.textContent = this.pageNumber;
    this.createCardList();
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
          pagination.pagMinRight();
        } else if (mouseEndX - mouseStartX > 270) {
          pagination.pagMinLeft();
        }
        carousel.sliderClip.setAttribute('mouseinframe', 'out');
        pagination.checkNavButtons();
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
          pagination.pagMinRight();
        } else if (touchEndX - touchStartX > 27) {
          pagination.pagMinLeft();
        }
        carousel.sliderClip.setAttribute('mouseinframe', 'out');
        pagination.checkNavButtons();
      },
      false
    );
  },

  clickOnPetsCard(e) {
    if (e.target.classList.contains('pet-card'))
      pagination.showPetCardModal(
        e.target.childNodes[0].attributes.src.nodeValue
      );
    if (e.target.parentElement.classList.contains('pet-card'))
      pagination.showPetCardModal(
        e.target.parentNode.childNodes[0].attributes.src.nodeValue
      );
  },

  showPetCardModal(path) {
    const card = this.data.find((e) => e.img === path);
    layer.showLayer();
    this.modalWindow = new PetCard(card);
    this.modalWindow.generateModalWindow();
  },
};
