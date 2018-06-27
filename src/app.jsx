import React from 'react';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';

class App extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  render() {
    const {width} = this.state;
    const isMobile = width <= 550;

    return (
      <div>
        <Header isMobile={isMobile} />
        <Main />
      </div>
    );
  }
}

export default App;
