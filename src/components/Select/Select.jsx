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
export const Select = ({ property, children, ...props }) => {
  return (
    <AntdSelect
      className='storybook-select'
      {...props}
      property
    >
      {children}
    </AntdSelect>
  );
};

Select.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Select.defaultProps = {
  property: false,
};
