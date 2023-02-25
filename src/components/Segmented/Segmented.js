import React from 'react';
import PropTypes from 'prop-types';
import { Segmented as AntdSegmented } from 'antd';
import './segmented.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/segmented/
 * 
 */
export const Segmented = ({ property, ...props }) => {
  return (
    <AntdSegmented
      className='storybook-segmented'
      {...props}
      property
    />
  );
};

Segmented.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Segmented.defaultProps = {
  property: false,
};
