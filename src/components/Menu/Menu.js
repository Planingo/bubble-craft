import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntdMenu } from 'antd';
import './menu.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/menu/
 * 
 */
export const Menu = ({ children, ...props }) => {
  return (
    <AntdMenu
      className='storybook-menu'
      {...props}
    >
      {children}
    </AntdMenu>
  );
};

Menu.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Menu.defaultProps = {
  property: false,
};
