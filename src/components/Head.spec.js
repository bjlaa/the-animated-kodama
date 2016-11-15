import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Head from './Head';

describe('Head', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Head />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
