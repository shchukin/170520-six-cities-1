import {OfferType} from '../types/offerType';

export const offersData: OfferType[] = [
  {
    'id': 'beautiful-and-luxurious-apartment-at-great-location',
    'title': 'Beautiful & luxurious apartment at great location',
    'premium': true,
    'ratingInStars': 4.5,
    'priceNightEuro': 130,
    'kind': 'apartment',
    'bedrooms': 2,
    'maxAdults': 5,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'photo': ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    'featuredPhoto': 0,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'pro': true
    }
  },
  {
    'id': 'wood-and-stone-place',
    'title': 'Wood and stone place',
    'premium': false,
    'ratingInStars': 4,
    'priceNightEuro': 80,
    'kind': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'description': 'This charming cottage nestled in a tranquil forest setting offers the perfect escape from the hustle and bustle of daily life.\n\nIts rustic interior and private garden make it an ideal spot for nature lovers seeking a peaceful retreat',
    'photo': ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    'featuredPhoto': 1,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Valery',
      'pro': true
    }
  },
  {
    'id': 'canal-view-prinsengracht',
    'title': 'Canal View Prinsengracht',
    'premium': false,
    'ratingInStars': 4.2,
    'priceNightEuro': 132,
    'kind': 'apartment',
    'bedrooms': 4,
    'maxAdults': 9,
    'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views,\n this property is a sanctuary in the midst of the urban jungle.',
    'photo': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    'featuredPhoto': 1,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Valery',
      'pro': true
    }
  },
  {
    'id': 'nice-cozy-warm-big-bed-apartment',
    'title': 'Nice, cozy, warm big bed apartment',
    'premium': true,
    'ratingInStars': 5,
    'priceNightEuro': 180,
    'kind': 'apartment',
    'bedrooms': 3,
    'maxAdults': 5,
    'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views, this property is a sanctuary in the midst of the urban jungle.',
    'photo': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    'featuredPhoto': 2,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Dany',
      'pro': false
    }
  },
  {
    'id': 'artistic-loft-studio',
    'title': 'Artistic Loft Studio',
    'premium': false,
    'ratingInStars': 3.5,
    'priceNightEuro': 80,
    'kind': 'hotel',
    'bedrooms': 2,
    'maxAdults': 4,
    'description': 'This beachfront villa boasts breathtaking ocean views and direct access to a pristine sandy beach. With spacious outdoor decks and a private pool, it\'s a luxurious getaway for those seeking a beachside paradise.',
    'photo': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    'featuredPhoto': 0,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Elon',
      'pro': false
    }
  },
  {
    'id': 'yet-anoter-loft-studio',
    'title': 'Yet Anoter loft studio',
    'premium': true,
    'ratingInStars': 1,
    'priceNightEuro': 30,
    'kind': 'hotel',
    'bedrooms': 2,
    'maxAdults': 4,
    'description': 'A secluded mountain lodge surrounded by towering peaks and lush forests. This cozy, log cabin-style property is perfect for winter retreats or summer adventures in nature.',
    'photo': [],
    'featuredPhoto': 0,
    'amenities': ['Wi-Fi'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Martin',
      'pro': false
    }
  },
];
