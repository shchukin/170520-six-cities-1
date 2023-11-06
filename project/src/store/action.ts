import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (city) => {
  return {
    payload: { /* Payload нужен, чтобы передать переменную */
      city
    },
  };
});
