import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button/Button';
import Notif from './Notification';

describe('Notification component', () => {
  const textContent = {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  };

  const notification = (
    <Notif {...textContent} />
  );

  it('Snapshot notification', () => {
    const { baseElement } = render(notification);
    expect(baseElement).toMatchSnapshot();
  });
});