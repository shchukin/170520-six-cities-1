import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './../../pages/main/main';
import Login from './../../pages/login/login';
import Favorites from './../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import HttpError from '../../pages/http-error/http-error';

type App = {
  offersAmountOnMainPage: number;
}

function App({offersAmountOnMainPage}: App): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main offersAmount={offersAmountOnMainPage}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/offer/:offerId" element={<Property/>}/>
        <Route path="*" element={<HttpError/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
