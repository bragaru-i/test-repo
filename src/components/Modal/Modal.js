/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { createPortal } from 'react-dom';

import Button from '..//Button/Button';
import styles from './Modal.module.scss';
import WIndowWrapper from '../WindowWrapper/WindowWrapper';

const Modal = ({
  title = 'Modal Title',
  children,
  close,
  onDismiss,
  onAccept,
  onAcceptText,
  onAcceptType,
  onAcceptIsValid,
  onDissmissType,
}) => {
  const renderActions = (
    <>
      <div className={styles.modalButtons}>
        <Button
          text={onAcceptText}
          onClick={onAccept}
          color={onAcceptType}
          isValid={onAcceptIsValid}
        />
        <Button
          text='Cancel'
          onClick={onDismiss}
          color={onDissmissType}
          isValid
        />
      </div>
    </>
  );
  const element = document.querySelector('#modal');

  return createPortal(
    <div className={!close ? styles.modalClosed : styles.modalContainer}>
      <div className='modal'>
        <WIndowWrapper title={title}>
          {children}
          {renderActions}
        </WIndowWrapper>
      </div>
    </div>,
    element
  );
};

export default Modal;
