export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = 'favorites',
  Offer = '/offer/:offerId',
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
};
