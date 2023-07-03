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
export const Tree = ({ ...props }) => {
  return (
    <AntdTree
      className='storybook-tree'
      {...props}
    />
  );
};

Tree.propTypes = {
    /**
     * TODO property
     */
     
};

Tree.defaultProps = {
  
};
