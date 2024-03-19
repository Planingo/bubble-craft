import React from 'react'
import { Tour } from '../components/Tour/Tour'

describe('<Tour />', () => {
  it('renders', () => {
    cy.mount(<Tour />)
  })
})