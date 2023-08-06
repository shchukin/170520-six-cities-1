import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {offersData} from '../../mocks/offersData';
import PlaceCard from '../../components/place-card/place-card';
import {OfferType} from '../../types/offerType';

function Favorites(): JSX.Element {

  const favoriteOffers = offersData.filter((element) => element.isFavorite);

  const groupByCity = (array:OfferType[]) => {
    return array.reduce((acc, item) => {
      const key = item.city.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {} as Record<string, OfferType[]>);
  };

  const newData = groupByCity(favoriteOffers);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(newData).map(cityName => (
                <li className="favorites__locations-items" key={cityName}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {newData[cityName].map((item, index) => (
                      <div className="favorites__card" key={index}><PlaceCard horizontal data={item}/></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;


