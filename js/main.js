import { createMap } from './map.js';
import './form.js';
import { setUserFormSubmit, onFormSuccess } from './form.js';
import {getData} from './api.js';


getData((declarations) => {
  createMap(declarations);
});

setUserFormSubmit(onFormSuccess);



