import React from 'react';
import PropTypes from 'prop-types';
import { Statistic as AntdStatistic } from 'antd';
import './statistic.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/statistic/
 * 
 */
export const Statistic = ({ ...props }) => {
  return (
    <AntdStatistic
      className='storybook-statistic'
      {...props}
    />
  );
};

Statistic.propTypes = {
    /**
     * TODO property
     */
     
};

Statistic.defaultProps = {
  
};
