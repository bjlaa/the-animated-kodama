import React from 'react';
// import {Link} from 'react-router';

import Header from './Header';
import Canvas from './Canvas';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Canvas>
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="595.28px" height="841.89px" viewBox="0 0 595.28 841.89" enableBackground="new 0 0 595.28 841.89">
          <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="194" y1="164" x2="198" y2="296"/>
          <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="194" y1="164" x2="391" y2="169"/>
          <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="391" y1="169" x2="384" y2="296"/>
          <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="384" y1="296" x2="198" y2="296"/>
          <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M237,191c-11.376,0.709-25.11,6.936-21.646,20.171
            c4.04,15.432,41.303,20.412,48.662,8.719C280.281,194.046,223.732,167.653,228,196"/>
          <path fill="none" stroke="#000000" strokeMiterlimit="10" d="M346,193c-12.371,0.028-24.473-2.312-31.11,9.841
            c-11.832,21.663,7.36,36.394,28.079,35.414c17.16-0.812,24.5-14.583,19.222-31.052C357.367,192.153,341.985,189.058,328,189"/>
          <path style={{stroke: '#037422'}} fill="none" stroke="#000000" strokeMiterlimit="10" d="M256,248c4.944,18.911,19.888,32.422,39.044,33.927
            c18.48,1.452,29.861,1.175,31.956-16.927"/>
        </svg>
      </Canvas>
    </div>
  );
};

export default HomePage;
