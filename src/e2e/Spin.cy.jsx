import React from 'react'
import { Spin } from '../components/Spin/Spin'

describe('<Spin />', () => {
  it('renders', () => {
    cy.mount(<Spin />)
  })
})