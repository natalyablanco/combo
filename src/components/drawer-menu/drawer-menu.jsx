import React from 'react';
import {withStyles} from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import styles from './styles.js';

function DrawerMenu(props) {
  const {classes, open, handleDrawerClose} = props;
  return (
    <div>
      <Drawer classes={{paper: classes.drawerPaper}} open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <List component="nav" onClick={handleDrawerClose}>
          <ListItem
            component={Link}
            to="/services"
            button
            className={classes.item}>
            Leistungen
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to="/about"
            button
            className={classes.item}>
            Über uns
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to="/media"
            button
            className={classes.item}>
            Media
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to="/contact"
            button
            className={classes.item}>
            Kontakt
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(DrawerMenu);
