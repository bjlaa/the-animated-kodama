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
});