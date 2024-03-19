import React from 'react'
import { Button } from '../components/Button/Button'

describe('<Button />', () => {
  it('renders', () => {
    cy.mount(<Button />)
  })
})