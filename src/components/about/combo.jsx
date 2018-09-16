import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Footer from '../footer/footer.jsx';
import Divider from '../divider/divider.jsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import styles from './styles.js';

class Combo extends React.Component {
  state = {
    name: '',
    bio: '',
    open: false,
    scroll: 'paper',
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

  handleClickOpen = (name, bio, scroll)=> () => {
    this.setState({ 
      name: name,
      bio: bio,
      open: true, 
      scroll
     });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes} = this.props;
    const tileData = [
      {
        img: '/assets/duncan.jpg',
        title: 'Duncan Taylor',
        instrument: 'Gitarre',
        bio: "Duncan Taylor wurde 1985 in Derby, England, geboren.\n"+
        "Seinen Bachelor of Music im Fach klassische Gitarre absolvierte er zwischen 2006 und 2009 bei Craig Ogden und Gordon Crosskey am Royal Northern College of Music (RNCM) in Manchester, England, und schloss dort sein Abschlusskonzert mit der Note 1 ab.\n"+
        "Daraufhin nahm er das Masterstudium an der Hochschule für Musik und Theater in Hamburg bei Prof. Olaf van Gonnissen und Prof. Klaus Hempel auf, das er im Sommer 2012 mit der Note 1 abschloss.\n"+
        "In Großbritannien hat Duncan auf einer Vielzahl von Veranstaltungen konzertiert, darunter in der Venezulanischen Botschaft in London, der Haden Freeman Concert Hall in Manchester und dem Bruntwood Theatre, ebenfalls in Manchester. Auch in Deutschland ist er mehrfach im Rahmen von Konzerten und Festivals aufgetreten.\n"+
        "Duncan Taylor hat während seines Studiums der klassischen Gitarre seine Leidenschaft für lateinamerikanische Musik entdeckt. Im Oktober 2014 begründete er das Ensemble gemeinsam mit einem weiteren Gitarristen und einem Schlagzeuger.\n"+
        "Seit Februar 2017 arbeitet er mit dem Percussionisten Fanis Gioles im ‘Hamburg Combo’ zusammen. Seitdem begeistern die beiden Hamburgs Cafés, Kneipen, Bühnen und Hafenfähren mit ihrer Auswahl aus Konzertstücken aus allen Ländern Lateinamerikas, Spanien und erfreuen sich dabei wachsender Beliebtheit."
      },
      {
        img: '/assets/fanis.jpg',
        title: 'Fanis Gioles',
        instrument: 'Perkussion',
        bio: "Fanis Gioles zählt zu den vielversprechendsten griechischen Schlagzeugern der jungen Genenation.\n"+
        "Geboren 1988 in Athen, begann er  im Alter von fünf Jahren mit dem Violinspiel, bevor er im Alter von zehn mit dem Schlagzeugspielen anfing.\n"+
        "Im Jahr  2007 fing er sein Schlagzeugstudium unter den Leitung von Konstantinos Vorissis und Konstantinos Theodorakos (Moschato Konservatorium, Acropolis Konservatorium - Kunstzentrum) an. 2013 wurde ihm das Schlagzeug Diplom mit der Note „Ausgezeichnet“ erteilt. Zwischen 2014 und 2017 studierte er an der Hochschule für Musik und Theater Hamburg in der Schlagzeugklasse von Prof. Cornelia Monske, und erwarb sein Master mit der Note 1.0 “Ausgezeichnet”.\n"+
        "Fanis Gioles gewann zahlreiche Preise bei internationalen und nationalen Wettbewerbe wie den 3. Preis bei den PAS Greece Percussion Competition in 2011, den 2. Preis bei den Griechischen Yamaha Wettbewerb Und den DAAD Preis in 2017.\n"+
        "Er musiziert zurzeit mit verschiedenen Bands in Deutschland und in Ausland.\n"+
        "Seit 2014 wohnt er in Hamburg und arbeitet als Schlagzeuger und Schlagzeuglehrer." 
  
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
                     onMouseLeave={this.hoverOff} 
                     onClick={this.handleClickOpen(tile.title,tile.bio,'paper')} />
                     <GridListTileBar title={tile.title} subtitle={<span> {tile.instrument}</span>}/>
              </GridListTile>
            )}
          </GridList>
        </div>

      <Dialog open={this.state.open} onClose={this.handleClose}
              scroll={this.state.scroll} aria-labelledby="scroll-dialog-title">
        <DialogTitle id="scroll-dialog-title">{this.state.name}</DialogTitle>
        <DialogContent>
          <DialogContentText align="justify">
            {this.state.bio}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Schließen
          </Button>
        </DialogActions>
        </Dialog>
        
        <Divider />
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Combo);