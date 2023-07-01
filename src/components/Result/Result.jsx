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
export const Result = ({ children, ...props }) => {
  return (
    <AntdResult
      className='storybook-result'
      {...props}
    >
      {children}
    </AntdResult>
  );
};

Result.propTypes = {
    /**
     * TODO property
     */
     
};

Result.defaultProps = {
  
};
