import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Canvas from './Canvas';

describe('Canvas', () => {
  it('should render a div having the "canvas" class', () => {
    const wrapper = shallow(<Canvas />);
    const expected = 'canvas';
    const actual = wrapper.find('div').prop('className');

    expect(actual).to.equal(expected);
  });

  it('should render its child components', () => {
    const wrapper = shallow(<Canvas />);
    expect(wrapper.contains(
      <div>Here will be the SVGs</div>
    )).to.equal(false);
  });
});