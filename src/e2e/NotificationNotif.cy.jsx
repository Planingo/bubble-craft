import React from 'react'
import { Button } from '../components'
import { Notif } from '../components/Notification/Notification'

describe('<Notif />', () => {
  it('renders', () => {
    cy.mount(<Notif title="C'est une super notif"
      description="Juste pour dire que ca fonctionne de ouf !"
      OpenNotification={(openNotification) => <Button type="primary" onClick={openNotification}>coucou</Button>}
  />)
  })
})