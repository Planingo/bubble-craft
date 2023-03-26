import React from 'react';
import PropTypes from 'prop-types';
import { Alert as AntdAlert } from 'antd';
import './alert.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/alert/
 * 
 */
export const Alert = ({ property, children, ...props }) => {
  return (
    <AntdAlert
      className='storybook-alert'
      {...props}
      property
    >
      {children}
    </AntdAlert>
  );
};

Alert.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Alert.defaultProps = {
  property: false,
};
