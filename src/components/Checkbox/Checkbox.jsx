import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd'


/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/checkbox/
 * 
 */
const Checkbox = ({
  props,
  autofocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  children,
}) => {
  return <AntdCheckbox
    aria-label='checkbox'
    autofocus={autofocus}
    checked={checked}
    disabled={disabled}
    defaultChecked={defaultChecked}
    indeterminate={indeterminate}
    onChange={onChange}
    {...props} >{children}</AntdCheckbox>
}

export { Checkbox };