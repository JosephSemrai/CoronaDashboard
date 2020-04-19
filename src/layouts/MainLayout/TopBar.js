import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import { APP_VERSION } from 'src/config';
import Cookies from 'js-cookie';
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/constants';
import * as animationData from 'src/assets/coronavirus.json';
import Lottie from 'react-lottie';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();

  const handleColorSwitch = () => {
    const otherTheme =
      settings.theme === THEMES.LIGHT ? THEMES.ONE_DARK : THEMES.LIGHT;
    saveSettings({ theme: otherTheme });
    Cookies.set('settingsUpdated', 'true');
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'none',
      viewBox: '0 0 64 32'
    }
  };

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          {/* <Logo className={classes.logo} /> */}
          <Lottie
            options={defaultOptions}
            height={64}
            isStopped={false}
            isPaused={false}
            width={64}
          />
        </RouterLink>
        <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            Version
            {` ${APP_VERSION}`}
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        {/* <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/app"
          underline="none"
          variant="body2"
        >
          Placeholder Page
        </Link> */}
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
        >
          Documentation
        </Link>
        <Divider className={classes.divider} />
        <Button
          color="secondary"
          component="a"
          onClick={handleColorSwitch}
          variant="contained"
          size="small"
        >
          Switch Themes
        </Button>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
