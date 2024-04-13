import PropTypes from 'prop-types';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from "react-router-dom";
import { Menu } from '../Menu/Menu';
import { Roles } from '../Roles/roles';
import { Tooltip } from '../Tooltip/Tooltip';
import './navigation.css';
import { path } from './path';

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
export const Navigation = ({ roles, logout, ...props }) => {
  const { formatMessage } = useIntl()
  const location = useLocation();
  
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const items = [
    getItem(<img
      alt="profil"
      src={`https://avatars.bugsyaya.dev/50/${props.userId }`}
    />, 'sub1', null, [
      getItem(<p className='email'>{`${props?.email || "bubble-craft-support@bugsyaya.dev"}`}</p>, 'email'),
      getItem(<Link to='/my-account'>
        <p>{formatMessage({id: 'app.my.account'})}</p>
      </Link>, '2'),
      getItem(<p onClick={logout}>{formatMessage({id: 'app.logout'})}</p>, '3'),
   ]),
  ]

  return (
    <div className="storybook-navigation" {...props}>
      <div className="top">
        <div className="logo">
          <Menu mode="vertical" triggerSubMenuAction="click" items={items} />
        </div>
        <div className="main">
          {
            path.filter(({role}) => roles.includes(role))
            .map(({key, to, title, icon}) => (
              <Link key={key} to={to} className={`pointer ${location.pathname.includes(to) ? `active` : ''}`}>
                <Tooltip placement='right' title={formatMessage({id: title})}>
                  <div>
                    {icon}
                  </div>
                </Tooltip>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.oneOf([
    Roles.SUPER_ADMIN,
    Roles.PLANING_KEEPER,
    Roles.STUDENT,
    Roles.PROFESSOR,
    Roles.COMPANY
  ]))
};

Navigation.defaultProps = {
};
