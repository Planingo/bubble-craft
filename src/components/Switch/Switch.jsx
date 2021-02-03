import React from 'react';
import { Switch as AntdSwitch } from 'antd'

const Switch = ({
  props,
  children,
  /**
  * Level of the Switch defining it's color and outline.
  * Possible values are: primary, secondary, tertiary, warning & danger.
  */
  autoFocus = false,
  checked = false,
  checkedChildren,
  className,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = 'default',
  unCheckedChildren,
  onChange,
  onClick
}) => {
  return <AntdSwitch
    aria-label='switch'
    autoFocus={autoFocus}
    checked={checked}
    checkedChildren={checkedChildren}
    className={className}
    defaultChecked={defaultChecked}
    disabled={disabled}
    loading={loading}
    size={size}
    unCheckedChildren={unCheckedChildren}
    onChange={onChange}
    onClick={onClick}
    {...props} />
}

export { Switch };