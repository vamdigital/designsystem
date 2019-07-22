import React, { Component } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-scss';

import './scss/app.scss';
import Header from './code/Layout/Header';
import Footer from './code/Layout/Footer';
import Main from './code/Pages/Main';

class App extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }
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
