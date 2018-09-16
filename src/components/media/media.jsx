import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import styles from './styles.js';

class Media extends React.Component {

  state = {
    name: 'Hamburg Combo - Choros no. 1 (Villa-Lobos)',
    url: 'https://www.youtube.com/embed/3dAipH6wqz4'
  };

 playVideo = (name, url)=> () => {
    this.setState({ 
      name: name,
      url: url
     });
  };
  

  render() {
    const {classes} = this.props;
   const  media = [{
      url:  'https://www.youtube.com/embed/3dAipH6wqz4',
      name: 'Hamburg Combo - Choros no. 1 (Villa-Lobos)',
      img: '/assets/duncan.jpg'
    },
    {
      url:  'https://www.youtube.com/embed/2eDgD1cyfxs',
      name: 'Hamburg Combo - Vals Venezolano (Lauro)',
      img: '/assets/duncan.jpg'
    },
    {
      url:  'https://www.youtube.com/embed/nWaswhmh_PM',
      name: 'Hamburg Combo - Scherzino Mexicano (Ponce)',
      img: '/assets/duncan.jpg'
    } 
    ];
    return (
      <div>
        <main className={classes.container}>
          <Typography className={classes.headline} variant="display2">
            Klassiche Musik mit Gitarre und Perkussion
          </Typography>
          <Divider />
          <Typography  variant="body2" align="center">
            {this.state.name}
          </Typography>
          <div className={classes.playerWrapper} >
            <ReactPlayer 
              className={classes.player}
              url={this.state.url}
              width="100%"
              height="80%"
            />
          </div>    
          <List >
            {media.map(video => (
              <ListItem key={video.url} button
              onClick={this.playVideo(video.name, video.url)}>
                <ListItemText
                  primary={video.name}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
        <Footer />
        </main>
        </div>
    );
  }
}

export default withStyles(styles)(Media);
