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
export const FloatButton = ({ property, children, ...props }) => {
  return (
    <AntdFloatButton
      className='storybook-floatButton'
      {...props}
      property
    >
      {children}
    </AntdFloatButton>
  );
};

FloatButton.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

FloatButton.defaultProps = {
  property: false,
};
