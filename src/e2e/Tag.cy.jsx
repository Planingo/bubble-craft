import React from 'react'
import { Tag } from '../components/Tag/Tag'

describe('<Tag />', () => {
  it('renders', () => {
    cy.mount(<Tag />)
  })
})