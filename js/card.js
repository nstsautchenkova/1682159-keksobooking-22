import { getOfferType } from './data.js';

const cardListElement = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const declarationsFragment = document.createDocumentFragment();


const createCardElement = (array) => {
  const cardElement = cardTemplate.cloneNode(true);
  const offerType = getOfferType(array.offer.type);
  cardElement.querySelector('.popup__type').textContent = offerType;

  // наполняем данными
  if (array.author.avatar) {
    cardElement.querySelector('.popup__avatar').textContent = array.author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  if (array.offer.title) {
    cardElement.querySelector('.popup__title').textContent = array.offer.title;
  } else {
    cardElement.querySelector('.popup__title').classList.add('hidden');
  }
  if (array.offer.address) {
    cardElement.querySelector('.popup__text--address').textContent = array.offer.address;
  } else {
    cardElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  if (array.offer.price) {
    cardElement.querySelector('.popup__text--price').textContent = `${array.offer.price} ₽/ночь`;
  } else {
    cardElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  if (array.offer.rooms || array.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${array.offer.rooms} комнаты для ${array.offer.guests} гостей`;
  } else {
    cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  if (array.offer.checkin || array.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${array.offer.checkin}, выезд до ${array.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  if (array.offer.description) {
    cardElement.querySelector('.popup__description').textContent = array.offer.description;
  } else {
    cardElement.querySelector('.popup__description').classList.add('hidden');
  }
  if (array.offer.description) {
    // создать li.popup__feature c class popup__feature--  в popup__features
    cardElement.querySelector('.popup__features').textContent = ' ';
    const featuresList = cardElement.querySelector('.popup__features');
    for (let i = 0; i < array.offer.features.length; i++) {
      const featuresLi = document.createElement('li');
      featuresLi.classList.add('popup__feature');
      const featuresClass = 'popup__feature--' + array.offer.features[i];
      featuresLi.classList.add(featuresClass);
      featuresList.append(featuresLi);
    }
  } else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }
  if (array.offer.description) {
    // создать img.popup__photo в popup__photos
    cardElement.querySelector('.popup__photos').textContent = ' ';
    const photoList = cardElement.querySelector('.popup__photos');
    for (let i = 0; i < array.offer.photos.length; i++) {
      const photoImg = new Image(45, 40);
      photoImg.classList.add('popup__photo');
      photoImg.src = array.offer.photos[i];
      photoList.append(photoImg);
    }
  } else {
    cardElement.querySelector('.popup__photos').classList.add('hidden');
  }


  //вывод
  declarationsFragment.appendChild(cardElement);
  return cardListElement.appendChild(declarationsFragment);
};



export { createCardElement };
