import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Moon  from './Moon';

describe('Moon', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Moon />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});

