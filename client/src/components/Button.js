import React from 'react';

const Button = ({ className, onClick, children }) => {
  let cssClassName = 'button';
  if (className) {
    cssClassName += ` ${className}`;
  }
  const language = 'en';

  return (
    <div className={cssClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
