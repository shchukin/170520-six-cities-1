import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo(): JSX.Element {
  return (
    <NavLink to={AppRoute.Root} end className={({isActive}) => isActive ? 'logo logo--active' : 'logo'}>
      <img src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </NavLink>
  );
}

export default Logo;
