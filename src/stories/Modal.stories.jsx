import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { Notif } from '../components/Notification/Notification';

const meta = {
  title: 'Molécules/Modal',
  component: Modal,
  decorators: [withTests({ results })],
  parameters: { jest: ['modal.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Ananas",
    title: "Envoyer le calendrier",
    footer: [
      <Button key="back" onClick={console.log}>
        Return
      </Button>,
      <Button key="submit" type="primary" onClick={console.log}>
        Submit
      </Button>,
      <Button
        key="link"
        href="https://google.com"
        type="primary"
        onClick={console.log}
      >
        Search on Google
      </Button>,
    ],
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
  },
};
