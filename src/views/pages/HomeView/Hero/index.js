import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Initial from './Initial';
import CityInformation from './CityInformation';

function Hero({ className, ...rest }) {
  const location = useSelector(state => state.location);

  return location.cityName && location.stateName ? (
    <CityInformation location={location} />
  ) : (
    <Initial />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
