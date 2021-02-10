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
  const numberArray = getRandomInteger(0, array.length - 1);
  return numberArray;
};

// Функция, возвращающая случайный элемент массива
const getRandomEl = (array) => {
  const numberArray = getRandomElNumber(array);
  const elArray = array[numberArray];
  return elArray;
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

// -- module3-task1 --

const numberImgAvatar = getRandomInteger(1, 8);
const locationX_min = 35.65000;
const locationX_max = 35.70000;
const locationX_decimalDigits = 5;
const locationY_min = 139.70000;
const locationY_max = 139.80000;
const locationY_decimalDigits = 5;
const titleTxt = 'Информацию об объявлении';
const price_max = getRandomInt(7);
const rooms_max = getRandomInt(9);
const guests_max = getRandomInt(12);
const types = ['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['2:00', '13:00', '14:00'];
const arrayFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptionTxt = 'Помещение большое, светлое, просторное. В нем трое больших окон. Справа от дверей стоят книжные шкафы. Их пять, и каждая заполнена книгами, журналами, газетами.';
const arrayPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// Функция, по герерации массива из рандомных элементов (констант и готовых функций)
const createDeclaration = () => {
  const avatar = 'img/avatars/user0' + numberImgAvatar + '.png';
  const locationX = getRandomDecimal(locationX_min, locationX_max, locationX_decimalDigits);
  const locationY = getRandomDecimal(locationY_min, locationY_max, locationY_decimalDigits);
  const title = titleTxt;
  const address = `${locationX}, ${locationY}`;
  const price = getRandomInteger(1, price_max);
  const rooms = getRandomInteger(1, rooms_max);
  const guests = getRandomInteger(1, guests_max);
  const type = getRandomEl(types);
  const checkin = getRandomEl(checkins);
  const checkout = getRandomEl(checkouts);
  const features = getRandomArray(arrayFeatures);
  const description = descriptionTxt;
  const photos = getRandomArray(arrayPhotos);

  return {
    avatar,
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
    locationX,
    locationY,
  };
};

// Функция, возвращающая массив длинной arrayCout, каждый элемент = createDeclaration
const createArrayDeclarations = (arrayCout) => {
  const arrayDeclarations = new Array(arrayCout).fill(null).map(() => createDeclaration());
  return {
    arrayDeclarations,
  };
};

createArrayDeclarations(10);
