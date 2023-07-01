import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';
import './select.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/select/
 * 
 */
export const Select = ({ children, ...props }) => {
  return (
    <AntdSelect
      className='storybook-select'
      {...props}
    >
      {children}
    </AntdSelect>
  );
};

Select.propTypes = {
    /**
     * TODO property
     */
     
};

Select.defaultProps = {
  
};
