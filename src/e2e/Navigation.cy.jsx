import React from 'react'
import { Roles } from '../components'
import { Navigation } from '../components/Navigation/Navigation'
import { IntlProvider } from '../translation/IntlProvider'
import { BrowserRouter } from 'react-router-dom'

describe('<Navigation />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider>
      <BrowserRouter>
        <Navigation roles={[Roles.PLANING_KEEPER]}/>
      </BrowserRouter>
    </IntlProvider>)
  })
})