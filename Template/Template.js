import React from 'react';
import PropTypes from 'prop-types';
import './template.css';

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
export const Template = ({ property, children, ...props }) => {
  return (
    <template
      className='storybook-template'
      {...props}
      property
    >
      {children}
    </template>
  );
};

Template.propTypes = {
    /**
     * TODO property
     */
    property: PropTypes.bool,
};

Template.defaultProps = {
  property: false,
};
