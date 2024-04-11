import PropTypes from 'prop-types';
import React from 'react';
import { useIntl } from 'react-intl';
import { toCapitalized } from '../../utils/formatText';
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
  const {formatMessage} = useIntl()
  return (
    <div
      className='storybook-header'
      {...props}
    >
      {isRefinementList ? <>
        <div className="search">
          <Input
            allowClear
            placeholder={toCapitalized(formatMessage({id: placeholder}))}
            onChange={e => props.onSearch(e.target.value)}
            {...props}
          />
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
