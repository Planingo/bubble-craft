import React from 'react'
import { Statistic } from '../components/Statistic/Statistic'

describe('<Statistic />', () => {
  it('renders', () => {
    cy.mount(<Statistic />)
  })
})