import React from 'react';
import { Button as AntdButton } from 'antd'

const Button = ({
  props,
  children,
  /**
  * Level of the button defining it's color and outline.
  * Possible values are: primary, secondary, tertiary, warning & danger.
  */
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  href,
  htmlType = 'button',
  icon,
  loading = false,
  shape = 'round',
  size = 'middle',
  target,
  type = 'primary',
  onClick
}) => {
  return <AntdButton
    block={block}
    danger={danger}
    disabled={disabled}
    ghost={ghost}
    href={href}
    htmlType={htmlType}
    icon={icon}
    loading={loading}
    shape={shape}
    size={size}
    target={target}
    type={type}
    onClick={onClick}
    {...props}>{children}
  </AntdButton >
}

export { Button };