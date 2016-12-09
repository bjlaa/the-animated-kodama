import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('Header', () => {
  it('should render a div having the "header" class', () => {
    const wrapper = shallow(<Header />);
    const expected = 'header';
    const actual = wrapper.find('div').prop('className');

    expect(actual).to.equal(expected);
  });

  it('should render an h1 containing "The Animation-Man"', () => {
    const wrapper = shallow(<Header />);
    const expected = 'The Animated Kodawa';
    const actual = wrapper.find('h1').text();

    expect(actual).to.equal(expected);
  });

  it('should render an h2 containing "by Benjamin Arias"', () => {
    const wrapper = shallow(<Header />);
    const expected = 'by Benjamin Arias';
    const actual = wrapper.find('h2').text();

    expect(actual).to.equal(expected);
  });
});