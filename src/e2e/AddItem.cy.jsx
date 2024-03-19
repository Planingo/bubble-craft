import React from 'react'
import { AddItem } from '../components/AddItem/AddItem'

describe('<AddItem />', () => {
  it('renders', () => {
    cy.mount(<AddItem />)
  })
})