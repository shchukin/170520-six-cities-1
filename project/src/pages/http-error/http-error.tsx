import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function HttpError(): JSX.Element {
  return (
    <div className="page page--error">
      {<Header/>}
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error">
            <div className="error__wrapper">
              <h1 className="error__title">404</h1>
              <div className="error__message">Page not found</div>
              <Link className="error__back" to="/">
                <span className="error__arrow">←</span>
                &nbsp;
                Main page
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default HttpError;


