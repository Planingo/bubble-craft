import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as AntdDatePicker } from 'antd';
import './datePicker.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/datePicker/
 * 
 */
export const DatePicker = ({ children, ...props }) => {
  return (
    <AntdDatePicker
      className='storybook-datePicker'
      {...props}
    >
      {children}
    </AntdDatePicker>
  );
};

DatePicker.propTypes = {
    /**
     * TODO property
     */
     
};

DatePicker.defaultProps = {
  
};
