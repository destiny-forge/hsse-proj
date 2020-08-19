import React from 'react';

export default ({ errors, field }) => {
  if (!errors[field]) {
    return null;
  }
  return (
    <span
      style={{
        color: 'red',
        paddingLeft: 0,
        paddingRight: '10px',
        paddingBottom: 0,
        fontWeight: 'bold',
      }}
    >
      * {errors[field]}
    </span>
  );
};
