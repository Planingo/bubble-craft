import React from 'react'
import { Checkbox } from '../components/Checkbox/Checkbox'

describe('<Checkbox />', () => {
  it('renders', () => {
    cy.mount(<Checkbox />)
  })
})