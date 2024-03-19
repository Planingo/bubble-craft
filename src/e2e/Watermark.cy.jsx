import React from 'react'
import { Watermark } from '../components/Watermark/Watermark'

describe('<Watermark />', () => {
  it('renders', () => {
    cy.mount(<Watermark />)
  })
})