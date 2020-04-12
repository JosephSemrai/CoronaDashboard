import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

function ActionPlan({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="secondary"
          align="center"
        >
          Action Plan
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          What you should do next
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Protect yourself
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Stay at home. If someone is your house in sick, maintain
                    distance from them. Make sure you are consistently washing
                    your hands (20 seconds with soap and water). Use an
                    alcohol-based hand rub (with at least 60% alcohol) if
                    needed. Disinfect frequently touched surfaces and objects,
                    such as doorknobs, handles, remotes, tables, and light
                    switches.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Maintain your mental health
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Go on a run or walk, staying away from people, to clear your
                    head. Disconnect from the news for some time to avoid being
                    constantly reminded about the virus. Do activities that can
                    distract you and relax you, like watching your favorite
                    show, cooking, reading, or doing a puzzle. Video call a
                    friend and chat about how you are passing your time. If you
                    are experiencing anxiety about the pandemic, call a
                    therapist or a trusted person.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Do something productive
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Doing productive work can make you feel accomplished. You
                    can set goals for yourself, work out, and work on yourself
                    more. It is a great way to make the best out of a bad
                    situation.
                  </Typography>
                  <Button
                    variant="outlined"
                    component="a"
                    href="https://google.com"
                    target="_blank"
                  >
                    Example HREF
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

ActionPlan.propTypes = {
  className: PropTypes.string
};

export default ActionPlan;
