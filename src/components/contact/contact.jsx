import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './styles.js';

class Contact extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>
        <Divider />
        <div>
          <Paper className={classes.root} align="center">
            <Typography variant="headline" component="h3">
              Kontakt
            </Typography>
            <Typography component="p">Email: DuncanT@gmail.com</Typography>
            <Typography component="p">Handy: 01578 169 2500</Typography>
          </Paper>
        </div>
        <Divider />
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Contact);
