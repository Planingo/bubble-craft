import React from 'react'
import { ModuleForm } from '../components/AddItem/ModuleForm'
import { IntlProvider } from '../translation/IntlProvider'

describe('<ModuleForm />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider><ModuleForm onSubmit={console.log}/></IntlProvider>)
  })
})