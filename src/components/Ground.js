import React, { Component } from 'react';
import { TweenMax } from 'gsap';

class Ground extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyDownEvent: this.props.keyDownEvent,
      keyUpEvent: this.props.keyUpEvent,
      isKeyDown: false,
      keyPressed: '',
      rotationLeft: '',
    };
    this.saveKeyPressed = this.saveKeyPressed.bind(this);
    this.setUpTweens = this.setUpTweens.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      keyDownEvent: nextProps.keyDownEvent,
      keyUpEvent: nextProps.keyUpEvent,
    });
    this.handleKeyDown(this.state.keyDownEvent);
    this.handleKeyUp(this.state.keyUpEvent);
  }

  saveKeyPressed(keyPressed) {
    this.setState({ keyPressed });
  }
  setUpTweens() {
    const ground = this.ground;
    this.setState({
      rotationLeft: TweenMax.to(ground, 0.5, { css: { rotation: '-=45', transformOrigin: '50% 50%'}, paused: true }),
      rotationRight: TweenMax.to(ground, 0.5, { css: { rotation: '+=45', transformOrigin: '50% 50%'}, paused: true }),
    });
  }

  handleKeyDown(event) {
    this.setUpTweens();
    if(event != '') {
      if (event.type == 'keydown') {

        if (event.key === 'ArrowLeft') {
          if (this.state.keyPressed == 'right') {
            this.state.rotationRight.pause();
          }
          if (this.state.keyPressed == '') {
            this.state.rotationLeft.play();
            return;
          }

          this.saveKeyPressed('left');
          this.state.rotationLeft.resume();
        }

        if (event.key == 'ArrowRight') {
          if (this.state.keyPressed == 'left') {
            this.state.rotationLeft.pause();
          }
          if (this.state.keyPressed == '') {
            this.state.rotationRight.play();
            return;
          }

          this.saveKeyPressed('right');
          this.state.rotationRight.resume();
        }  
      }
    }
  }

  handleKeyUp(event) {
    if (event != '') {
      if (event.type == 'keyup') {
        if (event.key === "ArrowLeft") {
          if (this.state.keyPressed == 'left') {
            this.saveKeyPressed('');            
          }
          this.state.rotationLeft.pause();
        }

        if (event.key === "ArrowRight") {
          if (this.state.keyPressed == 'right') {
            this.saveKeyPressed('');            
          }
          this.state.rotationRight.pause();
        }   
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
