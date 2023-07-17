import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const settings = {
  OffersAmountOnMainPage: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersAmountOnMainPage = {settings.OffersAmountOnMainPage}/>
  </React.StrictMode>,
);
