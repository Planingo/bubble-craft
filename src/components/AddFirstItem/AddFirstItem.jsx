import React from 'react';
import { toCapitalized } from '../../utils/formatText';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Notif } from '../Notification/Notification';
import './addFirstItem.css';

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
export const AddFirstItem = ({ children, title, cta }) => {
	return (
		<div className="addItemEmpty">
			<Modal
				OpenModal={
					(showModal) =>
					<>
						{cta && <Button className="cta" onClick={showModal}>{toCapitalized(cta)}</Button>}
					</>
			  	}
				ValidateButton={
				(handleOk) => <Notif
					OpenNotification={(openNotification) => 
						<Button key="validate" className="cta" onClick={() => {
						openNotification()
						handleOk()
						}}>Valider</Button>
						
					}/>
				}
				title={title}
			>
				{children}
			</Modal>
		</div>
	)
}

AddFirstItem.propTypes = {
};

AddFirstItem.defaultProps = {
};
