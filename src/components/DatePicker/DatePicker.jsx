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
export const DatePicker = ({ property, children, ...props }) => {
  return (
    <AntdDatePicker
      className='storybook-datePicker'
      {...props}
      property
    >
      {children}
    </AntdDatePicker>
  );
};

DatePicker.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

DatePicker.defaultProps = {
  property: false,
};
