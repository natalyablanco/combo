import React from 'react';
import {withStyles} from 'material-ui/styles';

import Footer from '../footer/footer.jsx';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import Typography from '@material-ui/core/Typography';

import styles from './styles.js';

class Welcome extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <main className={classes.container}>
        <Typography className={classes.headline} variant="display2">
          Klassiche Musik mit Gitarre und Perkussion
        </Typography>

        <Card className={classes.card}>
          <CardBody>
            <CardTitle className={classes.title}>
              Die Hamburg Combo macht Ihr Event ganz besonders
            </CardTitle>

            <CardText className={classes.content}>
              Planen Sie eine Geburtstagsfeier, eine baldige Hochzeit oder ein
              Firmenevent und wollen dazu Live klassische Musik auf dem höchsten
              Nivaeu? Die <b>Hamburg Combo</b> begleitet Ihre Veranstaltung mit
              einer wundervollen Stimmung für Sie und Ihre Gäste und danach
              werden Sie eine schöne unvergessliche Zeit in Erinnerung behalten.
            </CardText>
            <CardText className={classes.content}>
              Die <b>Hamburg Combo</b> spielt reizvolle klassische Musik aus
              Lateinamerika und Spanien für offizielle oder privat
              Veranstaltungen. Die Stücke, die auf klassische Gitarre und
              Perkussion gespielt werden, sind lebendig, aufregend, sowie
              romantisch und entspannt.
            </CardText>

            <CardText className={classes.content}>
              Die beiden Musiker sind hochqualifiziert und haben hier in Hamburg
              an der Hochschule für Musik und Theater studiert (Master Studium
              und Konzertexamen).
            </CardText>
          </CardBody>
        </Card>
        <Footer />
      </main>
    );
  }
}

export default withStyles(styles)(Welcome);
