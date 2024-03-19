import React from 'react'
import { Pagination } from '../components/Pagination/Pagination'

describe('<Pagination />', () => {
  it('renders', () => {
    cy.mount(<Pagination />)
  })
})