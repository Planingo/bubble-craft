import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { toCapitalized } from '../../utils/formatText';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Notif } from '../Notification/Notification';
import './addItem.css';

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
export const AddItem = ({ 
	Form,
	title,
  icon,
	cta,
	secondary,
	onAdd,
	adding,
	onEdit,
	editing,
	mainActionButton,
  formId,
  descriptionNotif,
  ...props 
}) => {
	const { id } = useParams()
	const [item, setItem] = useState()
  const {formatMessage} = useIntl()

  return (
        <Modal
          cancelText={toCapitalized(formatMessage({id: "cancel"}))}
          onOk={async () =>  onAdd ? await onAdd(item, id) : onEdit ? await onEdit(item, id) : null}
          title={title}
          OpenModal={(showModal) => <Button key="modal" ghost={secondary} size="large" icon={icon} onClick={showModal}>{toCapitalized(cta || title)}</Button>}
          ValidateButton={(handleOk) => <Notif 
            key="validate" 
            title={toCapitalized(formatMessage({id: "success"}))}
            description={descriptionNotif}
            OpenNotification={(openNotification) => 
              <Button key="validate" className="cta" htmlType='submit' form={formId} onClick={() => {
                openNotification()
                handleOk()
              }}>
                {toCapitalized(formatMessage({id: props?.okText || "valid"}))}
              </Button>
            }
            />
          }
        >
          {Form}
        </Modal>
  );
};

AddItem.propTypes = {
};

AddItem.defaultProps = {
};
