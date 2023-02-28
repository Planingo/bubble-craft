import React from 'react';
import PropTypes from 'prop-types';
import { Watermark as AntdWatermark } from 'antd';
import './watermark.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/watermark/
 * 
 */
export const Watermark = ({ property, children, ...props }) => {
  return (
    <AntdWatermark
      className='storybook-watermark'
      {...props}
      property
    >
      {children}
    </AntdWatermark>
  );
};

Watermark.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Watermark.defaultProps = {
  property: false,
};
