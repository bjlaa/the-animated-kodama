import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Sun from './Sun';

describe('Sun', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Sun />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
