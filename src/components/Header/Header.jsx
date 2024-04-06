import PropTypes from 'prop-types';
import React from 'react';
import { Input } from '../Input/Input';
import { RefinementDetails } from '../RefinementDetails/RefinementDetails';
import { RefinementList } from '../RefinementList/RefinementList';
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
export const Header = ({ 
  placeholder,
  subSearch,
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
            allowClear
            placeholder={placeholder}
            onChange={e => {
              return props.onSearch(e.target.value)}}
            {...props}
          />
          {subSearch && <p>{subSearch}</p>}
        </div>
        <RefinementList {...refinementList} />
      </> :
      <RefinementDetails {...refinementList}  {...refinementDetails} />}
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
