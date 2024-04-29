import React from 'react'
import { StudentForm } from '../components/AddItem/StudentForm'
import { IntlProvider } from '../translation/IntlProvider'

describe('<StudentForm />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider><StudentForm onSubmit={console.log}/></IntlProvider>)
  })
})