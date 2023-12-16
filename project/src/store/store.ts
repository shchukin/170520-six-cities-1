import {configureStore} from '@reduxjs/toolkit';
import {cityReducer} from './reducer';
import {createAPI} from '../services/api';

export const api = createAPI();


export const store = configureStore({
  reducer: cityReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

