import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offerType';
import {starsToPct} from '../../utils';
import {AppRoute, HOUSING_KINDS} from '../../const';

type PlaceCardProps = {
  data: OfferType;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {

  return (
    <article className="place-card">
      {
        props.data.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="place-card__image-wrapper">
        <Link to={AppRoute.Offer + '/' + props.data.id}>
          <img className="place-card__image" src={props.data.images[props.data.featuredPhoto]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.data.priceNightEuro}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsToPct(props.data.ratingInStars) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={'offer/' + props.data.id}>{props.data.title}</Link>
        </h2>
        <p className="place-card__type">{HOUSING_KINDS[props.data.kind]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
