import adaptivePlugin from "@fullcalendar/adaptive";
import en from "@fullcalendar/core/locales/en-gb";
import fr from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { locale } from "../../translation/IntlProvider";
import "./calendar.css";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"
import { useEffect } from "react";
import dayjs from "dayjs";

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
  console.log("dayjs(Date.now(), YYYY-MM-DD) : ", dayjs(dayjs(), "YYYY-MM-DD"))
  useEffect(() => {
    const containerEl = document.querySelector("#events");
    new Draggable(containerEl, {
      itemSelector: ".event",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText
        };
      }
    });
  }, []);
  return (
    <div className="storybook-calendar">

    <div id="events">
      {props?.dropEvents?.map(dropEvent => <div key={dropEvent.key} className="event">{dropEvent.title}</div>)}
    </div>
    <div className="calendar">
      <FullCalendar
        timeZone='UTC'
        schedulerLicenseKey={props.schedulerLicenseKey}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        locale={locale === "fr" ? fr : en}
        plugins={[timeGridPlugin, dayGridPlugin, adaptivePlugin, interactionPlugin]}
        weekends={false}
        initialView="timeGridWeek"
        height="100%"
        events={props.events}
        editable
        droppable
        {...props}
      />
      </div>
    </div>
  );
};

Calendar.propTypes = {
  /**
   * TODO property
   */
};

Calendar.defaultProps = {};
