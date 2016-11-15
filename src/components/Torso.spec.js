import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Torso from './Torso';

describe('Torso', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Torso />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
