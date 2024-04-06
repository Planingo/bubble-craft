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
export const SkeletonImage = ({ children, ...props }) => {
  return (
    <AntdSkeleton.Image
      className='storybook-skeleton'
      active={true}
      {...props}
    />
  );
};

SkeletonImage.propTypes = {
    /**
     * TODO property
     */
     
};

SkeletonImage.defaultProps = {
  
};
