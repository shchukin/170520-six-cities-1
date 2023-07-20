import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function privateRoute(props: PrivateRouteProps): JSX.Element {

  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'/login'}/>
  );
}

export default privateRoute;
