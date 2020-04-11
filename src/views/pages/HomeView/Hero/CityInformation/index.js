import React from 'react';
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

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Typography variant="h1">
          COVID-19 in {location.cityName}, {location.stateName}
        </Typography>
        <Button onClick={() => dispatch(updateLocation({}))}>
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
