import {CommentType} from '../../types/commentType';
import {starsToPct} from '../../utils';
import {MONTHS} from '../../const';

type ReviewsItemProps = {
  data: CommentType;
}

function ReviewsItem(props: ReviewsItemProps): JSX.Element {

  const date = new Date(props.data.date);


  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.data.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {props.data.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starsToPct(props.data.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {
            props.data.comment
          }
        </p>
        <time className="reviews__time" dateTime={
          `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}`
        }
        >
          {
            `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
          }
        </time>
      </div>
    </li>
  );
}


export default ReviewsItem;
