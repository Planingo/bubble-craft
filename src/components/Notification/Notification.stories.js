import React from 'react';
import { Button } from '../Button/Button';

import { Notification } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  args: {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  }
};

const NotificationGlobal = (args) => <Notification {...args} />;

export const Defaut = NotificationGlobal.bind({});