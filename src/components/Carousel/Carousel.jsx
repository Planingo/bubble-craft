import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as AntdCarousel } from 'antd';
import './carousel.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/carousel/
 * 
 */
export const Carousel = ({ property, datas, ...props }) => {
  return (
    <AntdCarousel
      className='storybook-carousel'
      {...props}
      property
    >
      {datas.map(data => data)}
    </AntdCarousel>
  );
};

Carousel.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Carousel.defaultProps = {
  property: false,
};
