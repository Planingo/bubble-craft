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
export const Slider = ({ children, ...props }) => {
  return (
    <AntdSlider
      className='storybook-slider'
      {...props}
    >
      {children}
    </AntdSlider>
  );
};

Slider.propTypes = {
    /**
     * TODO property
     */
     
};

Slider.defaultProps = {
  
};
