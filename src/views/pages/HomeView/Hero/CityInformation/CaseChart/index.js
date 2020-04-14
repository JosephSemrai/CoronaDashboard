import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import Chart from './Chart';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%'
  }
}));

function CaseChart({ className, countyData, ...rest }) {
  const classes = useStyles();
  const performance = {
    thisYear: {
      data: [
        countyData.totalConfirmed,
        countyData.totalDeaths,
        countyData.totalRecovered
      ],
      labels: ['Confirmed', 'Fatal', 'Recovered']
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Case Distribution" />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box height={375}>
            {countyData ? (
              <Chart
                className={classes.chart}
                data={performance.thisYear.data}
                labels={performance.thisYear.labels}
              />
            ) : (
              <CircularProgress />
            )}
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

CaseChart.propTypes = {
  className: PropTypes.string
};

export default CaseChart;
