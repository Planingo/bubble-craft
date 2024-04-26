import React from 'react';
import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';


const meta = {
  title: 'Molécules/Notification',
  component: Notif,
};

export default meta;

export const Playground = {
  args: {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  },
};
