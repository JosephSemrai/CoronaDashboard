import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Button,
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
          Suggested Actions
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>01</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Determine Symptoms
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    If you have a fever, sore throat, or dry cough, you should
                    self-quarantine and attempt to recover at home. If these
                    symptoms persist for 2 or more days and do not improve, call
                    your primary care provider. They will give you further
                    instruction. If you are having trouble breathing, feel
                    pressure in your chest, have bluish lips, or feel sudden
                    confusion, visit a hospital.
                    <br />
                    <Button
                      variant="contained"
                      component="a"
                      href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                      target="_blank"
                    >
                      View COVID-19 on CDC.gov
                    </Button>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>02</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Protect Yourself
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Stay at home. If someone in your house is sick, maintain a
                    safe distance from them. Make sure you are washing your
                    hands (20 seconds with soap and water). Use an alcohol-based
                    hand rub (with at least 60% alcohol) if necessary. Disinfect
                    frequently touched surfaces and objects, such as doorknobs,
                    handles, remotes, tables, and light switches.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <Avatar className={classes.avatar}>03</Avatar>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Maintain Mental Health
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Go for a run or walk to clear your mind. Disconnect from the
                    news for a while to avoid constant reminders about the
                    virus. Perform activities that will distract and relax you,
                    like watching TV, cooking, reading, or completing a puzzle.
                    If you are experiencing anxiety about the pandemic, call a
                    therapist or trusted person.
                  </Typography>
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
