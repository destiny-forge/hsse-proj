import React from 'react';

const Button = ({ className, onClick, children }) => {
  let cssClassName = 'button';
  if (className) {
    cssClassName += ' #{className}';
  }
  const language = 'en';

  return (
    <div>
      <a
        rel="alternate"
        hrefLang={language}
        href="#"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
