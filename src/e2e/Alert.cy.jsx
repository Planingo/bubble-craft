import React from 'react'
import { Alert } from '../components/Alert/Alert'

describe('<Alert />', () => {
  it('renders', () => {
    cy.mount(<Alert />)
  })
})