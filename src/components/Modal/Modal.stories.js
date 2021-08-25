import React from 'react';
import { Button } from '../Button/Button';

import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    children: "Ananas",
    title: "Envoyer le calendrier",
    OpenModal: (showModal) => <Button type="primary" onClick={showModal}>
      Ouvrir la modale
    </Button>
  }
};

const ModalGlobal = (args) => <Modal {...args} />;

export const Defaut = ModalGlobal.bind({});