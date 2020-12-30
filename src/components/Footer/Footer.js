import React from 'react';
import WIndowWrapper from '../WindowWrapper/WindowWrapper';

import './Footer.scss';
const Footer = () => {
  return (
    <footer>
      <WIndowWrapper title='Written by github.com/fargusmd'>
        <p className='footer-p'>
          Page prepared for Kvando Tech. 2020. More details on Readme.md
        </p>
      </WIndowWrapper>
    </footer>
  );
};

export default Footer;
