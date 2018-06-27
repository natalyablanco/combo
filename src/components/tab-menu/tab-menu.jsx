import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import styles from './styles.js';

function TabContainer({children, dir}) {
  return (
    <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class TabMenu extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="gray"
            textColor="gray"
            fullWidth
            centered>
            <Tab label="HOCHZEIT" />
            <Tab label="VERANSTALTUNGEN" />
            <Tab label="GEBURSTAG" />
          </Tabs>
        </AppBar>
        <Typography
          className={classes.title}
          alignCenter
          type="title"
          gutterBottom>
          Die Hamburg Combo macht Ihr Event etwas ganz besonderes Planen Sie
        </Typography>
        <Typography variant="body1" gutterBottom>
          Planen Sie eine Geburtstagsfeier, eine baldige Hochzeit oder ein
          Firmenevent und wollen dazu Live klassische Musik auf dem höchsten
          Nivaeu? Die ‚Hamburg Combo‘ begleitet Ihrer Veranstaltung mit einer
          wundervollen Stimmung für Sie und Ihre Gäste und danach werden Sie
          eine schöne unvergessliche Zeit in Erinnerung behalten. Die ‚Hamburg
          Combo‘ spielt reizvolle klassische Musik aus Lateinamerika und Spanien
          für offizielle oder privat Veranstaltungen. Die Stücke, die wir
          spielen sind vielseitig und bestehen aus eine Mischung von flott und
          aufregend sowie romantisch und entspannt. Die beiden Musiker sind
          hochqualifiziert und haben hier in Hamburg an der Hochschule für Musik
          und Theater studiert (Master Studium und Konzert Exam). Rufen Sie uns
          gerne an oder schicken Sie uns eine unverbindliche Anfrage per Mail.
        </Typography>
      </div>
    );
  }
}

TabMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(TabMenu);
