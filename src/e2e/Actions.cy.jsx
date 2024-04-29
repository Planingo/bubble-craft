import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Actions } from '../components/Actions/Actions'
import { IntlProvider } from '../translation/IntlProvider'

describe('<Actions />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider>
      <BrowserRouter><Actions downloadTitle={{
      id:"download.calendar.student",
      values:`Anne`,
    }}
    cloudTitle={{
      id:"send.calendar.student",
      values:`Anne`,
    }}
    deleteTitle={{
      id:"archived.student",
      values:`Anne`,
    }}/>
    </BrowserRouter></IntlProvider>)
  })
})