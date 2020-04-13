import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import CircularProgress from '../LocalHospitals/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {}
}));

function PerformanceOverTime({ className, location, countyData, ...rest }) {
  const classes = useStyles();

  const densityRisk = location.density ? 1 + location.density / 10000 : 1;
  const confirmedRisk =
    countyData.totalConfirmed && location.population
      ? 1 + (countyData.totalConfirmed / location.population) * 8
      : 1;
  const deathRisk =
    countyData.totalDeaths && countyData.totalConfirmed
      ? 1 + (countyData.totalDeaths / countyData.totalConfirmed) * 5
      : 1;
  const riskLevel = densityRisk * confirmedRisk * deathRisk;

  const riskNumber = riskLevel * 10;
  const roundedRisk = Math.round(riskNumber);

  const riskMessages = [
    'Risk Level 1: The virus has just sprouted in your area. Medical facilities are still available. It is important to stay at home and adhere to CDC guidelines to keep this risk level from going up further.',
    'Risk Level 2: The virus is at its beginnings in your area. Practice social isolation and only go to the store in you are in urgent need of something. Wear a mask and keep a distance from others if you need to go out.',
    'Risk Level 3: The virus is still in its early stages of spreading in your area. Practice social distancing and do not visit public places. Take precautionary measures if you really need to visit a store.',
    'Risk Level 4: The virus has moderately spread throughout your area and death rates are emerging. Hospitals are in need of PPE. Stay at home. Get food or groceries delivered if possible. Only go to a store if it is necessary.',
    'Risk Level 5: The virus is continually worsening around you. Social distancing is vital in preventing the further spread of the virus. Medical facilities are beginning to see a strain on resources.',
    'Risk Level 6: The virus is becoming serious in your area. Hospitals are beginning to see a strain of medical supplies, staff, and equipment. Self-isolation is crucial to prevent the progression of the virus to a higher risk level.',
    'Risk Level 7: The virus is serious in your area. Get groceries or food delivered, but do not go out to public places unless it is absolutely necessary. Medical facilities are limited. Follow local guidelines and take the proper precautionary measures.',
    'Risk Level 8: The virus is serious and widespread at this point. Medical facilities are burdened, and healthcare workers are starting to experience a higher risk of infection. Practice social isolation and follow local guidelines.',
    'Risk Level 9: The virus has extensively spread throughout your area and death rates are on the rise. Healthcare workers are becoming infected as well. Take precautions and follow local guidelines. Stay at home.',
    'Risk Level 10: The virus is extremely serious your area and death rates are very high. Medical facilities are overwhelmed, and medical supplies are low. Healthcare workers are contracting the virus. Do not go to a hospital unless your condition/symptoms are serious. Follow other local guidelines and precautionary measures. Stay at home.'
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Risk Analysis" />
      <Divider />
      <CardContent style={{ minHeight: '30%' }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6} xs={12}>
            <Typography align="center" variant="h3" color="textSecondary">
              Your risk level is:
            </Typography>

            <Grid
              style={{ marginTop: 10 }}
              container
              spacing={3}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={3}>
                <CircularProgress value={riskNumber} />
              </Grid>
            </Grid>

            <Typography
              align="center"
              variant="h1"
              color={riskNumber > 50 ? 'error' : 'primary'}
            >
              {riskNumber === NaN ? 'Loading...' : roundedRisk} / 100
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography>{riskMessages[Math.floor(riskNumber / 10)]}</Typography>
            <Typography variant="subtitle2">
              This risk is an estimate based on your city and district
              information including death rates, infection counts, density
              information, and other data. Please consult to official news
              sources in your area for more detailed and accurate information.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
