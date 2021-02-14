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

export {getRandomInteger};
export {getRandomDecimal};
export {getRandomEl};
export {getRandomArray};
