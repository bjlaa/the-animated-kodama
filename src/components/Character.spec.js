import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Character from './Character';
import Head from './Head';
import Torso from './Torso';
import Arm from './Arm';
import Leg from './Leg';

describe('Character', () => {
  it('should render a div having a "character" class', () => {
    const wrapper = shallow(<Character />);
    const expected = 'character';
    const actual = wrapper.find('div').prop('className');

    expect(actual).to.equal(expected);
  });

  it('should render a <Head />', () => {
    const wrapper = shallow(<Character />);

    expect(wrapper.containsMatchingElement(<Head />)).to.equal(true);
  });

  it('should render a <Torso />', () => {
    const wrapper = shallow(<Character />);

    expect(wrapper.containsMatchingElement(<Torso />)).to.equal(true);
  });

  it('should render two <Arm />', () => {
    const wrapper = shallow(<Character />);

    expect(wrapper.find(Arm).length).to.equal(2);
  });

  it('should render two <Leg />', () => {
    const wrapper = shallow(<Character />);

    expect(wrapper.find(Leg).length).to.equal(2);
  });
});