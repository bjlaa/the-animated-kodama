import React, { Component, PropTypes } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import $ from 'jquery';

import Character from './Character';
import Ground from './Ground';
import Flower from './Flower';
import Sun from './Sun';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyDownEvent: this.props.keyDownEvent,
      keyUpEvent: this.props.keyUpEvent,
      rotationLeft: '',
      rotationRight: '',
      rightFirst: false,
      leftFirst: false,
      tweensSetup: false,
      animationCharacter: '',
    };
    this.setUpTweens = this.setUpTweens.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.animateCharacterStill = this.animateCharacterStill.bind(this);
  }
  componentDidMount() {
    this.animateCharacterStill();
    /*
    const canvas = this.canvas;

    const animationIntroCanvas = new TimelineMax();

    animationIntroCanvas
    .to(canvas, 0, { display: 'block' }, 7)
    .to(canvas, 1.5, { opacity: 1 }, 7);
    */
  }

  componentWillReceiveProps(nextProps) {
    const setUpPromise = new Promise((resolve) => {
      resolve(
        this.setState({ 
          keyDownEvent: nextProps.keyDownEvent,
          keyUpEvent: nextProps.keyUpEvent
        })
      );
    });

    setUpPromise
    .then(() => {
      this.handleKeyDown(this.state.keyDownEvent);
      this.handleKeyUp(this.state.keyUpEvent);      
    });
  }

  setUpTweens() {
    if (this.state.rotationLeft != '') { 
      this.state.rotationLeft.kill(); 
    }
    if (this.state.rotationRight != '') {
      this.state.rotationRight.kill();       
    }

    const ground = $('.ground');
    this.setState({
      rotationLeft: TweenMax.to(ground, 500, { css: { rotation: '-=36000', transformOrigin: '50% 50%'}, ease: Power1.easeOut, paused: true, repeat: -1 }),
      rotationRight: TweenMax.to(ground, 500, { css: { rotation: '+=36000', transformOrigin: '50% 50%'}, ease: Power1.easeOut, paused: true, repeat: -1 }),
    });
    return;
  }

  handleKeyDown(event) {
    this.setUpTweens();

    console.log(event);
    if(event != '') {
      if (event.type == 'keydown') {
        
        if (event.key === 'ArrowLeft') {
          // console.log(event);
          this.state.rotationRight.resume();
        }

        if (event.key == 'ArrowRight') {
          // console.log(event);
          this.state.rotationLeft.resume();          
        }  
      }
    }
  }

  handleKeyUp(event) {
    if (event != '') {
      if (event.type === 'keyup') {
        console.log(event);
        this.state.rotationLeft.pause();
        this.state.rotationRight.pause(); 
      }
    }    
  }
  animateCharacterStill() {
    const character = $('.character');
    const head = $('.head');
    const torso = $('.torso');
    const rightArm = $('.right .arm');
    const leftArm = $('.left .arm');
    const rightLeg = $('.right .leg');
    const leftLeg = $('.left .leg');

    const animationCharacterStill = new TimelineMax({ repeat: -1 });

    animationCharacterStill
    .to(head, 2, { css: { transform: 'rotate(2deg)' }})
    .to(head, 0.1, { css: { transform: 'rotate(4deg)' }})
    .to(head, 2, { css: { transform: 'rotate(-2deg)' }})
    .to(torso, 2, { css: { transform: 'rotate(2deg)' }}, '-=4.1')
    .to(torso, 2, { css: { transform: 'rotate(-2deg)' }}, '-=2.1')
    .to(torso, 2, { css: { transform: 'rotate(0deg)' }}, '-=2.1')
  }

  render() {
    return (
      <div className="canvas" ref={(canvas) => this.canvas = canvas}>
        <Sun />
        <Character keyDownEvent={this.props.keyDownEvent} keyUpEvent={this.props.keyUpEvent} />
        <Ground keyDownEvent={this.props.keyDownEvent} keyUpEvent={this.props.keyUpEvent} />
      </div>
    );    
  }
}

Canvas.propTypes = {
  children: PropTypes.element,
};

export default Canvas;
