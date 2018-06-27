import React from 'react';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import {Image} from 'react-bootstrap';

import logo from '../../assets/logo-white.png';
import Menu from '../menu/menu.jsx';
import DrawerMenu from '../drawer-menu/drawer-menu.jsx';

import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';

import styles from './styles.js';

class Header extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  goToHome = () => {
    window.location = '/';
  };

  render() {
    const {classes, isMobile} = this.props;
    const {open} = this.state;

    let drawer = (
      <DrawerMenu
        open={this.state.open}
        handleDrawerClose={this.handleDrawerClose.bind()}
      />
    );

    if (isMobile) {
      return (
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Image
            src={logo}
            className={classes.mobile}
            responsive
            onClick={this.goToHome}
          />
          {drawer}
        </div>
      );
    } else {
      return (
        <div>
          <Image
            src={logo}
            className={classes.title}
            responsive
            onClick={this.goToHome}
          />
          <Menu />
        </div>
      );
    }
  }
}

export default withStyles(styles)(Header);
