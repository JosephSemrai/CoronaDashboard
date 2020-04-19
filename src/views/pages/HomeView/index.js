import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import ActionPlan from './ActionPlan';
// import NewsFeed from './NewsFeed';
import CTA from './CTA';
import FAQS from './FAQS';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Hero />
      <ActionPlan />
      {/* <NewsFeed /> */}
      <FAQS />
      <CTA />
    </Page>
  );
}

export default HomeView;
