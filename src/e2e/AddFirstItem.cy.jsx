import React from 'react'
import { AddFirstItem } from '../components/AddFirstItem/AddFirstItem'

describe('<AddFirstItem />', () => {
  it('renders', () => {
    cy.mount(<AddFirstItem />)
  })
})