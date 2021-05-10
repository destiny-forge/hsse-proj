import React from 'react';

const CheckIconText = ({ text, checked }) => {
  const css = checked ? 'fa-check text-success' : 'fa-times text-danger';
  return (
    <React.Fragment>
      {<i className={`fa d-inline ${css}`}></i>} {text}
    </React.Fragment>
  );
};

export default CheckIconText;
