import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton as AntdSkeleton } from 'antd';
import './skeleton.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/skeleton/
 * 
 */
export const Skeleton = ({ property, children, ...props }) => {
  return (
    <AntdSkeleton
      className='storybook-skeleton'
      {...props}
      property
    >
      {children}
    </AntdSkeleton>
  );
};

Skeleton.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Skeleton.defaultProps = {
  property: false,
};
