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
export const Steps = ({ property, children, ...props }) => {
  return (
    <AntdSteps
      className='storybook-steps'
      {...props}
      property
    >
      {children}
    </AntdSteps>
  );
};

Steps.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Steps.defaultProps = {
  property: false,
};
