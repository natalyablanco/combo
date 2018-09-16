import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import styles from './styles.js';

class Combo extends React.Component {
  state = {
    hover: false
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () =>{ 
    this.setState({ hover: false });    
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  render() {
    const {classes} = this.props;
    const tileData = [
      {
        img: '/assets/duncan.jpg',
        title: 'Duncan Taylor',
        instrument: 'Gitarre'
      },
      {
        img: '/assets/fanis.jpg',
        title: 'Fanis Gioles',
        instrument: 'Perkussion'
      }
    ];

    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>
        <Divider />
        <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={480} cols={2}>
        {tileData.map(tile =>
              <GridListTile key={tile.img}>
              <img src={tile.img} 
                     alt={tile.title}             
                     className={this.state.hover ? classes.foto : classes.name} 
                     onMouseEnter={this.hoverOn} 
                     onMouseLeave={this.hoverOff} />
                     <GridListTileBar title={tile.title} subtitle={<span> {tile.instrument}</span>}/>
      
              </GridListTile>
            )}
          </GridList>
        </div>
        <Divider />
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Combo);