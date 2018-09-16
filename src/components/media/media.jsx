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
    const media = [{
      url:  "https://www.youtube.com/embed/3dAipH6wqz4",
      name: "Hamburg Combo - Choros no. 1 (Villa-Lobos)"
    },
    {
      url:  "https://www.youtube.com/embed/2eDgD1cyfxs",
      name: "Hamburg Combo - Vals Venezolano (Lauro)"
    },
    {
      url:  "https://www.youtube.com/embed/nWaswhmh_PM",
      name: "Hamburg Combo - Scherzino Mexicano (Ponce)"
    } 
    ];
    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>
        <Divider />
          {
            media.map(video =>  
              <div className={classes.playerWrapper} >
                <Typography  variant="body2" align="center">
                  {video.name}
                </Typography>
                <ReactPlayer 
                  className={classes.player}
                  url={video.url}
                />
            </div>
            )
          }
        <Divider />
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Media);
