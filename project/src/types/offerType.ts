import {HostType} from '../types/hostType';
import {HousingKindType} from './housingKindType';

export type OfferType = {
  id: number;
  title: string;
  premium: boolean;
  ratingInStars: number;
  priceNightEuro: number;
  kind: HousingKindType;
  bedrooms: number;
  maxAdults: number;
  description: string;
  photo: string[];
  featuredPhoto: number;
  goods: string[];
  host: HostType;
}
