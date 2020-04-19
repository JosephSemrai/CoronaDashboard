import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles,
  CircularProgress
} from '@material-ui/core';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function Deaths({ className, value, ...rest }) {
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
          County Deaths
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          {value || value === null ? (
            <Typography variant="h3" color="textPrimary">
              {value || '0 or no data'}
            </Typography>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <PriorityHighIcon />
      </Avatar>
    </Card>
  );
}

Deaths.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};

export default Deaths;
