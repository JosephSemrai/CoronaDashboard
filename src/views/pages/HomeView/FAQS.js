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
          FAQ
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>
        <Grid container spacing={3} component="dl">
          <Grid item xs={12} md={6}>
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
              <dt>
                <Typography variant="body1" color="textSecondary">
                  Once infected with coronavirus, one may not show symptoms
                  until 10-14 days afterwards. This means that you can infect
                  many people during that time period without even knowing it.
                </Typography>
              </dt>
            </Box>
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
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  What should I do if I run out of food at home?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  Try using delivery services for groceries if possible. Check
                  online for local websites that are doing home delivery.
                  UberEats and similar services may still be available in your
                  area. However, if you are completely out of food and need to
                  go to the store, try to stay away from other people. If your
                  local store has special hours for pregnant and elderly people,
                  do NOT visit the store during that time.
                </Typography>
              </dt>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  How can I protect myself?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  Staying at home is the most effective method to protect
                  yourself. Make sure you are washing your hands (20 seconds,
                  with soap and water). Use an alcohol-based hand rub (with at
                  least 60% alcohol) if necessary. Wear a mask if you urgently
                  need to visit a store. Disinfect frequently touched surfaces
                  and objects, such as doorknobs, handles, remotes, tables, and
                  light switches.
                </Typography>
              </dt>
            </Box>
            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  Can I donate blood?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  Yes, hospitals are still in urgent need of blood. Make sure
                  you call or check the website of the blood donation center
                  before going. Many of them are asking donors to make
                  appointments ahead of time to avoid lines. They are also
                  taking other safety measures, like keeping chairs 6 feet
                  apart.
                </Typography>
              </dt>
            </Box>

            {/* <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  Should I be concerned if I am under 20?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  You can still be infected if you are younger. Your immune
                  system is likely to be stronger and better equipped to tackle
                  the virus. However, this doesn’t mean that you should abandon
                  caution, as you can easily act as a carrier of the virus and
                  infect someone else.
                </Typography>
              </dt>
            </Box> */}

            <Box mt={6}>
              <dd>
                <Typography variant="h4" color="textPrimary">
                  Will schools resume any time soon?
                </Typography>
              </dd>
              <dt>
                <Typography variant="body1" color="textSecondary">
                  This depends on your state’s education board and government.
                  Some schools are canceled for the rest of the year. Others are
                  releasing periodic updates regarding school cancellation.
                  However, it is unlikely that schools will reopen, as teachers
                  and students need to stay safe and the virus continues to
                  spread.
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
