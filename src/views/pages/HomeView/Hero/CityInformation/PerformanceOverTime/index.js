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
  root: { display: 'flex', flexDirection: 'column', justifyContent: 'center' }
}));

function PerformanceOverTime({ className, location, countyData, ...rest }) {
  const classes = useStyles();

  let densityRisk =
    location.density && location.density != 0
      ? 1 + location.density / 10000
      : 1;
  let confirmedRisk =
    countyData.totalConfirmed && location.population && location.population != 0
      ? 1 + (countyData.totalConfirmed / location.population) * 8
      : 1;
  let deathRisk =
    countyData.totalDeaths && countyData.totalConfirmed
      ? 1 + (countyData.totalDeaths / countyData.totalConfirmed) * 5
      : 1;

  // For development, remove when finished with feature
  console.log(
    'Population',
    location.population,
    'Total Confirmed',
    countyData.totalConfirmed
  );
  console.table(densityRisk, confirmedRisk, deathRisk);

  // Handle small towns
  deathRisk = location.population < 10000 ? 1 : deathRisk;
  const riskLevel = densityRisk * confirmedRisk * deathRisk;

  let riskNumber = riskLevel * 10;

  if (riskNumber > 100) {
    riskNumber = 100;
  }

  const messageNumber = riskNumber === 100 ? 9 : Math.floor(riskNumber / 10);

  const roundedRisk = Math.round(riskNumber);

  const riskMessages = [
    'Level 1: The virus has just sprouted in your area. Medical facilities are still available. It is important to stay at home and adhere to CDC guidelines to keep this risk level from increasing.',
    'Level 2: The virus is at its beginnings in your area. Practice social isolation and only go to the store if you are in urgent need of something. Wear a mask and keep distance from others if you leave home.',
    'Level 3: The virus is still in its early stages of spreading in your area. Practice social distancing and do not visit public places. Take precautionary measures if you need to visit a store.',
    'Level 4: The virus has moderately spread throughout your area and death rates are increasing. Hospitals are in need of PPE. Stay at home, get food/groceries delivered when possible, and go out only if necessary.',
    'Level 5: The virus is continually worsening around you. Social distancing is vital in preventing further spread of the virus. Medical facilities are beginning to see a strain on resources.',
    'Level 6: The virus is becoming serious in your area. Hospitals are beginning to see a strain in medical supplies, staff, and equipment. Self-isolation is crucial to prevent the progression of the virus to a higher risk level.',
    'Level 7: The virus is serious in your area. Get food/groceries delivered, and try to avoid public spaces unless absolutely necessary. Medical facilities are limited. Follow local guidelines and take the proper precautionary measures.',
    'Level 8: The virus is serious and widespread. Medical facilities are burdened, and healthcare workers are starting to experience a higher risk of infection. Practice social isolation and follow local guidelines.',
    'Level 9: The virus has spread extensively throughout your area, and death rates are on the rise. Healthcare workers are becoming infected. Take precautions and follow local guidelines. Stay at home.',
    'Level 10: The virus is extremely serious in your area and death rates are very high. Medical facilities are overwhelmed, and medical supplies are low. Healthcare workers are contracting the virus. Do not go to a hospital unless your condition/symptoms are serious. Follow other local guidelines and precautionary measures. Stay at home!'
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Risk Analysis" />
      <Divider />

      {/* <Box minHeight="100%"> */}
      <CardContent
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ display: 'flex', flex: 1 }}
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          justifyContent="center"
          justify="center"
          height="100%"
        >
          <Grid item md={6} xs={12}>
            <Typography align="center" variant="h3" color="textPrimary">
              Your risk:
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
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box display="inline-block">
                <Typography
                  align="center"
                  variant="h1"
                  color={riskNumber > 50 ? 'error' : 'primary'}
                  style={{ marginTop: 10, display: 'inline-block' }}
                >
                  {riskNumber === NaN ? 'Loading...' : roundedRisk}
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ display: 'inline-block' }}
                >
                  /100
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography color="textPrimary">
              {riskMessages[messageNumber]}
            </Typography>
            <Typography variant="subtitle2">
              <Box fontStyle="italic" mt={2}>
                This risk is an abstract value estimated by your city and
                district information including death rates, infection counts,
                density information, and other data. The data and information on
                this page may be inaccurate and should only be taken as an
                unofficial recommendation. Please refer to reputable sources for
                verified information.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* </Box> */}
    </Card>
  );
}

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};

export default PerformanceOverTime;
