import {Link} from 'react-router-dom';

type HttpErrorProps = {
  code: number;
  description: string;
}

function HttpError(props: HttpErrorProps): JSX.Element {
  return (
    <div className="http-error">
      <div className="http-error__wrapper">
        <h1 className="http-error__title">
          {props.code}
        </h1>
        <div className="http-error__message">
          {props.description}
        </div>
        <Link className="http-error__back" to="/">
          <span className="http-error__arrow">←</span>
          &nbsp;
          Main page
        </Link>
      </div>
    </div>
  );
}

export default HttpError;
