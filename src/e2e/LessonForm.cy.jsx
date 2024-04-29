import React from 'react'
import { LessonForm } from '../components/AddItem/LessonForm'

describe('<LessonForm />', () => {
  it('renders', () => {
    cy.mount(<LessonForm onSubmit={console.log}/>)
  })
})