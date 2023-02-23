import React from 'react';
import PropTypes from 'prop-types';
import { Result as AntdResult } from 'antd';
import './result.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/result/
 * 
 */
export const Result = ({ property, children, ...props }) => {
  return (
    <AntdResult
      className='storybook-result'
      {...props}
      property
    >
      {children}
    </AntdResult>
  );
};

Result.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Result.defaultProps = {
  property: false,
};
