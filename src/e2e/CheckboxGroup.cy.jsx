import React from 'react'
import { CheckboxGroup } from '../components/Checkbox/CheckboxGroups/CheckboxGroup'

describe('<CheckboxGroup />', () => {
  it('renders', () => {
    cy.mount(<CheckboxGroup />)
  })
})