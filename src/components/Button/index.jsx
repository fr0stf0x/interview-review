import React from 'react';

const Button = ({
  size, color = 'primary', children, className = '', ...props
}) => (
  <button
    {...props}
    className={`btn ${color} ${className}`}
  >
    {children}
  </button>
);

export default Button;
