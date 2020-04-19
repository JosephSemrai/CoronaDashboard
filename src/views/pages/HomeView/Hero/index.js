import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Initial from './Initial';
import CityInformation from './CityInformation';

function Hero({ className, ...rest }) {
  const location = useSelector(state => state.location);

  return location.city && location.state ? (
    <CityInformation location={location} />
  ) : (
    <Initial />
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
