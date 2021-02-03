import React from 'react';
import { Badge as AntdBadge } from 'antd'

const Badge = ({
  props,
  color,
  count,
  dot,
  offset,
  overflowCount,
  showZero,
  size,
  status,
  text,
  title
}) => {
  return <AntdBadge
    color={color}
    count={count}
    dot={dot}
    offset={offset}
    overflowCount={overflowCount}
    showZero={showZero}
    size={size}
    status={status}
    text={text}
    title={title}
    {...props} />
}

export { Badge };