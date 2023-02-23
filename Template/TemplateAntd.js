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
export const Template = ({ property, children, ...props }) => {
  return (
    <AntdTemplate
      className='storybook-template'
      {...props}
      property
    >
      {children}
    </AntdTemplate>
  );
};

Template.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Template.defaultProps = {
  property: false,
};
