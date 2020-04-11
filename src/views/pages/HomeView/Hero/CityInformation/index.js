import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateLocation } from 'src/reducers/locationSlice';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  }
}));

function CityInformation({ className, location, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const sanitizedState = location.stateName.toLowerCase().replace(/\s/g, '-');
    axios
      .get(
        `https://covid-19-testing.github.io/locations/${sanitizedState}/complete.json`
      )
      .then(res => alert(JSON.stringify(res.data)))
      .catch(e => alert(e));
  });

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Typography variant="h1">
          COVID-19 in {location.cityName}, {location.stateName}
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch(updateLocation({}))}
        >
          Enter a different city
        </Button>

        <Grid container spacing={3}></Grid>
      </Container>
    </div>
  );
}

CityInformation.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string
};

export default CityInformation;
