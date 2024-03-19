import React from 'react'
import { DatePicker } from '../components/DatePicker/DatePicker'

describe('<DatePicker />', () => {
  it('renders', () => {
    cy.mount(<DatePicker />)
  })
})