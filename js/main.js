const NUMBER_IMG_AVATAR_MIN = 1;
const NUMBER_IMG_AVATAR_MAX = 8;
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_X_DECIMAL_DIGITS = 5;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const LOCATION_Y_DECIMAL_DIGITS = 5;
const TITLE_TXT = 'Информацию об объявлении';
const PRICE_MAX = 7;
const ROOMS_MAX = 9;
const QUESTS_MAX = 12;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['2:00', '13:00', '14:00'];
const ARRAY_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION_TXT = 'Помещение большое, светлое, просторное. В нем трое больших окон. Справа от дверей стоят книжные шкафы. Их пять, и каждая заполнена книгами, журналами, газетами.';
const ARRAY_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const ARRAY_DECLARATION_COUNT = 10;

// Функция, возвращающая случайное число из переданного диапазона включительно min ... max
const getRandomInteger = (min, max) => {
  if ((min < 0) || (max < 0)) {
    return new Error('Диапазон может быть больше или равен нулю')
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
getRandomInteger(1, 9);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomDecimal = (min, max, decimalDigits) => {
  if ((min < 0) || (max < 0)) {
    return new Error('Диапазон может быть больше или равен нулю');
  } else if (decimalDigits < 0) {
    return new Error('Колличесво чисел после запятой может быть больше или равен нулю');
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return (Math.random() * (max - min) + min).toFixed(decimalDigits);
  }
};
getRandomDecimal(1, 5, 2);

// Функция, возвращающая случайное число
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Функция, возвращающая случайный номер элемента массива
const getRandomElNumber = (array) => {
  return getRandomInteger(0, array.length - 1)
};


// Функция, возвращающая случайный элемент массива
const getRandomEl = (array) => {
  return array[getRandomElNumber(array)];
};


// Функция, возвращающая массив из случайных элементов заданного массива
const getRandomArray = (array) => {
  const numberArray = getRandomElNumber(array);
  const randomArray = [];
  for (let i = 0, l = numberArray; i < l; i++) {
    const arrayEl = getRandomInteger(0, array.length - 1);
    if (!randomArray.includes(array[arrayEl])) {
      randomArray.push(array[arrayEl]);
    }
  }
  return randomArray;
};

// Функция, по герерации массива из рандомных элементов (констант и готовых функций)
const createDeclaration = () => {
  const nubmerImgAvatar = getRandomInteger(NUMBER_IMG_AVATAR_MIN, NUMBER_IMG_AVATAR_MAX);
  const locationX = getRandomDecimal(LOCATION_X_MIN, LOCATION_X_MAX, LOCATION_X_DECIMAL_DIGITS);
  const locationY = getRandomDecimal(LOCATION_Y_MIN, LOCATION_Y_MAX, LOCATION_Y_DECIMAL_DIGITS);


  return {
    avatar: 'img/avatars/user0' + nubmerImgAvatar + '.png',
    title: TITLE_TXT,
    address: `${locationX}, ${locationY}`,
    price: getRandomInteger(1, PRICE_MAX),
    type: getRandomEl(TYPES),
    rooms: getRandomInteger(1, ROOMS_MAX),
    guests: getRandomInteger(1, QUESTS_MAX),
    checkin: getRandomEl(CHECKINS),
    checkout: getRandomEl(CHECKOUTS),
    features: getRandomArray(ARRAY_FEATURES),
    description: DESCRIPTION_TXT,
    photos: getRandomArray(ARRAY_PHOTOS),
    locationX,
    locationY,
  };
};

// Функция, возвращающая массив длинной arrayCout, каждый элемент = createDeclaration
const createArrayDeclarations = (ARRAY_DECLARATION_COUNT) => {
  const arrayDeclarations = new Array(ARRAY_DECLARATION_COUNT).fill(null).map(() => createDeclaration());
  return {
    arrayDeclarations,
  };
};

createArrayDeclarations(ARRAY_DECLARATION_COUNT);
