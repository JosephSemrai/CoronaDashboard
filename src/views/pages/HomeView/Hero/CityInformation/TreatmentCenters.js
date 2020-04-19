import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  centerCard: {
    marginTop: theme.spacing(1)
  }
}));

const processDescription = description => {
  if (description.length > 101) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <>
      <Typography color="textPrimary">{description}</Typography>
      {/* <Button
        onClick={() => alert(description)}
        style={{ margin: 0, padding: 0, paddingTop: 2 }}
      >
        Read more
      </Button> */}
    </>
  );
};

function TreatmentCenters({ className, location, ...rest }) {
  const [treatmentCenters, setTreatmentCenters] = useState();

  const classes = useStyles();

  const CenterCard = ({ center }) => (
    <Card className={classes.centerCard} variant="outlined">
      <CardContent>
        <Typography variant="h4" color="textPrimary">
          {center.name}
        </Typography>{' '}
        <Link href="#" variant="h5">
          {center.phones ? center.phones[0].number : 'No Phones Available'}
        </Link>
        <Typography color="textSecondary">
          {center.physical_address
            ? `${center.physical_address[0].city} | 
            ${center.physical_address[0].postal_code}`
            : 'No Addresses Available'}
        </Typography>
        {processDescription(center.description)}
      </CardContent>
    </Card>
  );

  useEffect(() => {
    const sanitizedState = location.state.toLowerCase().replace(/\s/g, '-');
    axios
      .get(
        `https://covid-19-testing.github.io/locations/${sanitizedState}/complete.json`
      )
      .then(res => setTreatmentCenters(res.data))
      .catch(e => alert(e));
  }, [location]);

  return (
    <Card style={{ maxHeight: '100%' }}>
      <CardContent>
        <Typography color="textPrimary" variant="h4">
          Local Location Updates
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {treatmentCenters ? (
            treatmentCenters.map(center => (
              <Grid item lg={3}>
                <CenterCard center={center} />
              </Grid>
            ))
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

TreatmentCenters.propTypes = {
  className: PropTypes.string
};

export default TreatmentCenters;
