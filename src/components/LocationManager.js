import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../reducers/locationSlice';

const LocationManager = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateLocation('San Francisco'));
  });

  return null;
};

export default LocationManager;
