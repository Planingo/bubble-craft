import React from 'react';
import { Radio as AntdRadio } from 'antd'
import './radioGroup.css'


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
export const RadioGroup = ({ children, ...props }) => {
  return <AntdRadio.Group {...props} className='storybook-radiogroup' />
}
