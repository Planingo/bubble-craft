import React from 'react'
import { Tree } from '../components/Tree/Tree'

describe('<Tree />', () => {
  it('renders', () => {
    cy.mount(<Tree />)
  })
})