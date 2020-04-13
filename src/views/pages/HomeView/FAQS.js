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

const useStyles = makeStyles(theme => ({
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="textPrimary">
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid container spacing={3} component="dl">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              General Information &amp; Research
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  Can I be infected if I am a child or young adult?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  You can still be infected if you are younger. However, your
                  immune system is more likely to be stronger and able to tackle
                  the virus. This doesn’t mean that you should go to public
                  places though, as you can act as a carrier of the virus and
                  infect someone who has a weaker immune system.
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  How is the virus transmitted?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  The virus travels in droplets (released by an infected
                  person’s sneeze or cough) through the air and can live on hard
                  surfaces for a short period of time.
                </Typography>
              </dt>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="secondary">
              Common Coronavirus Questions
            </Typography>
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  Why should we practice social distancing?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  Social distancing is extremely important as the virus can be
                  transmitted unknowingly. Those who are immunocompromised
                  cannot fight the virus easily, so it is detrimental if they
                  are infected.
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
