import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function HttpError(): JSX.Element {
  return (
    <div className="page page--error">
      <Header/>
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error">
            <div className="error__wrapper">
              <h1 className="error__title">
                404
              </h1>
              <div className="error__message">
                Page not found
              </div>
              <Link className="error__back" to="/">
                <span className="error__arrow">←</span>
                &nbsp;
                Main page
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default HttpError;


