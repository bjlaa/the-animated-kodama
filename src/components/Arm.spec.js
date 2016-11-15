import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Arm from './Arm';

describe('Arm', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Arm />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
