import {useEffect, useRef} from 'react';
import {OfferType} from '../../types/offerType';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import useMap from '../../hooks/useMap';
import {Icon, Marker, layerGroup} from 'leaflet'

type MapProps = {
  selectedPoint: OfferType;
  data: OfferType[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

function Map(props: MapProps): JSX.Element {

  console.log(1, props)

  const mapRef = useRef(null);

  const city = props.data[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const placeLayer = layerGroup().addTo(map);
      const currentCity = city;
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);

      props.data.forEach((offer) => {

        console.log(5, offer);

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        console.log(4, offer)

        marker.setIcon(
          props.selectedPoint !== undefined && offer && offer?.id === props.selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(placeLayer);
      });

      console.log(2, props.currentOffer)

      if (props.currentOffer) {
        const currentMarker = new Marker({
          lat: props.currentOffer.location.latitude,
          lng: props.currentOffer.location.longitude
        });

        currentMarker.setIcon(currentCustomIcon).addTo(placeLayer);
      }

      return () => {
        map.removeLayer(placeLayer);
      };
    }
  }, [map, props.data, props.selectedPoint, city, props.currentOffer]);

  return (
    <section
      className="map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
