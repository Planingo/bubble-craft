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
export const Breadcrumb = ({ items, ...props }) => {
  return (
    <AntdBreadcrumb
      className='storybook-breadcrumb'
      {...props}
    >
      {items.map(item => <AntdBreadcrumb.Item>{item}</AntdBreadcrumb.Item>)}
    </AntdBreadcrumb>
  );
};

Breadcrumb.propTypes = {
    /**
     * TODO property
     */
    items: PropTypes.array,
};

Breadcrumb.defaultProps = {
};
