import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../reducers/locationSlice';

const LocationManager = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cityName = localStorage.getItem('cityName');
    const stateName = localStorage.getItem('stateName');

    if (
      !(
        cityName === 'undefined' ||
        stateName === 'undefined' ||
        cityName === 'null' ||
        stateName === 'null'
      )
    ) {
      dispatch(updateLocation({ city: cityName, state: stateName }));
    }
  });

  // TODO: Grab location info from GPS
  return null;
};

export default LocationManager;
