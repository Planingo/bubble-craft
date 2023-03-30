import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import './input.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/input/
 * 
 */
export const Input = ({ property, ...props }) => {
  return (
    <AntdInput
      className='storybook-input'
      {...props}
      property
    />
  );
};

Input.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Input.defaultProps = {
  property: false,
};
