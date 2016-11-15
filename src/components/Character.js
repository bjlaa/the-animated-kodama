import React from 'react';

import Head from './Head';
import Torso from './Torso';
import Arm from './Arm';
import Leg from './Leg';

const Character = () => {
  return (
    <div className="character">
      <Head />
      <Arm />
      <Torso />
      <Arm />
      <Leg />
      <Leg />
    </div>
  );
};

export default Character;