import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Initial from './Initial';
import { updateLocation } from 'src/reducers/locationSlice';
import CityInformation from './CityInformation';

function Hero({ className, ...rest }) {
  const cityName = useSelector(state => state.location.cityName);

  return cityName ? <CityInformation cityName={cityName} /> : <Initial />;
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
