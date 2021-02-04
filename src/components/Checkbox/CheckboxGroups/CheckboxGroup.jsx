import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd'

const CheckboxGroup = ({
  props,
  defaultValue = [],
  disabled = false,
  name,
  options = [],
  value = [],
  onChange,
}) => {
  return <AntdCheckbox.Group
    role='checkbox-group'
    defaultValue={defaultValue}
    name={name}
    disabled={disabled}
    options={options}
    value={value}
    onChange={onChange}
    {...props} />
}

export { CheckboxGroup };