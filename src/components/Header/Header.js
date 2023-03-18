import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input'
import './header.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * 
 * 
 */
export const Header = ({ placeholder, ...props }) => {
  return (
    <div
      className='storybook-header'
      {...props}
    >
      <div className="search">
        <Input
          placeholder={placeholder}
          onChange={e => props.onSearch(e.target.value)}
          {...props}
        />
      </div>
      
    </div>
  );
};

Header.propTypes = {
    /**
     * TODO property
     */
    property: PropTypes.bool,
};

Header.defaultProps = {
  property: false,
};
