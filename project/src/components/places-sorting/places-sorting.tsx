import {useState} from 'react';

function PlacesSorting(): JSX.Element {

  // https://www.letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks/
  // const $placesOptions = useRef(null);
  //
  // window.addEventListener('click', (event) => {
  //   if ($placesOptions.current !== null && !$placesOptions.current.contains(event.target)) {
  //     setIsExpanded(!isExpanded);
  //   }
  // });
  // <ul ref={$placesOptions}


  window.addEventListener('keydown', (event) => {
    if( event.key === 'Escape' ) {
      setIsExpanded(false);
    }
  });

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=>{ setIsExpanded(!isExpanded); }}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isExpanded ? ' places__options--opened' : ''}`}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default PlacesSorting;
