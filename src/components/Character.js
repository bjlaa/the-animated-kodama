import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import Head from './Head';
import Torso from './Torso';
import Arm from './Arm';
import Leg from './Leg';

class Character extends Component {

  componentDidMount() {
    const character = this.character;
    const animationIntroCharacter = new TimelineLite();

    animationIntroCharacter
    .fromTo(character, 0.6, {
      css: {
        transform: 'translate(0, -10000px)',
      },
    },
    {
      css: {
        transform: 'translate(0, 0px)',
      }
    }, 9)
    .to(character, 0.15, {
      css: {
        transform: 'translate(0, 50px)',
      }
    })
    .to(character, 0.13, {
      css: {
        transform: 'translate(0, 0px)',
      }
    })
    .to(character, 0.11, {
      css: {
        transform: 'translate(0, 15px)',
      },
      /*eslint-disable*/
      ease: Elastic,
      /*eslint-enable*/
    })
    .to(character, 0.09, {
      css: {
        transform: 'translate(0, 0px)',
      }
    })
    .to(character, 0.11, {
      css: {
        transform: 'translate(0, 5px)',
      },
      /*eslint-disable*/
      ease: Elastic,
      /*eslint-enable*/
    })
    .to(character, 0.09, {
      css: {
        transform: 'translate(0, 0px)',
      }
    });
  }

  render() {
    return (
      <div className="character" ref={(character) => this.character = character}>
        <Head />
        <div className="right">
          <Arm />
          <Leg />    
        </div>

        <Torso />
        <div className="left">
          <Arm />
          <Leg />        
        </div>
      </div>
    );    
  }
}

export default Character;