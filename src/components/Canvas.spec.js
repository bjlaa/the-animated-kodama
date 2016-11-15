import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Canvas from './Canvas';
import Character from './Character';

describe('Canvas', () => {
  it('should render a div having the "canvas" class', () => {
    const wrapper = shallow(<Canvas />);
    const expected = 'canvas';
    const actual = wrapper.find('div').prop('className');

    expect(actual).to.equal(expected);
  });

  it('should render its child components', () => {
    const wrapper = shallow(<Canvas><Character /></Canvas>);
    expect(wrapper.find(Character).length).to.equal(1);
  });
});