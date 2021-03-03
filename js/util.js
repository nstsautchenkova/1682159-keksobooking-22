const ALERT_SHOW_TIME = 5000;

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
//getRandomInteger(1, 9);


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
//getRandomDecimal(1, 5, 2);


// Функция, возвращающая случайный элемент массива
const getRandomEl = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};


// Функция, возвращающая массив из случайных элементов заданного массива
const getRandomArray = (array) => {
  const numberArray = getRandomInteger(0, array.length - 1);
  const randomArray = [];
  for (let i = 0, l = numberArray; i < l; i++) {
    const arrayEl = getRandomInteger(0, array.length - 1);
    if (!randomArray.includes(array[arrayEl])) {
      randomArray.push(array[arrayEl]);
    }
  }
  return randomArray;
};

// Функция, возвращающая тип жилья
const getOfferType = (types) => {
  switch (types) {
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

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.code === 27;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}
export {getRandomInteger, getRandomDecimal, getRandomEl, getRandomArray, getOfferType, isEscEvent, showAlert};
