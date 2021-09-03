import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';
import { Radio as AntdRadio } from 'antd';
import './button.less'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/button/
 * 
 */
export const Button = ({children, activeGrid, activeList, switch: pswitch, onlyIcon, rightIcon, icon, ...props }) => {
  if (props.ghost || props.type === "dashed") props['data-ghost'] = true
  if (props.danger) props['data-danger'] = true
  if (props.type === 'link' || props.type === 'text') props['data-link'] = true
  if (props.size === 'large') props['data-large'] = true
  if (props.size === 'small') props['data-small'] = true
  return (
    <div className="storybook-button">
      {!pswitch ?
        <AntdButton
          {...props}
        >
          {!rightIcon && icon}
          {!onlyIcon && children}
          {rightIcon && icon}
        </AntdButton>
      :
        <AntdRadio.Group {...props}>
          <AntdRadio.Button className={activeGrid ? 'active' : 'unactive'}><AppstoreOutlined/></AntdRadio.Button>
          <AntdRadio.Button className={activeList ? 'active' : 'unactive'}><UnorderedListOutlined/></AntdRadio.Button>
        </AntdRadio.Group>
      }
    </div>
  );
};

Button.propTypes = {
  /**
  * TODO property
  */
  activeGrid: PropTypes.bool,
  /**
  * TODO property
  */
   activeList: PropTypes.bool,
  /**
  * TODO property
  */
  switch: PropTypes.bool,
  /**
  * TODO property
  */
  block: PropTypes.bool,
  /**
  * TODO property
  */
  disabled: PropTypes.bool,
  /**
  * TODO property
  */
  danger: PropTypes.bool,
  /**
  * TODO property
  */
  ghost: PropTypes.bool,
  /**
  * TODO property
  */
  onlyIcon: PropTypes.bool,
  /**
  * TODO property
  */
   type: PropTypes.oneOf(['primary', 'dashed', 'link', 'text', 'default']),
  /**
  * TODO property
  */
  href: PropTypes.string,
  /**
  * TODO property
  */
  htmlType: PropTypes.string,
  /**
  * TODO property
  */
  className: PropTypes.string,
  /**
  * TODO property
  */
  icon: PropTypes.node,
  /**
  * TODO property
  */
  loading: PropTypes.bool,
  /**
  * TODO property
  */
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  /**
  * TODO property
  */
  target: PropTypes.string,
  /**
  * TODO property
  */
  onClick: PropTypes.func,
  /**
  * TODO property
  */
  rightIcon: PropTypes.bool,
};

Button.defaultProps = {
  block: false,
  disabled: false,
  htmlType: "button",
  loading: false,
  size: "middle",
  type: 'primary',
  onlyIcon: false,
  rightIcon: false,
  switch: false,
  activeGrid: true
};
