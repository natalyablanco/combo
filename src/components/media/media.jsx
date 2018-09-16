import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import styles from './styles.js';

class Media extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>
        <Divider />
        <div className={classes.wrapper}>
          <ReactPlayer
            className={classes.player}
            url="https://www.youtube.com/embed/-LuQMryRsAY"
            width="100%"
            height="100%"
          />
        </div>
        <Divider />
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Media);
