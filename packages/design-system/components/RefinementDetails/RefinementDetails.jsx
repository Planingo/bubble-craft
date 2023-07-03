import React from 'react';
import PropTypes from 'prop-types';
import './refinementDetails.css';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { AddItem } from '../AddItem/AddItem'
import { ArrowLeftOutlined, CalendarOutlined } from '../Icon/icon';
import { theme } from 'antd'
import { Button } from '../Button/Button';

const { useToken } = theme

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
	Info,
  AddCalendar,
  addingCalendar,
  addCalendar,
  ...props }) => {
    const { token } = useToken()

  const { formatMessage } = useIntl()

  return (
    <div
      className='storybook-refinement-details'
      {...props}
    >
      <div className='left'>
            <Button type='link' icon={<ArrowLeftOutlined />} href={`/${backTo}`} />
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
