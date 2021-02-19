import { getRandomInteger, getRandomDecimal, getRandomEl, getRandomArray } from './util.js';

const NUMBER_IMG_AVATAR_MIN = 1;
const NUMBER_IMG_AVATAR_MAX = 8;
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_X_DECIMAL_DIGITS = 5;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const LOCATION_Y_DECIMAL_DIGITS = 5;
const TITLE = 'Информацию об объявлении';
const PRICE_MAX = 7;
const ROOMS_MAX = 9;
const QUESTS_MAX = 12;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['2:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Помещение большое, светлое, просторное. В нем трое больших окон. Справа от дверей стоят книжные шкафы. Их пять, и каждая заполнена книгами, журналами, газетами.';
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const ARRAY_DECLARATION_COUNT = 10;
const OFFER_TYPE = 2;


// Функция, по герерации массива из рандомных элементов (констант и готовых функций)
const createDeclaration = () => {
  const nubmerImgAvatar = getRandomInteger(NUMBER_IMG_AVATAR_MIN, NUMBER_IMG_AVATAR_MAX);
  const locationX = getRandomDecimal(LOCATION_X_MIN, LOCATION_X_MAX, LOCATION_X_DECIMAL_DIGITS);
  const locationY = getRandomDecimal(LOCATION_Y_MIN, LOCATION_Y_MAX, LOCATION_Y_DECIMAL_DIGITS);

  return {
    author: {
      avatar: 'img/avatars/user0' + nubmerImgAvatar + '.png',
    },
    offer: {
      title: TITLE,
      address: `${locationX}, ${locationY}`,
      price: getRandomInteger(1, PRICE_MAX),
      type: getRandomEl(TYPES),
      rooms: getRandomInteger(1, ROOMS_MAX),
      guests: getRandomInteger(1, QUESTS_MAX),
      checkin: getRandomEl(CHECKINS),
      checkout: getRandomEl(CHECKOUTS),
      features: getRandomArray(FEATURES),
      description: DESCRIPTION,
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

// Функция, возвращающая массив длинной arrayCout, каждый элемент = createDeclaration
const createArrayDeclarations = (arrayCount) => {
  const arrayDeclarations = new Array(arrayCount).fill(null).map(() => createDeclaration());
  return arrayDeclarations
};

// Функция, возвращающая тип жилья
const getOfferType = (TYPES) => {
  switch (TYPES) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Любой тип жилья';
  }
};

const offerType = getOfferType(TYPES[OFFER_TYPE]);

const declarations = createArrayDeclarations(ARRAY_DECLARATION_COUNT);
export { declarations, offerType, getOfferType};

