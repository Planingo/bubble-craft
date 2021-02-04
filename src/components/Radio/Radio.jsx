import React from 'react';
import { Radio as AntdRadio } from 'antd'

const Radio = ({
  props,
  children,
  /**
  * Level of the Switch defining it's color and outline.
  * Possible values are: primary, secondary, tertiary, warning & danger.
  */
  autoFocus = false,
  checked = false,
  defaultChecked = false,
  disabled = false,
  value,
}) => {
  return <AntdRadio
    role='radio'
    autoFocus={autoFocus}
    checked={checked}
    defaultChecked={defaultChecked}
    disabled={disabled}
    value={value}
    {...props} >{children}</AntdRadio>
}

export { Radio };