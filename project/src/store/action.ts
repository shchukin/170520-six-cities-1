import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (city) => {
  return {
    payload: {
      city
    },
  };
});
