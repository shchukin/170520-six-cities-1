import {OfferType} from '../types/offerType';

export const offersData: OfferType[] = [
  {
    'id': 1,
    'title': 'Beautiful & luxurious apartment at great location',
    'premium': true,
    'ratingInStars': 4.5,
    'priceNightEuro': 130,
    'kind': 'apartment',
    'bedrooms': 2,
    'maxAdults': 5,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'photo': ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    'featuredPhoto': 3,
    'amenities': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'photo': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'pro': true
    }
  },
];
