import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';
import {citiesList} from "../../store/reducer";

function Locations(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map((element) =>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#" onClick={() => dispatch(changeCity(element))}>
                <span>{element}</span>
              </a>
            </li>
          )
        }
      </ul>
    </section>
  );
}

export default Locations;
