// Тип жилья - Цена за ночь, руб.
const typeSelect = document.querySelector('#type');
const getPriceMinValue = (typeSelectValue) => {
  switch (typeSelectValue) {
    case 'flat':
      return 1000;
    case 'bungalow':
      return 0;
    case 'house':
      return 5000;
    case 'palace':
      return 10000;
    default:
      return 0;
  }
};


typeSelect.addEventListener('change', () => {
  const priceMin = getPriceMinValue(typeSelect.value);
  document.getElementById('price').placeholder = priceMin;
});


// Время заезда и выезда
let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout');


timeIn.addEventListener('change', (event) => {
  timeOut.value = event.target.value
});


timeOut.addEventListener('change', (event) => {
  timeIn.value = event.target.value
});







