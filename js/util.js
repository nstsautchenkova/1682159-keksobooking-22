import {NUMBER_IMG_AVATAR_MIN, NUMBER_IMG_AVATAR_MAX, LOCATION_X_MIN, LOCATION_X_MAX, LOCATION_X_DECIMAL_DIGITS, LOCATION_Y_MIN, LOCATION_Y_MAX, LOCATION_Y_DECIMAL_DIGITS, TITLE, PRICE_MAX, ROOMS_MAX, QUESTS_MAX, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTION, PHOTOS, ARRAY_DECLARATION_COUNT} from './data.js';
import {getRandomInteger, getRandomDecimal, getRandomEl, getRandomArray} from './get-random.js';

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

createArrayDeclarations(ARRAY_DECLARATION_COUNT);
export {createArrayDeclarations};
