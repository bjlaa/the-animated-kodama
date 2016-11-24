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
    this.clearAnimationCharacter = this.clearAnimationCharacter.bind(this);
    this.setUpTweens = this.setUpTweens.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.animateCharacterStill = this.animateCharacterStill.bind(this);
  }
  componentDidMount() {
    setTimeout(() => this.animateCharacterStill(), 1);
    // this.animateCharacterStill();
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

  clearAnimationCharacter() {
    this.state.animationCharacter.kill();
    this.setState({ animationCharacter: '' });
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
    if(event != '') {
      if (event.type == 'keydown') {
        
        if (event.key === 'ArrowLeft') {
          this.clearAnimationCharacter();
          this.state.rotationRight.resume();
          this.animateCharacterMovingLeft();
        }

        if (event.key == 'ArrowRight') {
          this.clearAnimationCharacter();
          this.state.rotationLeft.resume();
          this.animateCharacterMovingRight();         
        }  
      }
    }
  }

  handleKeyUp(event) {
    if (event != '') {
      if (event.type === 'keyup') {
        if (event.key == 'ArrowRight' || event.key =='ArrowLeft') {
          this.clearAnimationCharacter();
          this.state.rotationLeft.pause();
          this.state.rotationRight.pause();
          // this.animateCharacterStill();          
        }
      }
    }    
  }

  animateCharacterStill() {
    const animation = new TimelineMax({ repeat: -1 });

    this.setState({
      animationCharacter: animation
    .addLabel('start')

    .to('.head', 2, { css: { transform: 'rotate(35deg)' }}, 'start')
    .to('.head', 0.01, { css: { transform: 'rotate(-28deg)' }}, 'start+=2')
    .to('.head', 0.02, { css: { transform: 'rotate(25deg)' }}, 'start+=2.01')
    .to('.head', 0.03, { css: { transform: 'rotate(-22deg)' }}, 'start+=2.03')
    .to('.head', 0.04, { css: { transform: 'rotate(19deg)' }}, 'start+=2.06')
    .to('.head', 0.05, { css: { transform: 'rotate(-17deg)' }}, 'start+=2.1')
    .to('.head', 0.06, { css: { transform: 'rotate(10deg)' }}, 'start+=2.15')
    .to('.head', 0.08, { css: { transform: 'rotate(-7deg)' }}, 'start+=2.21')
    .to('.head', 0.1, { css: { transform: 'rotate(4deg)' }}, 'start+=2.29')
    .to('.head', 0.12, { css: { transform: 'rotate(0deg)' }}, 'start+=2.39')
    .to('.head', 1, { css: { transform: 'rotate(1deg)' }}, 'start+=2.51')
    .to('.head', 1, { css: { transform: 'rotate(-1deg)' }}, 'start+=3.51')
    .to('.head', 1.49, { css: { transform: 'rotate(0deg)' }}, 'start+=4.51')

    .to('.torso1', 2, { attr: { x2: 33.979, y2: 13.278 }}, 'start')
    .to('.torso1', 0, { attr: { x2: 33.979, y2: 13.278 }}, 'start+=2')
    .to('.torso1', 0.02, { attr: { x2: 37.979, y2: 3.278 }}, 'start+=2')
    .to('.torso1', 3.98, { attr: { x2: 37.979, y2: 3.278 }}, 'start+=2.02')

    .to('.torso2', 2, { attr: { x1: 33.979, y1: 13.175 }}, 'start')
    .to('.torso2', 0, { attr: { x1: 33.979, y1: 13.175 }}, 'start+=2')
    .to('.torso2', 0.02, { attr: { x1: 37.979, y1: 4.175 }, ease: Power4.easeInOut}, 'start+=2')
    .to('.torso2', 3.98, { attr: { x1: 37.979, y1: 4.175 }}, 'start+=2.02')


    .fromTo('.rightArm', 2, { css: { transform: 'rotateY(180deg) rotate(45deg)' }}, { css: { transform: 'rotateY(180deg) rotate(46deg)' }}, 'start')
    .to('.rightArm', 1, { css: { transform: 'rotateY(180deg) rotate(44.5deg)' }}, 'start+=2')
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(46deg)' }}, 'start+=3')
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(45deg)' }}, 'start+=4.5')

    .fromTo('.leftArm', 2, { css: { transform: 'rotate(45deg)' }}, { css: { transform: 'rotate(46deg)' }}, 'start')
    .to('.leftArm', 1, { css: { transform: 'rotate(44.5deg)' }}, 'start+=2')
    .to('.leftArm', 1.5, { css: { transform: 'rotate(46deg)' }}, 'start+=3')
    .to('.leftArm', 1.5, { css: { transform: 'rotate(45deg)' }}, 'start+=4.5')

    // Right eye
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.6')
    .to('.rightEye1', 1.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.8')
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.1')
    .to('.rightEye1', 1.7, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.3')

    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.6')
    .to('.rightEye2', 1.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.8')
    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.1')
    .to('.rightEye2', 1.7, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.3')

    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.6')
    .to('.rightEye3', 1.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.8')
    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.1')
    .to('.rightEye3', 1.7, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.3')

    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.6')
    .to('.rightEye4', 1.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.8')
    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.1')
    .to('.rightEye4', 1.7, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.3')

    //Left eye
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.6')
    .to('.leftEye1', 1.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.8')
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.1')
    .to('.leftEye1', 1.7, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.3')    

    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.6')
    .to('.leftEye2', 1.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.8')
    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.1')
    .to('.leftEye2', 1.7, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.3')

    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=2.5')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.6')
    .to('.leftEye3', 1.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.8')
    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=4')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.1')
    .to('.leftEye3', 1.7, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.3')

    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=2.5')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.6')
    .to('.leftEye4', 1.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.8')
    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=4')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.1')
    .to('.leftEye4', 1.7, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.3'),
    });
  }

  animateCharacterMovingRight() {
    const animation = new TimelineMax({ repeat: -1 });

    this.setState({
      animationCharacter: animation
    .addLabel('start')

    // .to('.character', )

    .fromTo('.head', 6, { css: { transform: 'rotate(0deg) rotateY(40deg)' }}, { css: { transform: 'rotate(0deg) rotateY(40deg)' }}, 'start')

    .fromTo('.torso', 6, { css: { transform: 'rotateY(50deg)' }}, { css: { transform: 'rotateY(50deg)' }}, 'start' )

    .fromTo('.rightArm', 2, { css: { transform: 'rotateY(180deg) rotate(45deg)' }}, { css: { transform: 'rotateY(180deg) rotate(46deg)' }}, 'start')
    .to('.rightArm', 1, { css: { transform: 'rotateY(180deg) rotate(44.5deg)' }}, 'start+=2')
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(46deg)' }}, 'start+=3')
    .to('.rightArm', 1.5, { css: { transform: 'rotateY(180deg) rotate(45deg)' }}, 'start+=4.5')

    .fromTo('.leftArm', 2, { css: { transform: 'rotate(45deg)' }}, { css: { transform: 'rotate(46deg)' }}, 'start')
    .to('.leftArm', 1, { css: { transform: 'rotate(44.5deg)' }}, 'start+=2')
    .to('.leftArm', 1.5, { css: { transform: 'rotate(46deg)' }}, 'start+=3')
    .to('.leftArm', 1.5, { css: { transform: 'rotate(45deg)' }}, 'start+=4.5')

    // Right eye
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.6')
    .to('.rightEye1', 1.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=2.8')
    .to('.rightEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye1', 0.2, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.1')
    .to('.rightEye1', 1.7, { attr: { y1: 91.388, y2: 81.076 }}, 'start+=4.3')

    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.6')
    .to('.rightEye2', 1.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=2.8')
    .to('.rightEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye2', 0.2, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.1')
    .to('.rightEye2', 1.7, { attr: { y1: 81.076, y2: 93.184 }}, 'start+=4.3')

    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.6')
    .to('.rightEye3', 1.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=2.8')
    .to('.rightEye3', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye3', 0.2, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.1')
    .to('.rightEye3', 1.7, { attr: { y1: 93.184, y2: 112.464 }}, 'start+=4.3')

    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.6')
    .to('.rightEye4', 1.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=2.8')
    .to('.rightEye4', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.rightEye4', 0.2, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.1')
    .to('.rightEye4', 1.7, { attr: { y1: 91.388, y2: 107.98 }}, 'start+=4.3')

    //Left eye
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.6')
    .to('.leftEye1', 1.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=2.8')
    .to('.leftEye1', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye1', 0.2, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.1')
    .to('.leftEye1', 1.7, { attr: { y1: 78.384, y2: 97.668 }}, 'start+=4.3')    

    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=2.5')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.6')
    .to('.leftEye2', 1.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=2.8')
    .to('.leftEye2', 0.1, { attr: { y1: 110.384, y2: 110.668 }}, 'start+=4')
    .to('.leftEye2', 0.2, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.1')
    .to('.leftEye2', 1.7, { attr: { y1: 81.076, y2: 91.388 }}, 'start+=4.3')

    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=2.5')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.6')
    .to('.leftEye3', 1.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=2.8')
    .to('.leftEye3', 0.1, { attr: { y1: 105.384, y2: 105.668 }}, 'start+=4')
    .to('.leftEye3', 0.2, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.1')
    .to('.leftEye3', 1.7, { attr: { y1: 93.184, y2: 105.292 }}, 'start+=4.3')

    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=2.5')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.6')
    .to('.leftEye4', 1.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=2.8')
    .to('.leftEye4', 0.1, { attr: { y1: 112.384, y2: 112.668 }}, 'start+=4')
    .to('.leftEye4', 0.2, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.1')
    .to('.leftEye4', 1.7, { attr: { y1: 97.668, y2: 112.464 }}, 'start+=4.3')

    // Right leg
    .to('.right .leg', 0, { css: { transform: 'rotateY(40deg) translate(-10px, 0px)' }}, 'start')
    .to('.right .leg', 0.3, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start')
    .to('.right .leg', 0.7, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start+=0.3')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=1')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-20px, 0px) rotate(20deg)' }}, 'start+=1.1')
    .to('.right .leg', 0.5, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=1.2')

    .to('.right .leg', 0.3, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start+=2.1')
    .to('.right .leg', 0.7, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start+=2.4')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=3.1')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-20px, 0px) rotate(20deg)' }}, 'start+=3.2')
    .to('.right .leg', 0.5, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=3.3')

    .to('.right .leg', 0.3, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start+=4.1')
    .to('.right .leg', 0.7, { css: { transform: 'rotateY(40deg) translate(40px, -50px) rotate(-60deg)' }}, 'start+=4.4')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=5.1')
    .to('.right .leg', 0.1, { css: { transform: 'rotateY(40deg) translate(-20px, 0px) rotate(20deg)' }}, 'start+=5.2')
    .to('.right .leg', 0.5, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=5.3')

    .to('.right .leg', 0.2, { css: { transform: 'rotateY(40deg) translate(-10px, 0px) rotate(0deg)' }}, 'start+=5.8')

    // Left leg
    .fromTo('.left .leg', 0, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start')

    .to('.left .leg', 0.3, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=1.1')
    .to('.left .leg', 0.7, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=1.4')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=2.1')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(1deg) translate(-30px, 5px)' }}, 'start+=2.2')
    .to('.left .leg', 0.5, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=2.3')

    .to('.left .leg', 0.3, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=3.1')
    .to('.left .leg', 0.7, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=3.4')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=4.1')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(1deg) translate(-30px, 5px)' }}, 'start+=4.2')
    .to('.left .leg', 0.5, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=4.3')

    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=5.1')
    .to('.left .leg', 0.4, { css: { transform: 'rotateY(220deg) rotate(55deg) translate(-75px, 25px)' }}, 'start+=5.1')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=5.5')
    .to('.left .leg', 0.1, { css: { transform: 'rotateY(220deg) rotate(1deg) translate(-30px, 5px)' }}, 'start+=5.6')
    .to('.left .leg', 0.3, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=5.7')

    .to('.left .leg', 0, { css: { transform: 'rotateY(220deg) rotate(5deg) translate(-20px, 5px)' }}, 'start+=6')
    });
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
