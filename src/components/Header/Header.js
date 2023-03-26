import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input'
import './header.css';
import { RefinementList } from '../RefinementList/RefinementList';
import { RefinementDetails } from '../RefinementDetails/RefinementDetails';

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
export const Header = ({ 
  placeholder,
  isRefinementList,
  refinementList,
  refinementDetails,
   ...props }) => {

  return (
    <div
      className='storybook-header'
      {...props}
    >
      {isRefinementList ? <>
      <div className="search">
        <Input
          placeholder={placeholder}
          onChange={e => props.onSearch(e.target.value)}
          {...props}
        />
      </div>
      <RefinementList {...refinementList} />
      </> :
      <RefinementDetails {...refinementDetails} />}
    </div>
  );
};

Header.propTypes = {
    /**
     * TODO property
     */
    isRefinementList: PropTypes.bool,
};

Header.defaultProps = {
};
