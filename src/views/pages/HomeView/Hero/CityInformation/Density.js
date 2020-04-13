import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography, makeStyles } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Label from 'src/components/Label';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function Density({ className, value, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          City Population Density
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {value} km2
          </Typography>
          <Label
            className={classes.label}
            color={value > 9000 ? 'error' : 'success'}
          >
            {value > 9000 ? 'High' : 'Normal'}
          </Label>
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <LocationCityIcon />
      </Avatar>
    </Card>
  );
}

Density.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};

export default Density;
