import React from 'react';
import { Button } from '../Button/Button';
import { Notif } from '../Notification/Notification';

import { Modal } from './Modal';

export default {
  title: 'Molécules/Modal',
  component: Modal,
  args: {
    children: "Ananas",
    title: "Envoyer le calendrier",
    OpenModal: (showModal) => <Button type="primary" onClick={showModal}>
      Ouvrir la modale
    </Button>,
    ValidateButton: (handleOk) => <Notif
      OpenNotification={(openNotification) => 
        <Button key="validate" className="cta" onClick={() => {
          openNotification()
          handleOk()
        }}>Valider</Button>
      }
      title="C'est un titre"
      description="C'est une description !"
      />
  }
};

const ModalGlobal = (args) => <Modal {...args} />;

export const Default = ModalGlobal.bind({});