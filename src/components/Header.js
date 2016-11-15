import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Header extends Component {
  componentDidMount() {
    const tl = new TimelineLite();

    const hOne = this.hOne;
    //const tween = TweenMax.to(hOne, 2, {color: 'red'});
    const hTwo = this.hTwo;

    tl
    .to(hTwo, 0, {
      display: 'none',
      opacity: 0,
    })
    .from(hOne, 3, {
      css: { 
        transform: 'translate(-50px, 100px)',
        opacity: 0,
      },
      ease: Elastic.easeInOut,
    })
    .to(hOne, 1.5, {
      css: { 
        transform: 'translate(150px, 300px)',
        opacity: 0,
        display: 'none',
      },
      ease: Elastic.easeInOut,
    })
    .to(hTwo, 0, {
      css: { 
        display: 'initial',
      },
    })
    .to(hTwo, 3, {
      css: { 
        opacity: 1,
      },
      ease: Elastic.easeInOut,
    }, 4.5);
  }
  render() {
    return (
      <div className="header">
        <h1 ref={(hOne) => this.hOne = hOne}>The Animation-Man</h1>
        <h2 ref={(hTwo) => this.hTwo = hTwo}>by Benjamin Arias</h2>      
      </div>
    );    
  }
}

export default Header;
