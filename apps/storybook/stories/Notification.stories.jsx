import React from 'react';
import { Button, Notif } from '@planingo/design-system'

export default {
  title: 'Molécules/Notification',
  component: Notif,
  args: {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  }
};

const NotificationGlobal = (args) => <Notif {...args} />;

export const Default = NotificationGlobal.bind({});