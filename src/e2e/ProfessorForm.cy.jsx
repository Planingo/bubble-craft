import React from 'react'
import { ProfessorForm } from '../components/AddItem/ProfessorForm'

describe('<ProfessorForm />', () => {
  it('renders', () => {
    cy.mount(<ProfessorForm onSubmit={console.log}/>)
  })
})