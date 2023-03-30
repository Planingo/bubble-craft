import React from 'react';
import PropTypes from 'prop-types';
import { QRCode as AntdQRCode } from 'antd';
import './qRCode.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/qRCode/
 * 
 */
export const QRCode = ({ children, ...props }) => {
  return (
    <AntdQRCode
      className='storybook-qRCode'
      {...props}
    />
  );
};

QRCode.propTypes = {
    /**
     * TODO value
     */
    value: PropTypes.string,
};

QRCode.defaultProps = {
};
