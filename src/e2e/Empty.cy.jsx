import React from 'react'
import { Empty } from '../components/Empty/Empty'

describe('<Empty />', () => {
  it('renders', () => {
    cy.mount(<Empty />)
  })
})