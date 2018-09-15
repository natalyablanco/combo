import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import styles from './styles.js';

class Combo extends React.Component {
  render() {
    const {classes} = this.props;
    const tileData = [
      {
        img: '/assets/duncan.jpg',
        title: 'Duncan',
        author: 'author'
      },
      {
        img: '/assets/fanis.jpg',
        title: 'Fanis',
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
          <GridList className={classes.gridList} cellHeight={600} cols={2}>
            {tileData.map(tile =>
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} className={classes.foto} />
              </GridListTile>
            )}
          </GridList>
        </div>

        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Combo);
