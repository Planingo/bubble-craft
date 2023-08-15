import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as AntdCalendar, ConfigProvider } from 'antd';
import './calendar.css';
import 'dayjs/locale/fr';
import localeFR from 'antd/locale/fr_FR';
import localeEN from 'antd/locale/en_US';


/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/calendar/
 * 
 */
export const Calendar = ({ ...props }) => {
	const locale = global.navigator?.language.split(/[-_]/)[0] || 'fr'

  return (
    <ConfigProvider locale={locale === 'fr' ? localeFR : localeEN}>
      <AntdCalendar
        className='storybook-calendar'
        {...props}
      />
    </ConfigProvider>
  );
};

Calendar.propTypes = {
    /**
     * TODO property
     */
     
};

Calendar.defaultProps = {
  
};
