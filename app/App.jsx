import React, { Component } from 'react';

import './scss/app.scss';
import Header from './code/Layout/Header/Header';
import Footer from './code/Layout/Footer/Footer';
import Main from './code/Pages/Main/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/*This is where the router will get implemented*/}
        <Main />
        {/*End of router*/}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
