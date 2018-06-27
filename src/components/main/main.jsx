import React from 'react';

import {Switch, Route} from 'react-router-dom';

import About from '../about/combo.jsx';
import Media from '../media/media.jsx';
import Contact from '../contact/contact.jsx';
import Services from '../services/services.jsx';
import Welcome from '../welcome/welcome.jsx';

const Main = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>;

export default Main;
