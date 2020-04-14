import React, { useState, useEffect } from 'react';
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
import Density from './Density';
import PerformanceOverTime from './PerformanceOverTime';
import TotalConfirmed from './TotalConfirmed';
import Recovered from './Recovered';
import axios from 'axios';
import LocalHospitals from './LocalHospitals';
import Deaths from './Deaths';
import moment from 'moment';
import CaseChart from './CaseChart';
import HospitalUpdates from './HospitalUpdates';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 50,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  }
}));

function CityInformation({ className, location, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [globalCovidData, setGlobalCovidData] = useState({});
  const [stateCovidData, setStateCovidData] = useState({});
  const [countyCovidData, setCountyCovidData] = useState({});

  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://bing.com/covid/data';
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        data
          ? setGlobalCovidData(data)
          : alert('Unable to fetch COVID-19 data');

        // Parse API response
        const unitedStatesData = data.areas[0];
        const stateData = unitedStatesData.areas.find(
          state => state.displayName === location.state
        );

        console.log('County: ', location.county);
        const countyData = stateData.areas.find(
          county =>
            county.displayName === location.county ||
            county.displayName === `${location.county} County` ||
            county.displayName === `${location.county} City`
        );

        stateData
          ? setStateCovidData(stateData)
          : alert('Unable to fetch state COVID-19 data');

        countyData
          ? setCountyCovidData(countyData)
          : alert('Unable to fetch county COVID-19 data');

        console.log(countyData);
      });
  }, []);

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Button
          variant="contained"
          onClick={() => dispatch(updateLocation({}))}
        >
          Enter a different city
        </Button>
        <Typography variant="h1" style={{ marginTop: 15 }} color="textPrimary">
          Here's what's happening in {location.city}, {location.state}
        </Typography>

        <Typography
          variant="h3"
          style={{ marginBottom: 25 }}
          color="textSecondary"
        >
          County information last updated{' '}
          {countyCovidData
            ? moment(countyCovidData.lastUpdated).fromNow()
            : 'Unable to gather data'}
        </Typography>

        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <Density value={location.density} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalConfirmed value={countyCovidData.totalConfirmed} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Deaths value={countyCovidData.totalDeaths} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Recovered value={countyCovidData.totalRecovered} />
          </Grid>
          <Grid item lg={3} xs={12}>
            <CaseChart countyData={countyCovidData} />
          </Grid>
          <Grid item lg={9} xs={12}>
            <PerformanceOverTime
              location={location}
              countyData={countyCovidData}
              style={{ minHeight: '100%' }}
            />
          </Grid>
          <Grid item lg={12} xs={12}>
            <LocalHospitals location={location} />
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
