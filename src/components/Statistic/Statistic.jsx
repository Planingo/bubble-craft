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
export const Statistic = ({ property, ...props }) => {
  return (
    <AntdStatistic
      className='storybook-statistic'
      {...props}
      property
    />
  );
};

Statistic.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Statistic.defaultProps = {
  property: false,
};
