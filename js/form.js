import { getRandomInteger } from './util.js';

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

const getPriceMin = () => {
  typeSelect.addEventListener('change', () => {
    const priceMin = getPriceMinValue(typeSelect.value);

    const price = getRandomInteger(priceMin, 15000);
    document.getElementById('price').placeholder = price;
  });
};

let timeIn = document.querySelector('#timein');
let timeInOption = document.querySelector('#timein option');
let timeInValue = timeInOption.value;
let timeOut = document.querySelector('#timeout');
let timeOutOption = document.querySelector('#timeout option');
let timeOutValue = timeOutOption.value;

const getTimeIn = () => {
  timeIn.addEventListener('change', () => {
    timeInValue = timeIn.value;
    for (let i = 0; i < timeOut.length; i++) {
      if (timeOut[i].value === timeInValue) timeOut[i].selected = true;
    }
  });
};

const getTimeOut = () => {
  timeOut.addEventListener('change', () => {
    timeOutValue = timeOut.value;
    for (let i = 0; i < timeIn.length; i++) {
      if (timeIn[i].value === timeOutValue) timeIn[i].selected = true;
    }
  });
};
export { getPriceMin, getTimeIn, getTimeOut };


