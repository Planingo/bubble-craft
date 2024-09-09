import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AddItem } from "../AddItem/AddItem";
import { Button } from "../Button/Button";
import { ArrowLeftOutlined, CalendarOutlined } from "../Icon/icon";
import "./refinementDetails.css";

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
export const RefinementDetails = ({
  backTo,
  FirstActionIcon,
  firstActionText,
  FirstForm,
  firstActioning,
  onFirstAction,
  SecondActionIcon,
  secondActionText,
  SecondForm,
  secondActioning,
  onSecondAction,
  mainActionButton,
  firstActionNotifText,
  Info,
  AddCalendar,
  addingCalendar,
  addCalendar,
  ...props
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="storybook-refinement-details" {...props}>
      <div className="left">
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={() => backTo()}
        />
        <div className="info">{Info}</div>
      </div>

      <div className="refinement-item">
        <div>
          {firstActionText ? (
            <AddItem
              mainActionButton={mainActionButton}
              icon={<FirstActionIcon />}
              title={formatMessage({ id: firstActionText })}
              Form={FirstForm}
              adding={firstActioning}
              onAdd={onFirstAction}
              editing={secondActioning}
              onEdit={onSecondAction}
              descriptionNotif={firstActionNotifText || ""}
            />
          ) : (
            <></>
          )}

          {secondActionText ? (
            <AddItem
              mainActionButton={mainActionButton}
              icon={<SecondActionIcon />}
              title={
                formatMessage({ id: secondActionText }) || secondActionText
              }
              Form={SecondForm}
              adding={secondActioning}
              onAdd={onSecondAction}
              editing={secondActioning}
              onEdit={onSecondAction}
            />
          ) : (
            <></>
          )}
        </div>

        <Link to="/calendars">
          <AddItem
            mainActionButton={mainActionButton}
            secondary
            Form={AddCalendar}
            adding={addingCalendar}
            onAdd={addCalendar}
            icon={<CalendarOutlined />}
            title={formatMessage({ id: "app.add.calendar" })}
          />
        </Link>
      </div>
    </div>
  );
};

RefinementDetails.propTypes = {};

RefinementDetails.defaultProps = {};
