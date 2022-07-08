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
const RadioGroup = ({
  props,
  buttonStyle,
  defaultValue,
  disabled,
  name,
  options,
  optionType,
  value,
  onChange,
  size,
}) => {
  return <AntdRadio.Group
    buttonStyle={buttonStyle}
    defaultValue={defaultValue}
    disabled={disabled}
    name={name}
    options={options}
    optionType={optionType}
    size={size}
    value={value}
    onChange={onChange}
    {...props} />
}

export { RadioGroup };