import React from 'react';
import PropTypes from 'prop-types';
import './globalpage.css';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import { Empty } from '../Empty/Empty';
import { useIntl } from 'react-intl';
import { Footer } from '../Footer/Footer';

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
export const GlobalPage = ({
  navigation,
  header,
  children,
  ...props }) => {

  const { formatMessage } = useIntl()

  return (
    <div
      className='storybook-global-page h-screen'
      {...props}
    >
      <Navigation {...navigation}/>
      <div className='right-part'>
        <div className='top-part'>
          <Header
            {...header}
          />
        </div>
        <div className='bottom-part'>
          {children || <Empty description={<p>{formatMessage({id: 'app.empty'})}</p>} />}
        </div>
        <Footer version={props.footer}/>
      </div>
    </div>
  );
};

GlobalPage.propTypes = {
};

GlobalPage.defaultProps = {
};
