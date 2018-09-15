import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {SocialIcon} from 'react-social-icons';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Typography from '@material-ui/core/Typography';

import styles from './styles.js';

function Footer(props) {
  const {classes} = props;
  return (
    <div>
      <BottomNavigation showLabels className={classes.wrapper}>
        <BottomNavigationAction
          icon={
            <SocialIcon
              color="gray"
              className={classes.icon}
              url="https://www.facebook.com/hamburg.combo/"
            />
          }
        />
        <BottomNavigationAction
          icon={
            <SocialIcon
              color="gray"
              className={classes.icon}
              url="https://www.youtube.com/user/kidunknown"
            />
          }
        />
      </BottomNavigation>
      <Typography
        variant="caption"
        className={classes.copyright}
        align="center">
        © 2018 NBL Hamburg
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);
