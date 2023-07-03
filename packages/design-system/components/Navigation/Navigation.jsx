import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';
import { path } from './path';
import { Menu } from '../Menu/Menu';
import { useIntl } from 'react-intl'
import { Roles } from '../Roles/roles';
import { Link } from "react-router-dom";
import { Tooltip } from '../Tooltip/Tooltip';

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
export const Navigation = ({ roles, ...props }) => {

  const { formatMessage } = useIntl()
  
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
      getItem(<p className='email'>{`${props?.email || "ditto-support@bugsyaya.dev"}`}</p>, 'email'),
      getItem(<Link to='/my-account'>
        <p>{formatMessage({id: 'app.my.account'})}</p>
      </Link>, '2'),
      getItem(<Link href='/logout'><p>{formatMessage({id: 'app.logout'})}</p></Link>, '3'),
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
              <Link key={key} to={to} activeclassname='active' className="pointer">
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
