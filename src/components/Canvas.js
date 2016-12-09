import React, { Component, PropTypes } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import $ from 'jquery';

import Character from './Character';
import Ground from './Ground';
import Sun from './Sun';
import Moon from './Moon';

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
    setTimeout(() => this.animateCharacterStill(), 1);
    const canvas = this.canvas;

    const animationIntroCanvas = new TimelineMax();

    animationIntroCanvas
    .to(canvas, 0, { display: 'block' }, 7)
    .to(canvas, 1.5, { opacity: 1 }, 7);
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
      /*eslint-disable */
      rotationLeft: TweenMax.to(ground, 500, { css: { rotation: '-=36000', transformOrigin: '50% 50%'}, ease: Power1.easeOut, paused: true, repeat: -1 }),
      rotationRight: TweenMax.to(ground, 500, { css: { rotation: '+=36000', transformOrigin: '50% 50%'}, ease: Power1.easeOut, paused: true, repeat: -1 }),
      /*eslint-enable */
    });
    return;
  }

  handleKeyDown(event) {
    this.setUpTweens();
    if(event != '') {
      if (event.type == 'keydown') {
        
        if (event.key === 'ArrowLeft') {
          this.state.rotationRight.resume();
        }

        if (event.key == 'ArrowRight') {
          this.state.rotationLeft.resume();         
        }  
      }
    }
  }

  handleKeyUp(event) {
    if (event != '') {
      if (event.type === 'keyup') {
        if (event.key == 'ArrowRight' || event.key =='ArrowLeft') {
          this.state.rotationLeft.pause();
          this.state.rotationRight.pause();          
        }
      }
    }    
  }

  animateCharacterStill() {
    const headAnimation = new TimelineMax();
    headAnimation
    /*eslint-disable */
    .to('.head', 1.5, { css: { transform: 'rotate(35deg)'}, ease: Power2.easeOut})
    /*eslint-enable */
    .to('.head', 0.01, { css: { transform: 'rotate(-28deg)' }})
    .to('.head', 0.02, { css: { transform: 'rotate(25deg)' }})
    .to('.head', 0.03, { css: { transform: 'rotate(-22deg)' }})
    .to('.head', 0.04, { css: { transform: 'rotate(19deg)' }})
    .to('.head', 0.05, { css: { transform: 'rotate(-17deg)' }})
    .to('.head', 0.06, { css: { transform: 'rotate(10deg)' }})
    .to('.head', 0.08, { css: { transform: 'rotate(-7deg)' }})
    .to('.head', 0.1, { css: { transform: 'rotate(4deg)' }})
    .to('.head', 0.12, { css: { transform: 'rotate(0deg)' }})
    .to('.head', 1, { css: { transform: 'rotate(1deg)' }})
    .to('.head', 1, { css: { transform: 'rotate(-2deg)' }})
    .to('.head', 1, { css: { transform: 'rotate(-3deg)' }})
    .to('.head', 0.99, { css: { transform: 'rotate(0deg)' }});

    const torso1Animation = new TimelineMax();
    torso1Animation
    .to('.torso1', 1.5, { attr: { x2: 33.979, y2: 13.278 }})
    .to('.torso1', 0, { attr: { x2: 33.979, y2: 13.278 }})
    .to('.torso1', 0.02, { attr: { x2: 37.979, y2: 3.278 }})
    .to('.torso1', 4.48, { attr: { x2: 37.979, y2: 3.278 }});

    const torso2Animation = new TimelineMax();
    torso2Animation
    .to('.torso2', 1.5, { attr: { x1: 33.979, y1: 13.175 }})
    .to('.torso2', 0, { attr: { x1: 33.979, y1: 13.175 }})
    /*eslint-disable */
    .to('.torso2', 0.02, { attr: { x1: 37.979, y1: 4.175 }, ease: Power4.easeInOut})
    /*eslint-enable */
    .to('.torso2', 4.48, { attr: { x1: 37.979, y1: 4.175 }});

    const rightArmAnimation = new TimelineMax();
    rightArmAnimation
    .fromTo('.rightArm', 2, { css: { transform: 'rotateY(180deg) rotate(45deg)' }}, { css: { transform: 'rotateY(180deg) rotate(46deg)' }})
    .to('.rightArm', 1, { css: { transform: 'rotateY(180deg) rotate(44.5deg)' }})
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(46deg)' }})
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(45deg)' }});

    const leftArmAnimation = new TimelineMax();
    leftArmAnimation
    .fromTo('.leftArm', 2, { css: { transform: 'rotate(45deg)' }}, { css: { transform: 'rotate(46deg)' }}, 'start')
    .to('.leftArm', 1, { css: { transform: 'rotate(44.5deg)' }})
    .to('.leftArm', 1.5, { css: { transform: 'rotate(46deg)' }})
    .to('.leftArm', 1.5, { css: { transform: 'rotate(45deg)' }});

    const rightEye1Animation = new TimelineMax();
    rightEye1Animation
    .addLabel('start')
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.6')
    .to('.rightEye1', 1.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.8')
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.1')
    .to('.rightEye1', 1.7, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.3');

    const rightEye2Animation = new TimelineMax();
    rightEye2Animation
    .addLabel('start')
    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.6')
    .to('.rightEye2', 1.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.8')
    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.1')
    .to('.rightEye2', 1.7, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.3');

    const rightEye3Animation = new TimelineMax();
    rightEye3Animation
    .addLabel('start')
    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.6')
    .to('.rightEye3', 1.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.8')
    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.1')
    .to('.rightEye3', 1.7, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.3');

    const rightEye4Animation = new TimelineMax();
    rightEye4Animation
    .addLabel('start')
    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.6')
    .to('.rightEye4', 1.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.8')
    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.1')
    .to('.rightEye4', 1.7, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.3');

    const leftEye1Animation = new TimelineMax();
    leftEye1Animation
    .addLabel('start')
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.6')
    .to('.leftEye1', 1.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.8')
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.1')
    .to('.leftEye1', 1.7, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.3');

    const leftEye2Animation = new TimelineMax();
    leftEye2Animation
    .addLabel('start')
    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.6')
    .to('.leftEye2', 1.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.8')
    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.1')
    .to('.leftEye2', 1.7, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.3');

    const leftEye3Animation = new TimelineMax();
    leftEye3Animation
    .addLabel('start')
    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=2.5')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.6')
    .to('.leftEye3', 1.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.8')
    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=4')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.1')
    .to('.leftEye3', 1.7, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.3');

    const leftEye4Animation = new TimelineMax();
    leftEye4Animation
    .addLabel('start')
    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=2.5')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.6')
    .to('.leftEye4', 1.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.8')
    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=4')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.1')
    .to('.leftEye4', 1.7, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.3');

    const masterAnimation = new TimelineMax({ repeat: -1 });

    masterAnimation
    .addLabel('start-master')
    .add(headAnimation, 'start-master')
    .add(torso1Animation, 'start-master')
    .add(torso2Animation, 'start-master')
    .add(rightArmAnimation, 'start-master')
    .add(leftArmAnimation, 'start-master')
    .add(rightEye1Animation, 'start-master')
    .add(rightEye2Animation, 'start-master')
    .add(rightEye3Animation, 'start-master')
    .add(rightEye4Animation, 'start-master')
    .add(leftEye1Animation, 'start-master')
    .add(leftEye2Animation, 'start-master')
    .add(leftEye3Animation, 'start-master')
    .add(leftEye4Animation, 'start-master');
  }

  render() {
    return (
      <div className="canvas" ref={(canvas) => this.canvas = canvas}>
        <Sun />
        <Moon />
        <Character keyDownEvent={this.props.keyDownEvent} keyUpEvent={this.props.keyUpEvent} />
        <Ground keyDownEvent={this.props.keyDownEvent} keyUpEvent={this.props.keyUpEvent} />
      </div>
    );    
  }
}

Canvas.propTypes = {
  children: PropTypes.element,
  keyDownEvent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  keyUpEvent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default Canvas;
