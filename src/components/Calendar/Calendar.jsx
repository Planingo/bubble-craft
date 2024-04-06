import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './calendar.css';
import fr from '@fullcalendar/core/locales/fr';
import en from '@fullcalendar/core/locales/en-gb';
import timeGridPlugin from '@fullcalendar/timegrid'
import { locale } from '../../translation/IntlProvider';


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
  return (
    <div className='storybook-calendar'>
      <FullCalendar
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        locale={locale === 'fr' ? fr : en}
        plugins={[ timeGridPlugin, dayGridPlugin ]}
        weekends={true}
        initialView="timeGridWeek"
        height="100%"
        events={props.events}
      />
    </div>
  );
};

Calendar.propTypes = {
    /**
     * TODO property
     */
     
};

Calendar.defaultProps = {
  
};
