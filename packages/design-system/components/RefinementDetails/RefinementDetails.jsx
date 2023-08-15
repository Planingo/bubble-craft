import React from 'react';
import PropTypes from 'prop-types';
import './refinementDetails.css';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { AddItem } from '../AddItem/AddItem'
import { ArrowLeftOutlined, CalendarOutlined } from '../Icon/icon';
import { theme } from 'antd'
import { Button } from '../Button/Button';
import { toCapitalized } from '../../utils/formatText';
import { Tag } from '../Tag/Tag';

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
	info,
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
            <Button type='link' icon={<ArrowLeftOutlined />} href={`/${backTo}`} />
					<div className="flex">
            <img className='w-auto h-full m-auto mx-3' alt={info.img.alt} src={info.img.src}/>
            <div>
              <h1 className='m-0'>{info.title}</h1>
              {info.tags?.map(({link, tag}) => <Link to={link}>
                <Tag className="bg-orangebubblecraft border-orange-400 text-white">{tag}</Tag>
              </Link>)}
            </div>
					</div>
				</div>

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
          />
        ) : (
          <></>
        )}

        {secondActionText ? (
          <AddItem
            mainActionButton={mainActionButton}
            icon={<SecondActionIcon />}
            title={toCapitalized(formatMessage({ id: secondActionText}) || secondActionText)}
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
            title={toCapitalized(formatMessage({ id: 'app.add.calendar' }))}
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
