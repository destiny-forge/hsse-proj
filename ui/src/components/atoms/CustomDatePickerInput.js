import React from 'react';

const CustomDatePickerInput = ({
  value,
  onClick,
  style,
  placeholdertext = '',
}) => (
  <input
    className="form-control"
    style={style}
    placeholder={placeholdertext}
    onClick={onClick}
    value={value}
  />
);

export default CustomDatePickerInput;
