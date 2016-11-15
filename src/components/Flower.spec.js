import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Flower from './Flower';

describe('Flower', () => {
  it('should render an svg', () => {
    const wrapper = shallow(<Flower />);

    expect(wrapper.find('svg').length).to.equal(1);
  });
});
