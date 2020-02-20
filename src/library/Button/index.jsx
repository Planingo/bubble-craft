import React from 'react';
import './index.scss';

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (<button onClick={e => onClick(e)}>{children}</button>)
}

export default Button;