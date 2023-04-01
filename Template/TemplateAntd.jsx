import React from 'react';
import PropTypes from 'prop-types';
import { Template as AntdTemplate } from 'antd';
import './template.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/template/
 * 
 */
export const Template = ({ children, ...props }) => {
  return (
    <AntdTemplate
      className='storybook-template'
      {...props}
    >
      {children}
    </AntdTemplate>
  );
};

Template.propTypes = {
    /**
     * TODO property
     */
     
};

Template.defaultProps = {
  
};
