import React from 'react';

const CustomDatePickerInput = ({ value, onClick }) => (
  <input className="form-control" onClick={onClick} value={value} />
);

export default CustomDatePickerInput;
