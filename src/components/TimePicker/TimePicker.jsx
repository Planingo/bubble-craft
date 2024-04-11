import { TimePicker as AntdTimePicker } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
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
export const TimePicker = ({ children, ...props }) => {
  const format = 'HH:mm';
  const [value, setValue] = useState(null);

  const onChange = (time) => {
    setValue(time);
    const u = new Date(time)
    console.log(u.toLocaleTimeString())
  };
  return (
    <AntdTimePicker
      className='storybook-timePicker'
      defaultValue={props?.date && dayjs(props?.date, 'HH:mm')}
      format={format}
      // onChange={onChange}
      // value={value}
      {...props}
    />
  );
};

TimePicker.propTypes = {
    /**
     * TODO property
     */
     
};

TimePicker.defaultProps = {
  
};
