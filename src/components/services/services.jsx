import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';
import Typography from '@material-ui/core/Typography';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import styles from './styles.js';

class Services extends React.Component {
  render() {
    const {classes} = this.props;
    const tileData = [
      {
        img: '/assets/weddings.jpg',
        title: 'Image',
        author: 'author'
      },
      {
        img: '/assets/event.jpg',
        title: 'Image',
        author: 'author'
      },
      {
        img: '/assets/birthday3.jpg',
        title: 'Image',
        author: 'author'
      }
    ];
    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>
        <Divider />
        <div className={classes.root}>
          <GridList className={classes.gridList} cellHeight={480} cols={3}>
            {tileData.map(tile =>
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
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

export default withStyles(styles)(Services);
