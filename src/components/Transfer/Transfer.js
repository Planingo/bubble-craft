import React from 'react';
import PropTypes from 'prop-types';
import { Transfer as AntdTransfer } from 'antd';
import './transfer.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/transfer/
 * 
 */
export const Transfer = ({ property, children, ...props }) => {
  return (
    <AntdTransfer
      className='storybook-transfer'
      {...props}
      property
    >
      {children}
    </AntdTransfer>
  );
};

Transfer.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Transfer.defaultProps = {
  property: false,
};
