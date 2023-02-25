import React from 'react';
import PropTypes from 'prop-types';
import { TreeSelect as AntdTreeSelect } from 'antd';
import './treeSelect.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/treeSelect/
 * 
 */
export const TreeSelect = ({ property, children, ...props }) => {
  return (
    <AntdTreeSelect
      className='storybook-treeSelect'
      {...props}
      property
    >
      {children}
    </AntdTreeSelect>
  );
};

TreeSelect.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

TreeSelect.defaultProps = {
  property: false,
};
