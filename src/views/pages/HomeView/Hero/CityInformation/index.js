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
import TreatmentCenters from './TreatmentCenters';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 50,
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
        <Button
          variant="contained"
          onClick={() => dispatch(updateLocation({}))}
        >
          Enter a different city
        </Button>
        <Typography variant="h1" color="textPrimary">
          COVID-19 in {location.cityName}, {location.stateName}
        </Typography>

        <Grid container direction="row" spacing={3}>
          <Grid item md={4} xs={12} style={{ height: '80vh' }}>
            <TreatmentCenters location={location} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CityInformation.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string
};

export default CityInformation;
