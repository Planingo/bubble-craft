import React from 'react'
import { Popconfirm } from '../components/Popconfirm/Popconfirm'

describe('<Popconfirm />', () => {
  it('renders', () => {
    cy.mount(<Popconfirm />)
  })
})