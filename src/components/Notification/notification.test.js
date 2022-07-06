import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Button } from '../Button/Button';
import {Notification} from './Notification';

describe('Notification component', () => {
  const textContent = {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  };

  const notification = (
    <Notification {...textContent} />
  );

  it('Snapshot card', () => {
    const { baseElement } = render(notification);
    expect(baseElement).toMatchSnapshot();
  });
});