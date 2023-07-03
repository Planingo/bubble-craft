import React from 'react';
import PropTypes from 'prop-types';
import { Steps as AntdSteps } from 'antd';
import './steps.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/steps/
 * 
 */
export const Steps = ({ children, ...props }) => {
  return (
    <AntdSteps
      className='storybook-steps'
      {...props}
    >
      {children}
    </AntdSteps>
  );
};

Steps.propTypes = {
    /**
     * TODO property
     */
     
};

Steps.defaultProps = {
  
};
