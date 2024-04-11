import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { toCapitalized } from '../../utils/formatText';
import { AddItem } from '../AddItem/AddItem';
import { AppstoreOutlinedDS } from '../Icon/icon/AppstoreOutlined';
import { CalendarOutlined } from '../Icon/icon/CalendarOutlined';
import { UnorderedListOutlined } from '../Icon/icon/UnorderedListOutlined';
import { RadioGroup } from '../Radio/RadioGroups/RadioGroup';
import './refinementList.css';

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
export const RefinementList = ({ 
	options,
	setIsGrid,
	isGrid,
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
	onDelete,
	onDeleteText,
  firstActionNotifText,
	Info,
  AddCalendar,
  addingCalendar,
  addCalendar,
  formId,
  ...props }) => {


  const { formatMessage } = useIntl()

  return (
    <div
      className='storybook-refinement-list'
      {...props}
    >
      <RadioGroup
        onChange={() => setIsGrid(!isGrid)}
        optionType="button"
        buttonStyle="solid"
        options={[
          {
            label: <AppstoreOutlinedDS />,
            value: 'Grid'
          },
          {
            label: <UnorderedListOutlined />,
            value: 'List'
          },
          ]}
          size="large"
          value={isGrid ? "Grid" : "List"}
      />

      <div className="refinement-item">
        {firstActionText ? (
          <AddItem
            mainActionButton={mainActionButton}
            icon={<FirstActionIcon />}
            title={toCapitalized(formatMessage({id: firstActionText}))}
            Form={FirstForm}
            adding={firstActioning}
            onAdd={onFirstAction}
            editing={secondActioning}
            onEdit={onSecondAction}
            formId={formId}
            descriptionNotif={firstActionNotifText}
          />
        ) : (
          <></>
        )}

        <Link to="/calendars">
          <AddItem
            mainActionButton={mainActionButton}
            secondary
            Form={AddCalendar}
            adding={addingCalendar}
            onAdd={addCalendar}
            icon={<CalendarOutlined />}
            title={toCapitalized(formatMessage({ id: 'app.add.calendar' }))}
            formId={formId}
          />
        </Link>
      </div>
    </div>
  );
};

RefinementList.propTypes = {
};

RefinementList.defaultProps = {
};
