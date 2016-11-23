import React from 'react';

const Torso = () => {
  return ( 
    <svg className="torso" x="0px" y="0px" width="220px" height="200px" viewBox="0 0 60 100">
      <line className="torso1" fill="none" stroke="#000000" strokeMiterlimit="10" x1="20.354" y1="10.565" x2="37.979" y2="3.278"/>
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="20.354" y1="10.565" x2="4.117" y2="81.528"/>
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="4.117" y1="81.528" x2="26.649" y2="93.972"/>
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="26.649" y1="93.972" x2="41.126" y2="93.972"/>
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="41.756" y1="93.972" x2="55.35" y2="79.286"/>
      <line className="torso2" fill="none" stroke="#000000" strokeMiterlimit="10" x1="37.979" y1="4.175" x2="55.35" y2="79.286"/>
    </svg>
  );
};

export default Torso;
