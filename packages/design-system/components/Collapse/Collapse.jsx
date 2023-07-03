import React from 'react';
import PropTypes from 'prop-types';
import { Collapse as AntdCollapse } from 'antd';
import './collapse.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/collapse/
 * 
 */
export const Collapse = ({ children, ...props }) => {
  return (
    <AntdCollapse
      className='storybook-collapse'
      {...props}
    >
      {children}
    </AntdCollapse>
  );
};

Collapse.propTypes = {
    /**
     * TODO property
     */
     
};

Collapse.defaultProps = {
  
};
