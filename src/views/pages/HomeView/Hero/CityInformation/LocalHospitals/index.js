import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Link,
  colors,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import GenericMoreButton from 'src/components/GenericMoreButton';
import CircularProgress from './CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%'
  },
  image: {
    flexShrink: 0,
    height: 56,
    width: 56
  },
  subscriptions: {
    fontWeight: theme.typography.fontWeightMedium
  },
  value: {
    color: colors.green[600],
    fontWeight: theme.typography.fontWeightMedium
  },
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function MostProfitableProducts({ className, location, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [treatmentCenters, setTreatmentCenters] = useState();

  const getTreatmentCenters = useCallback(() => {
    const sanitizedState = location.state.toLowerCase().replace(/\s/g, '-');
    axios
      .get(
        `https://covid-19-testing.github.io/locations/${sanitizedState}/complete.json`
      )
      .then(res => {
        if (isMountedRef.current) {
          setTreatmentCenters(res.data);
        }
      })
      .catch(e => alert(e));
  }, [isMountedRef, location.state]);

  useEffect(() => {
    getTreatmentCenters();
  }, [getTreatmentCenters]);

  if (!treatmentCenters) {
    return <CircularProgress />;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        action={<GenericMoreButton />}
        title="Local Treatment Center Updates"
      />
      <Divider />
      <Box overflow="auto">
        <Table style={{ tableLayout: 'fixed', width: '100%' }}>
          <TableBody>
            {treatmentCenters.map(center => (
              <TableRow hover key={center.name}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box ml={2}>
                      <Typography variant="h6" color="textPrimary">
                        {center.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <span className={classes.subscriptions}>
                          {center.physical_address
                            ? `${center.physical_address[0].city} | 
            ${center.physical_address[0].postal_code}`
                            : 'No Addresses Available'}
                        </span>
                      </Typography>
                      <Link
                        href={`tel:${
                          center.phones
                            ? center.phones[0].number
                            : 'No Phones Available'
                        }`}
                        variant="h5"
                      >
                        {center.phones
                          ? center.phones[0].number
                          : 'No Phones Available'}
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell width="80%">
                  <Typography variant="body2" color="textPrimary">
                    {center.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button component={RouterLink} size="small" to="#">
          See all
          <NavigateNextIcon className={classes.navigateNextIcon} />
        </Button>
      </Box>
    </Card>
  );
}

MostProfitableProducts.propTypes = {
  className: PropTypes.string
};

export default MostProfitableProducts;
