import React from 'react';
import { Radio as AntdRadio } from 'antd'

const Radio = ({
  props,
  children,
  autoFocus,
  checked,
  defaultChecked,
  disabled,
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