import React from 'react'
import { StudentEditForm } from '../components/AddItem/StudentEditForm'
import { IntlProvider } from '../translation/IntlProvider'

describe('<StudentEditForm />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider><StudentEditForm companies={[]} onSubmit={console.log}/></IntlProvider>)
  })
})