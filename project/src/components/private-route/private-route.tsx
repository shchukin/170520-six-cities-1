import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function privateRoute(props: PrivateRouteProps): JSX.Element {

  return (
    props.authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={'/login'}/>
  );
}

export default privateRoute;
