import React from 'react';
import PropTypes from 'prop-types';
import { Tour as AntdTour } from 'antd';
import './tour.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/tour/
 * 
 */
export const Tour = ({ children, ...props }) => {
  return (
    <AntdTour
      className='storybook-tour'
      {...props}
    >
      {children}
    </AntdTour>
  );
};

Tour.propTypes = {
    /**
     * TODO property
     */
     
};

Tour.defaultProps = {
  
};
