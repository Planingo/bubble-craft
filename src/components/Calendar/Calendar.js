import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as AntdCalendar } from 'antd';
import './calendar.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/calendar/
 * 
 */
export const Calendar = ({ property, ...props }) => {
  return (
    <AntdCalendar
      className='storybook-calendar'
      {...props}
      property
    />
  );
};

Calendar.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Calendar.defaultProps = {
  property: false,
};
