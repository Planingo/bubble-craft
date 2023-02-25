import React from 'react';
import PropTypes from 'prop-types';
import { Tree as AntdTree } from 'antd';
import './tree.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/tree/
 * 
 */
export const Tree = ({ property, ...props }) => {
  return (
    <AntdTree
      className='storybook-tree'
      {...props}
      property
    />
  );
};

Tree.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Tree.defaultProps = {
  property: false,
};
