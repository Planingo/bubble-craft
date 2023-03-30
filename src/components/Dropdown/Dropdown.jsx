import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as AntdDropdown } from 'antd';
import './dropdown.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/dropdown/
 * 
 */
export const Dropdown = ({ property, children, ...props }) => {
  return (
    <AntdDropdown
      className='storybook-dropdown'
      {...props}
      property
    >
      {children}
    </AntdDropdown>
  );
};

Dropdown.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Dropdown.defaultProps = {
  property: false,
};
