import React from 'react';
import { Button as AntdButton } from 'antd'

const Button = ({
  props,
  children,
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  type,
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