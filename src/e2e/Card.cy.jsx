import React from 'react'
import { Card } from '../components/Card/Card'

describe('<Card />', () => {
  it('renders', () => {
    cy.mount(<Card />)
  })
})