import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd'

const Checkbox = ({
  props,
  autofocus = false,
  checked = false,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
}) => {
  return <AntdCheckbox
    aria-label='checkbox'
    autofocus={autofocus}
    checked={checked}
    disabled={disabled}
    defaultChecked={defaultChecked}
    indeterminate={indeterminate}
    onChange={onChange}
    {...props} />
}

export { Checkbox };