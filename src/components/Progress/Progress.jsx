import React from 'react';
import PropTypes from 'prop-types';
import { Progress as AntdProgress } from 'antd';
import './progress.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/progress/
 * 
 */
export const Progress = ({ property, children, ...props }) => {
  return (
    <AntdProgress
      className='storybook-progress'
      {...props}
      property
    >
      {children}
    </AntdProgress>
  );
};

Progress.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Progress.defaultProps = {
  property: false,
};
