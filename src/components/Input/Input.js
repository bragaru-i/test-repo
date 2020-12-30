import React from 'react';
import './Input.scss';

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  size = 'md',
  isValid,
}) => {
  let labelClass = 'input__label';

  //  add invalid class on invalid inputs
  if (!isValid && value.length > 0) labelClass += ' invalid';

  return (
    <div className={`input input--${size}`}>
      <input
        className='input__field'
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        required
        type={type}
      />
      <label htmlFor={name} className={labelClass}>
        <span className='input__placeholder'>{placeholder}</span>
      </label>
    </div>
  );
};

export default Input;
