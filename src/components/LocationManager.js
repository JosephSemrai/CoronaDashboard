import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../reducers/locationSlice';

const LocationManager = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const locationInfo = JSON.parse(localStorage.getItem('locationInfo'));
    if (!(locationInfo === null)) {
      if (
        !(
          locationInfo.city === 'undefined' ||
          locationInfo.state === 'undefined' ||
          locationInfo.city === 'null' ||
          locationInfo.state === 'null'
        )
      ) {
        dispatch(updateLocation(locationInfo));
      }
    }
  });

  // TODO: Grab location info from GPS
  return null;
};

export default LocationManager;
