import {HostType} from '../types/hostType';
import {HousingKindType} from './housingKindType';

export type OfferType = {
  id: number;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  price: number;
  type: HousingKindType;
  bedrooms: number;
  maxAdults: number;
  description: string;
  images: string[];
  previewImage: string;
  goods: string[];
  host: HostType;
}
