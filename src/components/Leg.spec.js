import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Leg from './Leg';

describe('Leg', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Leg />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
