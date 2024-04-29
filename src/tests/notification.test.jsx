
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';
import { IntlProvider } from '../translation/IntlProvider';

describe('Notification component', () => {
  const notif = (
    <IntlProvider>
      <Notif
        title="C'est une super notif"
        description="Juste pour dire que ca fonctionne de ouf !"
        OpenNotification={(openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>}
      />
    </IntlProvider>
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