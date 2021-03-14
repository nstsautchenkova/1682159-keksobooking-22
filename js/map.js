import { getOfferType } from './util.js';
import { pageInactiveState, pageActiveState } from './form.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const DECLARATION_COUNT = 10;
const Default = {
  HOUSING_TYPE_VALUE: 'any',
};
const housingType = document.querySelector('#housing-type');

pageInactiveState();
let L = window.L;
const createMap = (declarations) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      pageActiveState();
    })
    .setView({
      lat: 35.6895000,
      lng: 139.6917100,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainMarkerIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const markerIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainMarker = L.marker(
    {
      lat: 35.6895000,
      lng: 139.6917100,
    },
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );

  mainMarker.addTo(map);
  mainMarker.on('moveend', (evt) => {
    const getLatLng = evt.target.getLatLng();
    const getLat = getLatLng.lat.toFixed(7);
    const getlng = getLatLng.lng.toFixed(7);
    const address = document.querySelector('#address');
    address.value = `${getLat}, ${getlng}`;
    address.setAttribute('readonly', 'true');
  });


  declarations
    .slice()
    .slice(0, DECLARATION_COUNT)
    .forEach(({ author, offer, location }) => {
      const declarationsLat = location.lat;
      const declarationsLng = location.lng;

      const renderCardElement = () => {
        const cardElement = cardTemplate.cloneNode(true);

        const offerType = getOfferType(offer.type);
        cardElement.querySelector('.popup__type').textContent = offerType;

        // наполняем данными
        if (author.avatar) {
          cardElement.querySelector('.popup__avatar').src = author.avatar;
        } else {
          cardElement.querySelector('.popup__avatar').classList.add('hidden');
        }
        if (offer.title) {
          cardElement.querySelector('.popup__title').textContent = offer.title;
        } else {
          cardElement.querySelector('.popup__title').classList.add('hidden');
        }
        if (offer.address) {
          cardElement.querySelector('.popup__text--address').textContent = offer.address;
        } else {
          cardElement.querySelector('.popup__text--address').classList.add('hidden');
        }
        if (offer.price) {
          cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
        } else {
          cardElement.querySelector('.popup__text--price').classList.add('hidden');
        }
        if (offer.rooms || offer.guests) {
          cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
        } else {
          cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
        }
        if (offer.checkin || offer.checkout) {
          cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
        } else {
          cardElement.querySelector('.popup__text--time').classList.add('hidden');
        }
        if (offer.description) {
          cardElement.querySelector('.popup__description').textContent = offer.description;
        } else {
          cardElement.querySelector('.popup__description').classList.add('hidden');
        }
        if ((offer.features).length > 0) {
          // создать li.popup__feature c class popup__feature--  в popup__features
          cardElement.querySelector('.popup__features').textContent = ' ';
          const featuresList = cardElement.querySelector('.popup__features');
          offer.features.forEach((element) => {
            const featuresItem = document.createElement('li');
            featuresItem.classList.add('popup__feature');
            const featuresClass = `popup__feature--${element}`;
            featuresItem.classList.add(featuresClass);
            featuresList.append(featuresItem);
          });
        } else {
          cardElement.querySelector('.popup__features').classList.add('hidden');
        }
        if ((offer.photos).length > 0) {
          // создать img.popup__photo в popup__photos
          cardElement.querySelector('.popup__photos').textContent = ' ';
          const photoList = cardElement.querySelector('.popup__photos');
          offer.photos.forEach((photo) => {
            const photoImg = new Image(45, 40);
            photoImg.classList.add('popup__photo');
            photoImg.src = photo;
            photoList.append(photoImg);
          });

        } else {
          cardElement.querySelector('.popup__photos').classList.add('hidden');
        }

        return cardElement;
      };

      const marker = L.marker(
        {
          lat: declarationsLat,
          lng: declarationsLng,
        },
        {
          icon: markerIcon,
        },
      )
      marker
        .addTo(map)
        .bindPopup(
          renderCardElement(declarations),
        );

      // Филитр "Тип жилья"
      housingType.addEventListener('change', () => {
        map.removeLayer(marker);
        //if (offer.type === (housingType.value || Default.HOUSING_TYPE_VALUE)) {
        if (offer.type === housingType.value) {
          marker
            .addTo(map)
            .bindPopup(
              renderCardElement(declarations),
            );
        }
        if (housingType.value === Default.HOUSING_TYPE_VALUE) {
          marker
            .addTo(map)
            .bindPopup(
              renderCardElement(declarations),
            );
        }
      });
    });
};

export { createMap };
