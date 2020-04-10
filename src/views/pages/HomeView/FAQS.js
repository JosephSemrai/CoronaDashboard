import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

function FAQS({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
        >
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Service &amp; Information
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Question 1?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Other things
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Typography>
              </dt>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="overline"
              color="secondary"
            >
              Common Coronavirus Questions
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography
                  variant="h4"
                  color="textPrimary"
                >
                  Huh?
                </Typography>
              </dd>
              <dt>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Typography>
              </dt>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
