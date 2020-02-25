import React from 'react';
import './index.scss';

const Button: React.FC<ButtonProps> = ({children, onClick, informations, disabled}) => {


  return (<button className={informations ? informations : 'primary'} disabled={disabled} onClick={e => onClick(e)}>{children}</button>)
}

export default Button;