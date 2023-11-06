import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';

const citiesList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const initialState = {
  city: 'Paris'
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    });
});

export {cityReducer, citiesList};
