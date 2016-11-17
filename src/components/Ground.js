import React, { Component } from 'react';
import { TweenMax } from 'gsap';

class Ground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyDownEvent: this.props.keyDownEvent,
      rotationInstance: '',
      isKeyDown: false,
      keyPressed: '',
    };
    this.toggleKeyStatus = this.toggleKeyStatus.bind(this);
    this.saveKeyPressed = this.saveKeyPressed.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.rotateRightOrLeft = this.rotateRightOrLeft.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      keyDownEvent: nextProps.keyDownEvent,
      keyUpEvent: nextProps.keyUpEvent,
    });
  }

  componentDidUpdate() {
    this.handleKeyDown(this.state.keyDownEvent);
    this.handleKeyUp(this.state.keyUpEvent);
  }

  toggleKeyStatus() {
    this.setState({ isKeyDown: !this.state.isKeyDown });
  }

  saveKeyPressed(keyPressed) {
    this.setState({ keyPressed });
  }

  handleKeyDown(event) {
    console.log(event);
    if(event == '') {
      return;
    }
    if (event.type == 'keydown') {
      if (event.key === "ArrowLeft") {
        if (!this.state.isKeyDown) {
          this.toggleKeyStatus();        
        }
        this.saveKeyPressed('left');
        if (this.state.rotationInstance )
        const rotationInstance = this.rotateRightOrLeft('left');
        this.setState({ rotationInstance });
        this.state.rotationInstance();
      }      
    }
  }

  handleKeyUp(event) {
    if (event == '') {
      return;
    }
    if (event.type == 'keyup') {
      if (event.key === "ArrowLeft") {
        if (this.state.rotationInstance != '') {
          return;
        }
      }      
    }
  }

  rotateRightOrLeft(direction) {
    if (direction == 'left') {
      console.log('called');
      return (() => {
        const ground = this.ground;
        TweenMax.to(
          ground, 
          1, 
          { css: { rotation: '-=45', transformOrigin: '50% 50%'}, repeat: -1},
        );
      });      
    }
    return (() => {
      const ground = this.ground;
      TweenMax.to(
        ground, 
        1, 
        { css: { rotation: '+=45', transformOrigin: '50% 50%'}, repeat: -1},
      );
    });    
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
