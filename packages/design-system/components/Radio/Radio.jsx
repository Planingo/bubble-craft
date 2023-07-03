import React from 'react';
import { Radio as AntdRadio } from 'antd'


/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/radio/
 * 
 */
export const Radio = ({
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
