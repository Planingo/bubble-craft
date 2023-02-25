import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable } from 'antd';
import './table.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/table/
 * 
 */
export const Table = ({ property, ...props }) => {
  return (
    <AntdTable
      className='storybook-table'
      {...props}
      property
    />
  );
};

Table.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Table.defaultProps = {
  property: false,
};
