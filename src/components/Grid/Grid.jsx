import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

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
export const Grid = ({ children, ...props }) => {
  return (
    <div
      className='flex flex-wrap justify-between gap-x-2 gap-y-6'
      {...props}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
    /**
     * TODO property
     */
};

Grid.defaultProps = {
};
