import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offersData} from './mocks/offersData';

const settings = {
  OffersAmountOnMainPage: 4,
  // MaxPhotoOnDetailedPage: 6,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersAmountOnMainPage = {settings.OffersAmountOnMainPage} offersData={offersData}/>
  </React.StrictMode>,
);
