import React, { Component } from 'react';
import TweenMax from 'gsap';
// import {Link} from 'react-router';

import Header from './Header';
import Canvas from './Canvas';
import Character from './Character';

class HomePage extends Component {
  conponentDidMount() {

  }
  render() {
    return (
      <div>
        <Header />
        <Canvas>
          <Character />
        </Canvas>
      </div>
    );    
  }
}

export default HomePage;
