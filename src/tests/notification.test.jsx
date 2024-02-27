import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';

describe('Notification component', () => {
  const textContent = {
    title: "C'est une super notif",
    description: "Juste pour dire que ca fonctionne de ouf !",
    OpenNotification: (openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>,
  };

  const notification = (
    <Notif {...textContent} />
  );

  it('notification content text', () => {
    render(notification);
    expect(screen.getByText("coucou")).toBeInTheDocument();
    const buttonClick = screen.getByRole('button');
    fireEvent.click(buttonClick);
    expect(screen.getByText("C'est une super notif")).toBeInTheDocument();
  });
});