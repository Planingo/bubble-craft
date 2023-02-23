import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker as AntdTimePicker } from 'antd';
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
export const TimePicker = ({ property, children, ...props }) => {
  return (
    <AntdTimePicker
      className='storybook-timePicker'
      {...props}
      property
    >
      {children}
    </AntdTimePicker>
  );
};

TimePicker.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

TimePicker.defaultProps = {
  property: false,
};
