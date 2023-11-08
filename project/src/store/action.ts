import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (city) => {
  return {
    payload: { /* Payload (полезная нагрузка) нужен, чтобы передать переменную */
      city
    },
  };
});


export const reloadOffers = createAction('RELOAD_OFFERS');
