import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import {Nav} from 'reactstrap';

import styles from './styles.js';

class Menu extends React.Component {
  state = {
   value: "Home"
  };

  select = (event) => {
    this.setState({
      value: event.target.innerText
    });
  }
  
  render() {
    const {classes} = this.props;
    const menu = [ 
      {
        name: "Home",
        url: "/"
      },
      {
        name: "Leistungen",
        url: "/services"
      },
      {
        name: "Über uns",
        url: "/about"
      },
      { 
        name: "Media",
        url: "/media"
      },
      {
        name:  "Kontakt",
        url: "/contact"
      }
    ];
    return (
      <Nav className={classes.menu} color="faded" pills horizontal="true">
      {
        menu.map( menuItem => 
        <Link key={menuItem.url} className={this.state.value === menuItem.name ? classes.selected : classes.item} to={menuItem.url} onClick={this.select}>
          {menuItem.name}
        </Link>
        )
      }
    </Nav>
    );
  }
}
  
export default withStyles(styles)(Menu);
