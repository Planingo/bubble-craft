import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';

describe('Notification component', () => {
  const notif = (
      <Notif
        title="C'est une super notif"
        description="Juste pour dire que ca fonctionne de ouf !"
        OpenNotification={(openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>}
      />
  );

  it('Notif content text button', () => {
    const { baseElement } = render(notif);
    expect(baseElement).toHaveTextContent("coucou");
  });

  it('Notif content text', () => {
    const { baseElement } = render(notif);
    const buttonClick = screen.getByRole('button');
    fireEvent.click(buttonClick);
    expect(baseElement).toHaveTextContent("C'est une super notif");
  });
});