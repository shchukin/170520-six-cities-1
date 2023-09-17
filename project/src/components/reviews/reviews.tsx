import {commentsData} from '../../mocks/comments';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

function Reviews(): JSX.Element {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {
          commentsData.map((element) => <ReviewsItem key={element.id} data={element}/>)
        }
      </ul>
      <div className="reviews__form">
        <ReviewsForm/>
      </div>
    </section>
  );
}


export default Reviews;

