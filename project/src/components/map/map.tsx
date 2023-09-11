import {OfferType} from '../../types/offerType';

type MapProps = {
  data: OfferType[];
}

function Map(props: MapProps): JSX.Element {

  props.data.map((element)=>{
    console.log(element.location);
  });

  return(
    <div className="map">1</div>
  );
}

export default Map;
