import {HostType} from '../types/hostType';
import {HousingKindType} from './housingKindType';

export type OfferType = {
  id: number,
  title: string,
  premium: boolean,
  ratingInStars: number, /* можно ли сделать [0 - 5]? */
  priceNightEuro: number,
  kind: HousingKindType,
  bedrooms: number,
  maxAdults: number,
  description: string,
  photo: string[],
  featuredPhoto: number,
  amenities: string[],
  host: HostType
}
