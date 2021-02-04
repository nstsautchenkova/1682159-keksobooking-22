// Функция, возвращающая случайное число из переданного диапазона включительно min ... max
/*
 имя_функции(от, до);
 Результат: целое число из диапазона "от...до".
 Диапазон больше или равен 0.
 min < max
*/

function getRandomInteger(min, max) {
  if ((min < 0) || (max < 0)) {
    return new Error('Диапазон может быть больше или равен нулю')
  } else if (min >= max) {
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
alert(getRandomInteger(1, 6));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
/*
  имя_функции(от, до, количество_знаков_после_запятой);
  Результат: целое число из диапазона "от...до"
  Диапазон больше или равен 0
  min < max
  flag < 0
*/
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
alert(getRandomDecimal(1, 9, 2));
