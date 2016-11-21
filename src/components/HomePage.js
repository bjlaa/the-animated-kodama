import React, { Component } from 'react';


import Header from './Header';
import Canvas from './Canvas';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyDownEvent: '',
      keyUpEvent: '',
    };
  }

  componentDidMount() {
    document.body.addEventListener('keydown', (event) => {
      if (this.state.keyDownEvent == '') {
        if (this.state.keyUpEvent != '') {
          this.setState({ keyUpEvent: '' });          
        }

        this.setState({ keyDownEvent: event });        
      }
    });
    document.body.addEventListener('keyup', (event) => {
      this.setState({ 
        keyUpEvent: event,
        keyDownEvent: '',
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Canvas
          keyDownEvent={this.state.keyDownEvent}
          keyUpEvent={this.state.keyUpEvent}
        />
      </div>
    );    
  }
}

export default HomePage;
