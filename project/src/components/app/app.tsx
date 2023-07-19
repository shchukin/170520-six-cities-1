import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import Main from './../../pages/main/main';
import Login from './../../pages/login/login';
import Favorites from './../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import HttpError from '../../pages/http-error/http-error';
import PrivateRoute from '../private-route/private-route';

type App = {
  offersAmountOnMainPage: number;
}

function App({offersAmountOnMainPage}: App): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offersAmount={offersAmountOnMainPage}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path={AppRoute.Favorites} element={<Favorites/>}/>
        <Route path={AppRoute.Offer} element={<Property/>}/>
        <Route path="*" element={<HttpError/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
