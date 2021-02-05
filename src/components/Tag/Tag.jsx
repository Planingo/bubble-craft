import React from 'react';
import { Tag as AntdTag } from 'antd'

const Tag = ({
  props,
  closable,
  closeIcon,
  color,
  icon,
  visible,
  onClose,
  children
}) => {
  return <AntdTag
  role='tag'
  closable={closable}
  closeIcon={closeIcon}
  color={color}
  icon={icon}
  visible={visible}
  onClose={onClose}
    {...props} >{children}</AntdTag>
}

export { Tag };