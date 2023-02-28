import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntdDrawer } from 'antd';
import './drawer.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/drawer/
 * 
 */
export const Drawer = ({ property, children, ...props }) => {
  return (
    <AntdDrawer
      className='storybook-drawer'
      {...props}
      property
    >
      {children}
    </AntdDrawer>
  );
};

Drawer.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Drawer.defaultProps = {
  property: false,
};
