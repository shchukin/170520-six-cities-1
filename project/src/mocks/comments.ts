import {CommentType} from '../types/commentType';

export const commentsData: CommentType[] = [
  {
    'id': 1,
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    'rating': 4.2,
    'date': 'Tue Aug 08 2023 09:46:50 GMT+0700 (Indochina Time)',
    'user': {
      'id': 5,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Elon',
      'isPro': false
    },
  },
  {
    'id': 2,
    'comment': 'I recently had the pleasure of staying at this exquisite luxury apartment in the heart of the city. From the moment I stepped inside, I was captivated by the elegant design and attention to detail.',
    'rating': 4,
    'date': 'Tue Aug 08 2023 09:46:50 GMT+0700 (Indochina Time)',
    'user': {
      'id': 1,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
  },
  {
    'id': 3,
    'comment': 'My family and I had the most wonderful weekend getaway at this cozy cabin nestled in the woods. From the moment we arrived, we were greeted by the fresh scent of pine and the soothing sounds of nature. The cabin itself was charming and well-appointed, with rustic decor that added to the ambiance.',
    'rating': 3,
    'date': 'Tue Aug 08 2023 09:46:50 GMT+0700 (Indochina Time)',
    'user': {
      'id': 3,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Valery',
      'isPro': true
    },
  },
];
