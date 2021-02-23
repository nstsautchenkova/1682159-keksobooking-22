import { declarations } from './data.js';
import { renderCardElement } from './card.js';
import { pageInactiveState, pageActiveState } from './checkDocumentLoader.js';


let L = window.L;
const createMap = () => {
  pageInactiveState();
  const map = L.map('map-canvas')
    .on('load', () => {
      pageActiveState()
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

  declarations.forEach(element => {
    const declarationsLat = element.location.x;
    const declarationsLng = element.location.y;

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
        renderCardElement(element),
      );
  });
};

export { createMap };
