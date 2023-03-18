import React from 'react';
import PropTypes from 'prop-types';
import './refinementDetails.css';
import { useIntl } from 'react-intl';
import { RadioGroup } from '../Radio/RadioGroups/RadioGroup'
import { Link } from 'react-router-dom';
import { AppstoreOutlined } from '../Icon/icon/AppstoreOutlined';
import { UnorderedListOutlined } from '../Icon/icon/UnorderedListOutlined';
import { AddItem } from '../AddItem/AddItem'
import { ArrowLeftOutlined, CalendarOutlined } from '@ant-design/icons';
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
      className='storybook-refinement-details'
      {...props}
    >
      <div className='left'>
					<Link to={`/${backTo}`}>
						<ArrowLeftOutlined />
					</Link> 
					<div className="info">
						{Info}
					</div>
				</div>

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

        {secondActionText ? (
          <AddItem
            mainActionButton={mainActionButton}
            icon={<SecondActionIcon />}
            title={formatMessage({ id: secondActionText}) || secondActionText}
            Form={SecondForm}
            adding={secondActioning}
            onAdd={onSecondAction}
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

RefinementDetails.propTypes = {
};

RefinementDetails.defaultProps = {
};
