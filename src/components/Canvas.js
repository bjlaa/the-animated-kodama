import React, { PropTypes } from 'react';

const Canvas = (props) => {
  return (
    <div className="canvas">
      {props.children}
    </div>
  );
};

Canvas.propTypes = {
  children: PropTypes.element,
};

export default Canvas;
