import { TimePicker as AntdTimePicker } from 'antd';
import React from 'react';
import './timePicker.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/timePicker/
 * 
 */
export const TimePickerRange = ({ children, ...props }) => {
  const format = 'HH:mm';
  return (
    <AntdTimePicker.RangePicker
      className='storybook-timePicker'
      format={format}
      {...props}
    >
      {children}
    </AntdTimePicker.RangePicker>
  );
};

TimePickerRange.propTypes = {
    /**
     * TODO property
     */
     
};

TimePickerRange.defaultProps = {
  
};
