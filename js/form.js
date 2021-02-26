import { getRandomInteger } from './util.js';


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

const getPriceMin = () => {
  typeSelect.addEventListener('change', () => {
    const priceMin = getPriceMinValue(typeSelect.value);

    const price = getRandomInteger(priceMin, 15000);
    document.getElementById('price').placeholder = price;
  });
};

// Время заезда и выезда
let timeIn = document.querySelector('#timein');
let timeInOption = timeIn.querySelector('option');
let timeInValue = timeInOption.value;
let timeOut = document.querySelector('#timeout');
let timeOutOption = timeOut.querySelector('option');
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

// Количество комнат - Количество мест
let numberRooms = document.querySelector('#room_number');
let capacity = document.querySelector('#capacity');

const capacityDisabled = () => {
  for (let i = 0; i < capacity.length; i++) {
    capacity[i].setAttribute('disabled', 'true');
  }
}
const capacityRemoveDisabled = (start, end) => {
  for (let i = start; i < end + 1; i++) {
    capacity[i].removeAttribute('disabled');
  }
}

if (numberRooms.value == 1) {
  capacityDisabled();
  capacity[2].selected = true;
  capacity[2].removeAttribute('disabled');
}

const getNumberRooms = () => {
  numberRooms.addEventListener('change', () => {
    for (let i = 0; i < numberRooms.length; i++) {
      if (numberRooms.value === capacity[i].value) {
        capacity[i].selected = true;
      }
    }
    if (numberRooms.value == 1) {
      capacityDisabled();
      capacityRemoveDisabled(2,2);
    }
    if (numberRooms.value == 2) {
      capacityDisabled();
      capacityRemoveDisabled(1,2);
    }
    if (numberRooms.value == 3) {
      capacityDisabled();
      capacityRemoveDisabled(0,2);
    }
    if (numberRooms.value == 100) {
      capacityDisabled();
      capacity[3].selected = true;
      capacityRemoveDisabled(3,3);
    }
  });
};


const checkFormValidation = () => {
  // validation #title
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;

  const titleInput = document.querySelector('#title');

  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
    } else {
      titleInput.setCustomValidity('');
    }

    titleInput.reportValidity();
  });

  // validation #price
  const priceInput = document.querySelector('#price');
  priceInput.addEventListener('input', () => {
    priceInput.reportValidity();
  });
}



export { getPriceMin, getTimeIn, getTimeOut, getNumberRooms, checkFormValidation };


