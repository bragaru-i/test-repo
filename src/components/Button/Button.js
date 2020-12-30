import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import Icon from '../Icons';

const Button = ({
  size,
  color,
  version,
  btnType,
  text,
  isValid,
  showSpinner,
  onClick,
}) => {
  const onClickHandler = (e) => {
    onClick(e);
  };
  const disabled = isValid ? '' : 'btn--disabled';
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={`btn btn--${version} btn--${color} btn--${size} ${disabled}`}
      onClick={onClickHandler}
      // disabled={disabled}
    >
      {text}
      {showSpinner && (
        <Icon className='btn__spinner' name='spinning-icon' width='2rem' />
      )}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  version: PropTypes.oneOf(['primary', 'secondary']),
  btnType: PropTypes.oneOf(['button', 'reset', 'submit']),
  text: PropTypes.string,
  color: PropTypes.oneOf(['default', 'error', 'green', 'yellow']),
  isValid: PropTypes.bool,
  showSpinner: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  size: 'md',
  color: 'default',
  version: 'primary',
  btnType: 'button',
  text: 'Button',
  isValid: true,
  showSpinner: false,
};

export default Button;
