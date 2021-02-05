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
getRandomInteger(1,9);

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
getRandomDecimal(1,5,2);


//
