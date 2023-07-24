export type OfferType = {
  id: number,
  title: string,
  premium: boolean,
  ratingInStars: number,
  priceNightEuro: number,
  kind: string,
  bedrooms: number,
  maxAdults: number,
  description: string,
  photo: string[],
  amenities: string[],
  host: any
}

// Housing kind
// apartment (Apartment), room (Private Room), house (House), hotel (Hotel).


// srats number 0-5
