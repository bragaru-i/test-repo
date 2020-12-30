import React from 'react';

const SVG = ({
  style = {},
  fill = 'red',
  width = '100%',
  className = '',
  viewBox = '0 0 510 510',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon
      points="204,471.75 204,318.75 306,318.75 306,471.75 433.5,471.75 433.5,267.75 510,267.75 255,38.25 0,267.75 
			76.5,267.75 76.5,471.75 		"
    />
  </svg>
);

export default SVG;
