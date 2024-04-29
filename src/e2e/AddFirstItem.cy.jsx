import React from 'react'
import { AddFirstItem } from '../components/AddFirstItem/AddFirstItem'
import { IntlProvider } from '../translation/IntlProvider'

describe('<AddFirstItem />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider><AddFirstItem /></IntlProvider>)
  })
})