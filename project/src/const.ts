export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UKNOWN',
}

export const HOUSING_KINDS = {
  'apartment': 'Apartment',
  'room': 'Private Room',
  'house': 'House',
  'hotel': 'Hotel',
} as const;


export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
