import React from 'react';

import './WIndowWrapper.scss';

const WIndowWrapper = ({ children, title = 'Title Here' }) => {
  return (
    <div className='window-container'>
      <div className='window-container__title'>{title}</div>
      {children}
    </div>
  );
};

export default WIndowWrapper;
