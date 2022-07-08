import React from 'react';
import { Spin as AntdSpin } from 'antd'


/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/spin/
 * 
 */
const Spin = ({
  props,
  delay,
  indicator,
  size,
  spinning,
  tip,
  wrapperClassName
}) => {
  return <AntdSpin
  delay={delay}
  indicator={indicator}
  size={size}
  spinning={spinning}
  tip={tip}
  wrapperClassName={wrapperClassName}
    {...props} />
}

export { Spin };