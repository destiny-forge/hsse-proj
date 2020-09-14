import React from 'react';
import CheckIconText from '../atoms/CheckIconText';

const CountryCountFocus = ({ count, text, checked, disabled }) => {
  if (disabled) {
    return null;
  }
  const css = checked ? 'fa-check text-success' : 'fa-times text-danger';
  return (
    <React.Fragment>
      ({count}, <CheckIconText text={text} checked={checked} />)
    </React.Fragment>
  );
};

export default CountryCountFocus;
