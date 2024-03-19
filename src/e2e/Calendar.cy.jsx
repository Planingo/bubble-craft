import React from 'react'
import { Calendar } from '../components/Calendar/Calendar'

describe('<Calendar />', () => {
  it('renders', () => {
    cy.mount(<Calendar />)
  })
})