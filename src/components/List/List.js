import React from 'react';
import PropTypes from 'prop-types';
import { List as AntdList } from 'antd';
import './list.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/list/
 * 
 */
export const List = ({ ...props }) => {
  return (
    <AntdList
      className='storybook-list'
      {...props}
    />
  );
};

List.propTypes = {
    /**
     * TODO property
     */
     dataSource: PropTypes.array,
};

List.defaultProps = {
};
