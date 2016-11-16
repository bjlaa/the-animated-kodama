import React, { Component } from 'react';


import Header from './Header';
import Canvas from './Canvas';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Canvas />
      </div>
    );    
  }
}

export default HomePage;
