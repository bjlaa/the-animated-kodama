import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
// import {Link} from 'react-router';

import Header from './Header';
import Canvas from './Canvas';
import Character from './Character';

class HomePage extends Component {
  conponentDidMount() {
    const canvas = document.querySelector('.canvas');
    console.log(canvas);
    canvas.style.display = 'none';
    const tl = new TimelineLite();
    tl
    .from(canvas, 2, {
      css: {
        transform: 'translate(0, 400px)',
        opacity: 0,
      },
    }, 6.5);
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
