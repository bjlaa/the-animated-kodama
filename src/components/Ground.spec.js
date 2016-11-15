import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Ground from './Ground';

describe('Ground', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Ground />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});