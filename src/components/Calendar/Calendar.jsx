import adaptivePlugin from '@fullcalendar/adaptive';
import en from '@fullcalendar/core/locales/en-gb';
import fr from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';
import { locale } from '../../translation/IntlProvider';
import './calendar.css';


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
        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        locale={locale === 'fr' ? fr : en}
        plugins={[ timeGridPlugin, dayGridPlugin, adaptivePlugin ]}
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
