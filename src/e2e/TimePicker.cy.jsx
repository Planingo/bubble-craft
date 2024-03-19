import React from 'react'
import { TimePicker } from '../components/TimePicker/TimePicker'

describe('<TimePicker />', () => {
  it('renders', () => {
    cy.mount(<TimePicker />)
  })
})