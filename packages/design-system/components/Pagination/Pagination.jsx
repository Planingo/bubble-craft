import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as AntdPagination } from 'antd';
import './pagination.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/pagination/
 * 
 */
export const Pagination = ({ children, ...props }) => {
  return (
    <AntdPagination
      className='storybook-pagination'
      {...props}
    >
      {children}
    </AntdPagination>
  );
};

Pagination.propTypes = {
    /**
     * TODO property
     */
     
};

Pagination.defaultProps = {
  
};
