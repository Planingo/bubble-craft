import React from 'react';
import PropTypes from 'prop-types';
import { Slider as AntdSlider } from 'antd';
import './slider.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/slider/
 * 
 */
export const Slider = ({ property, children, ...props }) => {
  return (
    <AntdSlider
      className='storybook-slider'
      {...props}
      property
    >
      {children}
    </AntdSlider>
  );
};

Slider.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Slider.defaultProps = {
  property: false,
};
