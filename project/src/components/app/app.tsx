import Main from './../../pages/main/main';


type App = {
  offersAmountOnMainPage: number;
}

function App({offersAmountOnMainPage}: App): JSX.Element {
  return (
    <Main offersAmount={offersAmountOnMainPage}/>
  );
}

export default App;
