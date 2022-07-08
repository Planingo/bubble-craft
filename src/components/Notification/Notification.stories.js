import React from 'react';
import Button from '../Button/Button';

import Notif from './Notification';

export default {
  title: 'Components/Notification',
  component: Notif,
  args: {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  }
};

const NotificationGlobal = (args) => <Notif {...args} />;

export const Defaut = NotificationGlobal.bind({});