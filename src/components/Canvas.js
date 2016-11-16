import React, { Component, PropTypes } from 'react';
import { TimelineLite } from 'gsap';

import Character from './Character';
import Ground from './Ground';
import Flower from './Flower';
import Sun from './Sun';

class Canvas extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const canvas = this.canvas;

    const animationIntroCanvas = new TimelineLite();

    animationIntroCanvas
    .to(canvas, 0, { display: 'block' }, 7)
    .to(canvas, 1.5, { opacity: 1 }, 7);
  }

  render() {
    return (
      <div className="canvas" ref={(canvas) => this.canvas = canvas}>
        <Sun />
        <Character />
        <Ground />
      </div>
    );    
  }
}

Canvas.propTypes = {
  children: PropTypes.element,
};

export default Canvas;
