import {offersData} from '../../mocks/offersData';
import PlaceCard from '../place-card/place-card';

function NearPlaces():JSX.Element {
  return (
    <div className="container">
      <section className="near-places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list">
          {
            offersData.slice(0, 3).map((element, index) => <div className={'near-places__card'} key={element.id}><PlaceCard data={element}/></div>)
          }
        </div>
      </section>
    </div>
  );
}


export default NearPlaces();

