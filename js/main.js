// Функция, возвращающая случайное число из переданного диапазона включительно min ... max

function getRandomInteger(min, max) {
  if ((min < 0) || (max < 0)) {
    return new Error('Диапазон может быть больше или равен нулю')
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomInteger(1, 9);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomDecimal(min, max, decimalDigits) {
  if ((min < 0) || (max < 0)) {
    return new Error('Диапазон может быть больше или равен нулю');
  } else if (decimalDigits < 0) {
    return new Error('Колличесво чисел после запятой может быть больше или равен нулю');
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return (Math.random() * (max - min) + min).toFixed(decimalDigits);
  }
}
getRandomDecimal(1, 5, 2);


// -- module3-task1 --
const createDeclaration = () => {

  const numberImgAvatar = getRandomInteger(1, 8);
  const avatar = 'img/avatars/user0' + numberImgAvatar + '.png';

  const locationX = getRandomDecimal(35.65000, 35.70000, 5);
  const locationY = getRandomDecimal(139.70000, 139.80000, 5);

  const title = 'Информацию об объявлении';
  const address = 'Адрес: ' + locationX + ', ' + locationY;

  const numberPrice = 4;
  const price = Math.abs(numberPrice);

  const types = ['palace', 'flat', 'house', 'bungalow'];
  const typeNumber = getRandomInteger(0, types.length - 1);
  const type = types[typeNumber];

  const numberRooms = 7;
  const rooms = Math.abs(numberRooms);

  const numberQuests = 9;
  const guests = Math.abs(numberQuests);

  const checkins = ['12:00', '13:00', '14:00'];
  const checkinNumber = getRandomInteger(0, checkins.length - 1);
  const checkin = checkins[checkinNumber];

  const checkouts = ['2:00', '13:00', '14:00'];
  const checkoutNumber = getRandomInteger(0, checkouts.length - 1);
  const checkout = checkouts[checkoutNumber];

  const arrayFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const featureNumber = getRandomInteger(0, arrayFeatures.length - 1);
  const features = [];
  for (let i = 0, l = featureNumber; i < l; i++) {
    const arrayFeaturesTitle = getRandomInteger(0, arrayFeatures.length - 1);
    if (!features.includes(arrayFeatures[arrayFeaturesTitle])) {
      features.push(arrayFeatures[arrayFeaturesTitle]);
    }
  }

  const description = 'Помещение большое, светлое, просторное. В нем трое больших окон. Справа от дверей стоят книжные шкафы. Их пять, и каждая заполнена книгами, журналами, газетами.';

  const arrayPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  const photosNumber = getRandomInteger(0, arrayPhotos.length - 1);
  const photos = [];
  for (let i = 0, l = photosNumber; i < l; i++) {
    const arrayPhotosTitle = getRandomInteger(0, arrayPhotos.length - 1);
    if (!photos.includes(arrayPhotos[arrayPhotosTitle])) {
      photos.push(arrayPhotos[arrayPhotosTitle]);
    }
  }

  // Author
  const createAuthor = () => {
    return {
      avatar,
    };
  };

  // Offer
  const createOffer = () => {
    return {
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
    };
  };

  // Location
  const createLocation = () => {
    return {
      locationX,
      locationY,
    };
  };

  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };
};


const createArrayDeclarations = (ARRAY_DECLARATION_COUNT) => {
  const arrayDeclarations = new Array(ARRAY_DECLARATION_COUNT).fill(null).map(() => createDeclaration());
  return {
    arrayDeclarations,
  };
};

createArrayDeclarations(10);
