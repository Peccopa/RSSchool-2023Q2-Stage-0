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
}
