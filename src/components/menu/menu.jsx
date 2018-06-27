import React from 'react';
import {withStyles} from 'material-ui/styles';

import {Link} from 'react-router-dom';
import {Nav} from 'reactstrap';

import styles from './styles.js';

function Menu(props) {
  const {classes} = props;

  return (
    <Nav className={classes.menu} color="faded" pills horizontal="true">
      <Link className={classes.item} to="/services">
        Leistungen
      </Link>
      <Link className={classes.item} to="/about">
        Über uns
      </Link>
      <Link className={classes.item} to="/media">
        Media
      </Link>
      <Link className={classes.item} to="/contact">
        Kontakt
      </Link>
    </Nav>
  );
}

export default withStyles(styles)(Menu);
