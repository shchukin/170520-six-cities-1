import {createReducer} from '@reduxjs/toolkit';
import {changeCity, reloadOffers} from './action';

const citiesList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const initialState = {
  city: 'Paris',
  offers: [{
    'id': 1,
    'title': 'Beautiful & luxurious apartment at great location',
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.5,
    'price': 130,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 5,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n\nAn independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    'previewImage': 'img/apartment-01.jpg',
    'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    'host': {
      'id': 1,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
    },
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    }
  },
    {
      'id': 2,
      'title': 'Wood and stone place',
      'isPremium': false,
      'isFavorite': true,
      'rating': 4,
      'price': 80,
      'type': 'room',
      'bedrooms': 1,
      'maxAdults': 2,
      'description': 'This charming cottage nestled in a tranquil forest setting offers the perfect escape from the hustle and bustle of daily life.\n\nIts rustic interior and private garden make it an ideal spot for nature lovers seeking a peaceful retreat',
      'images': ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
      'previewImage': 'img/apartment-02.jpg',
      'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      'host': {
        'id': 2,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Valery',
        'isPro': true
      },
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 10
      },
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10
        },
        'name': 'Cologne'
      }
    },
    {
      'id': 3,
      'title': 'Canal View Prinsengracht',
      'isPremium': false,
      'isFavorite': true,
      'rating': 4.2,
      'price': 132,
      'type': 'apartment',
      'bedrooms': 4,
      'maxAdults': 9,
      'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views,\n this property is a sanctuary in the midst of the urban jungle.',
      'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
      'previewImage': 'img/apartment-03.jpg',
      'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
      'host': {
        'id': 3,
        'avatarUrl': 'img/avatar-angelina.jpg',
        'name': 'Valery',
        'isPro': true
      },
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 10
      },
      'city': {
        'location': {
          'latitude': 52.370216,
          'longitude': 4.895168,
          'zoom': 10
        },
        'name': 'Amsterdam'
      }
    }]
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(reloadOffers, (state, action) => {
      state.offers = [{
        'id': 4,
        'title': 'Nice, cozy, warm big bed apartment',
        'isPremium': true,
        'isFavorite': false,
        'rating': 5,
        'price': 180,
        'type': 'apartment',
        'bedrooms': 3,
        'maxAdults': 5,
        'description': 'Urban Oasis.\n\nA modern, stylish apartment located in the heart of the city.\n\nWith floor-to-ceiling windows that provide stunning skyline views, this property is a sanctuary in the midst of the urban jungle.',
        'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
        'previewImage': 'img/apartment-03.jpg',
        'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
        'host': {
          'id': 4,
          'avatarUrl': 'img/avatar-angelina.jpg',
          'name': 'Dany',
          'isPro': false
        },
        'location': {
          'latitude': 52.3809553943508,
          'longitude': 4.939309666406198,
          'zoom': 10
        },
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
          },
          'name': 'Cologne'
        }
      },
        {
          'id': 5,
          'title': 'Artistic Loft Studio',
          'isPremium': false,
          'isFavorite': true,
          'rating': 3.5,
          'price': 80,
          'type': 'hotel',
          'bedrooms': 2,
          'maxAdults': 4,
          'description': 'This beachfront villa boasts breathtaking ocean views and direct access to a pristine sandy beach. With spacious outdoor decks and a private pool, it\'s a luxurious getaway for those seeking a beachside paradise.',
          'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
          'previewImage': 'img/apartment-03.jpg',
          'goods': ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
          'host': {
            'id': 5,
            'avatarUrl': 'img/avatar-angelina.jpg',
            'name': 'Elon',
            'isPro': false
          },
          'location': {
            'latitude': 52.39,
            'longitude': 4.92,
            'zoom': 10
          },
          'city': {
            'location': {
              'latitude': 52.370216,
              'longitude': 4.895168,
              'zoom': 10
            },
            'name': 'Amsterdam'
          }
        },
        {
          'id': 6,
          'title': 'Yet Another loft studio',
          'isPremium': true,
          'isFavorite': true,
          'rating': 1,
          'price': 30,
          'type': 'hotel',
          'bedrooms': 2,
          'maxAdults': 4,
          'description': 'A secluded mountain lodge surrounded by towering peaks and lush forests. This cozy, log cabin-style property is perfect for winter retreats or summer adventures in nature.',
          'images': [],
          'previewImage': '',
          'goods': ['Wi-Fi'],
          'host': {
            'id': 6,
            'avatarUrl': 'img/avatar-angelina.jpg',
            'name': 'Martin',
            'isPro': false
          },
          'location': {
            'latitude': 52.37,
            'longitude': 4.91,
            'zoom': 10
          },
          'city': {
            'location': {
              'latitude': 52.370216,
              'longitude': 4.895168,
              'zoom': 10
            },
            'name': 'Cologne'
          }
        }]
    })
  ;
});

export {cityReducer, citiesList};
