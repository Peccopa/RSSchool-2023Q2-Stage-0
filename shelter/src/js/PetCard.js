import { layer } from './_layer';

export class PetCard {
  constructor({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) {
    (this.name = name),
      (this.img = img),
      (this.type = type),
      (this.breed = breed),
      (this.description = description),
      (this.age = age),
      (this.inoculations = inoculations),
      (this.diseases = diseases),
      (this.parasites = parasites);
  }

  generatePetCardMin(parent) {}

  generatePetCardMid(parent, position = 'before') {
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';
    const petImg = document.createElement('img');
    petImg.className = 'pet-card__img';
    petImg.setAttribute(`src`, `${this.img}`);
    petImg.setAttribute(`alt`, `${this.breed}`);
    petCard.append(petImg);
    const petTitle = document.createElement('h4');
    petTitle.classList = 'title title-h4';
    petTitle.textContent = `${this.name}`;
    petCard.append(petTitle);
    const petButton = document.createElement('button');
    petButton.classList = 'button pet-card__button';
    petButton.textContent = 'Learn more';
    petCard.append(petButton);
    position === 'before' ? parent.prepend(petCard) : parent.append(petCard);
  }

  generatePetCardMax(parent) {}

  generateModalWindow() {
    const modalWindow = document.createElement('div');
    modalWindow.classList = 'modal-window invisible';
    const modalImg = document.createElement('img');
    modalImg.classList = 'modal-window__img';
    modalImg.src = this.img;
    modalImg.alt = this.breed;
    modalImg.setAttribute('draggable', false);
    modalWindow.append(modalImg);
    const modalContent = document.createElement('div');
    modalContent.classList = 'modal-window__content';
    modalWindow.append(modalContent);
    const contentHeader = document.createElement('div');
    contentHeader.classList = 'modal-window__content-header';
    modalContent.append(contentHeader);
    const modalTitle = document.createElement('h3');
    modalTitle.classList = 'title title-h3 modal-window__title';
    modalTitle.textContent = this.name;
    contentHeader.append(modalTitle);
    const modalSubtitle = document.createElement('h4');
    modalSubtitle.classList = 'title title-h4 modal-window__subtitle';
    modalSubtitle.textContent = `${this.type} - ${this.breed}`;
    contentHeader.append(modalSubtitle);
    const modalText = document.createElement('h5');
    modalText.classList = 'title title-h4 modal-window__text';
    modalText.textContent = this.description;
    modalContent.append(modalText);
    const modalList = document.createElement('ul');
    modalList.classList.add('modal-window__list');
    modalContent.append(modalList);
    const listKeys = Object.keys(this).slice(5);
    for (let i = 0; i < 4; i++) {
      const modalListItem = document.createElement('li');
      modalListItem.classList.add('modal-window__list-item');
      modalListItem.textContent = `${
        listKeys[i][0].toUpperCase() + listKeys[i].slice(1)
      }:`;
      const modalListSpan = document.createElement('span');
      modalListSpan.classList.add('modal-window__span');
      modalListSpan.textContent = ` ${this[listKeys[i]]}`;
      modalListItem.append(modalListSpan);
      modalList.append(modalListItem);
    }
    const modalClose = document.createElement('div');
    modalClose.classList.add('modal-window__close');
    modalWindow.append(modalClose);
    const modalCross = document.createElement('div');
    modalCross.classList.add('modal-window__cross');
    modalClose.append(modalCross);
    const modalCrossLine1 = document.createElement('div');
    modalCrossLine1.classList.add('modal-window__cross-line-1');
    modalCross.append(modalCrossLine1);
    const modalCrossLine2 = document.createElement('div');
    modalCrossLine2.classList.add('modal-window__cross-line-2');
    modalCross.append(modalCrossLine2);
    modalClose.addEventListener('click', this.closeModalWindow);
    document.querySelector('.page').prepend(modalWindow);
    setTimeout(() => {
      modalWindow.classList.remove('invisible');
      modalWindow.style.left = `${50}%`;
    }, 0);
  }
  closeModalWindow(event) {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.left = `${150}%`;
    layer.showLayer();
    setTimeout(() => {
      modalWindow.remove();
    }, 500);
  }
}
