import {useEffect, useRef} from 'react';
import {OfferType} from '../../types/offerType';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  data: OfferType[];
}

function Map(props: MapProps): JSX.Element {

  const mapRef = useRef(null);
  let flag = false;

  useEffect(() => {

    if (mapRef.current !== null && !flag ) {

      leaflet.map(mapRef.current, {
        center: {
          lat: 52.370216,
          lng: 4,
        },
        zoom: 5,
      });

      flag = true;
    }

  }, [mapRef]);

  return (
    <div className="map" id="map" ref={mapRef}>

    </div>
  );
}

export default Map;
