import React from 'react';
import PropTypes from 'prop-types';
import { FloatButton as AntdFloatButton } from 'antd';
import './floatButton.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/floatButton/
 * 
 */
export const FloatButton = ({ children, ...props }) => {
  return (
    <AntdFloatButton
      className='storybook-floatButton'
      {...props}
    >
      {children}
    </AntdFloatButton>
  );
};

FloatButton.propTypes = {
    /**
     * TODO property
     */
     
};

FloatButton.defaultProps = {
  
};
