import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

class Header extends Component {
  componentDidMount() {
    const animationHeaders = new TimelineLite();
    const header = this.header;
    const headerTitle = this.headerTitle;
    const headerAuthor = this.headerAuthor;

    animationHeaders
    .to(headerAuthor, 0, {
      display: 'none',
      opacity: 0,
    })
    .fromTo(headerTitle, 1.5, {
      css: {
        transform: 'translate(-50px, 100px)',
        opacity: 0,        
      }
    },
    {
      css: {
        display: 'block',
        transform: 'translate(0px, 0px)',
        opacity: 1,         
      },
      /*eslint-disable*/
      ease: Elastic.easeOut,
      /*eslint-enable*/
    })
    .to(headerTitle, 1.5, {
      css: { 
        transform: 'translate(150px, 300px)',
        opacity: 0,
        display: 'none',
      },
      /*eslint-disable*/
      ease: Elastic.easeInOut,
      /*eslint-enable*/
    })
    .to(headerAuthor, 0, {
      css: { 
        display: 'block',
      },
    })
    .to(headerAuthor, 1.5, {
      css: { 
        opacity: 1,
      },
      /*eslint-disable*/
      ease: Elastic.easeInOut,
      /*eslint-enable*/
    }, 3)
    .to(header, 1, {
      css: {
        opacity: 0,
        display: 'none',
      },
    });
  }

  render() {
    return (
      <div className="header" ref={(header) => this.header = header}>
        <h1 className="header-title" ref={(headerTitle) => this.headerTitle = headerTitle}>The Animated Kodawa</h1>
        <h2 className="header-author" ref={(headerAuthor) => this.headerAuthor = headerAuthor}>by Benjamin Arias</h2>      
      </div>
    );    
  }
}

export default Header;
