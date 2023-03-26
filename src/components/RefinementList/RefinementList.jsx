import React from 'react';
import PropTypes from 'prop-types';
import './refinementList.css';
import { useIntl } from 'react-intl';
import { RadioGroup } from '../Radio/RadioGroups/RadioGroup'
import { Link } from 'react-router-dom';
import { AppstoreOutlinedDS } from '../Icon/icon/AppstoreOutlined';
import { UnorderedListOutlined } from '../Icon/icon/UnorderedListOutlined';
import { CalendarOutlined } from '../Icon/icon/CalendarOutlined';
import { AddItem } from '../AddItem/AddItem';

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
	Info,
  AddCalendar,
  addingCalendar,
  addCalendar,
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
            title={firstActionText}
            Form={FirstForm}
            adding={firstActioning}
            onAdd={onFirstAction}
            editing={secondActioning}
            onEdit={onSecondAction}
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
            title={formatMessage({ id: 'app.add.calendar' })}
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
