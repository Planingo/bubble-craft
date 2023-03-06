import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';
import { path } from './path';
import { Menu } from '../Menu/Menu';
import { useIntl } from 'react-intl'
import { Roles } from '../Roles/roles';

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
export const Navigation = ({ children, roles, ...props }) => {

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
      getItem(<a href='/my-account'>
        {formatMessage({id: 'app.my.account'})}
      </a>, '2'),
      getItem(<a href='/logout'>{formatMessage({id: 'app.logout'})}</a>, '3'),
   ]),
  ]

  return (
    <div className="storybook-navigation" {...props}>
      <div className="top">
        <div className="logo">
        <Menu mode="vertical" triggerSubMenuAction="click"
        items={items}
        >
        </Menu>
        </div>
        <div className="main">
          {
            path.filter(({role}) => roles.includes(role))
            .map(({key, to, message}) => (
              <a key={key} href={to} className="pointer">
                {message}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.oneOf([Roles.SUPER_ADMIN, Roles.PLANING_KEEPER, Roles.STUDENT, Roles.PROFESSOR, Roles.COMPANY]))
};

Navigation.defaultProps = {
};
