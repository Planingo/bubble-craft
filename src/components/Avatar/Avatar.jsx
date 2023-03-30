import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as AntdAvatar } from 'antd';
import './avatar.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/avatar/
 * 
 */
export const Avatar = ({ property, children, ...props }) => {
  return (
    <AntdAvatar
      className='storybook-avatar'
      {...props}
      property
    >
      {children}
    </AntdAvatar>
  );
};

Avatar.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Avatar.defaultProps = {
  property: false,
};
