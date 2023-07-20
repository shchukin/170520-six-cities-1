import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import HttpError from '../../components/http-error/httpError';

function NotFound(): JSX.Element {
  return (
    <div className="page page--error">
      <Header/>
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <HttpError code={404} description={'Page not found'}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFound;


