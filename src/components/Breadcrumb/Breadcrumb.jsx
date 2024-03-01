import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import './breadcrumb.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/breadcrumb/
 * 
 */
export const Breadcrumb = ({ items }) => {
  return (
    <AntdBreadcrumb
      className='storybook-breadcrumb'
      items={items}
    />
  );
};
