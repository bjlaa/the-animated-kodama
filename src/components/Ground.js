import React, { Component } from 'react';
import { TweenMax } from 'gsap';

class Ground extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyDownEvent: this.props.keyDownEvent,
      keyUpEvent: this.props.keyUpEvent,
      keyPressed: '',
      rotationLeft: '',
      rotationRight: '',
      rightFirst: false,
      leftFirst: false,
      tweensSetup: false,
    };
    this.saveKeyPressed = this.saveKeyPressed.bind(this);
    this.setUpTweens = this.setUpTweens.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
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

  saveKeyPressed(keyPressed) {
    this.setState({ keyPressed });
  }
  setUpTweens() {
    if (this.state.rotationLeft != '') { 
      this.state.rotationLeft.kill(); 
    }
    if (this.state.rotationRight != '') {
      this.state.rotationRight.kill();       
    }

    const ground = this.ground;
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

  render() {
    return (
      <svg 
        ref={(ground) => this.ground = ground}
        className="ground"
        viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100"/>
      </svg>
    );    
  }
}

export default Ground;
