// Функция, возвращающая случайное число из переданного диапазона включительно min ... max
// имя_функции(от, до);
/*
  Результат: целое число из диапазона "от...до"
  Диапазон больше или равен 0
  min < max
*/
function randomInteger(min, max) {
  if ((min < 0) || (max < 0)){
      alert('ERROR: Диапазон может быть больше или равен нулю');
  }else if (min >= max){
      alert('ERROR: Начальное значение диапазона не должно быть больше или равным конечному');
  }else{
      let rand = Math.floor(Math.random() * (max - min + 1)) + min;
      return Math.round(rand);
  }
}

console.log(randomInteger(1, 6));


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
// имя_функции(от, до, количество_знаков_после_запятой);
/*
  Результат: целое число из диапазона "от...до"
  Диапазон больше или равен 0
  min < max
  flag < 0
*/
function randomDecimal(min, max, flag) {
  if ((min < 0) || (max < 0)){
      alert('ERROR: Диапазон может быть больше или равен нулю');
  }else if (flag < 0){
    alert('ERROR: Колличесво чисел после запятой может быть больше или равен нулю');
  }else if (min >= max){
      alert('ERROR: Начальное значение диапазона не должно быть больше или равным конечному');
  }else{
      let rand = Math.random() * (max - min + 1) + min;
      return rand.toFixed(flag);
  }
}

console.log(randomDecimal(1, 9, 2));
