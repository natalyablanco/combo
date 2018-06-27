import React from 'react';
import {withStyles} from 'material-ui/styles';

import styles from './styles.js';

function Divider(props) {
  const {classes} = props;

  return <div className={classes.divider} />;
}

export default withStyles(styles)(Divider);
