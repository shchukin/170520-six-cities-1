import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';

const initialState = {
  city: 'paris'
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = 'another-city';
    });
});

export {cityReducer};
