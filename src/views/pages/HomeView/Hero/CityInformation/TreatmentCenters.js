/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Link,
  Button,
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
          {center.name} |
        </Typography>{' '}
        <Link href="#" variant="h5">
          {center.phones[0].number}
        </Link>
        <Typography color="textSecondary">
          {`${center.physical_address[0].city} | 
            ${center.physical_address[0].postal_code}`}
        </Typography>
        {processDescription(center.description)}
      </CardContent>
    </Card>
  );

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const sanitizedState = location.stateName.toLowerCase().replace(/\s/g, '-');
    axios
      .get(
        `https://covid-19-testing.github.io/locations/${sanitizedState}/complete.json`
      )
      .then(res => setTreatmentCenters(res.data))
      .catch(e => alert(e));
  });

  return (
    <Card style={{ maxHeight: '100%', overflowY: 'scroll' }}>
      <CardContent>
        <Typography color="textPrimary" variant="h4">
          Local Location Updates
        </Typography>
        {treatmentCenters ? (
          treatmentCenters.map(center => <CenterCard center={center} />)
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
}

TreatmentCenters.propTypes = {
  className: PropTypes.string
};

export default TreatmentCenters;
