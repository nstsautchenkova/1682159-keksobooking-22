import {offerType } from './data.js';

const cardListElement = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const declarationsFragment = document.createDocumentFragment();


// функция, которая выполняет отрисовку по данные
const createCardElement = (array) => {
  const cardElement = cardTemplate.cloneNode(true);

  // наполняем данными
  array.forEach(({ author }) => {
    cardElement.querySelector('.popup__avatar').src = author.avatar;
  });

  array.forEach(({ offer }) => {
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = offerType;
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__description').textContent = offer.description;

    // создать li.popup__feature c class popup__feature--  в popup__features
    cardElement.querySelector('.popup__features').textContent = ' ';
    const offerFeatures = offer.features;
    for (let i = 0; i < offerFeatures.length; i++) {
      const featufesLi = document.createElement('li');
      featufesLi.classList.add('popup__feature');
      const featuresClass = 'popup__feature--' + offerFeatures[i];
      featufesLi.classList.add(featuresClass);
      cardElement.querySelector('.popup__features').append(featufesLi);
    }
    // создать img.popup__photo в popup__photos
    cardElement.querySelector('.popup__photos').textContent = ' ';
    const offerPhotos = offer.photos;
    for (let i = 0; i < offerPhotos.length; i++) {
      const photoImg = new Image(45, 40);
      photoImg.classList.add('popup__photo');
      photoImg.src = offerPhotos[i];
      cardElement.querySelector('.popup__photos').append(photoImg);
    }
  });

  //вывод
  declarationsFragment.appendChild(cardElement);
  return cardListElement.appendChild(declarationsFragment);
};

export {createCardElement};
























