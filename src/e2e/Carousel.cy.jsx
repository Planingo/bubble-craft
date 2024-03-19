import React from 'react'
import { Carousel } from '../components/Carousel/Carousel'

describe('<Carousel />', () => {
  it('renders', () => {
    cy.mount(<Carousel datas={[
      <div><h3 style={{background: '#364d79', color: '#fff', height: '160px', lineHeight: '160px', margin: 0, textAlign: 'center'}}>1</h3></div>,
      <div><h3 style={{background: '#364d79', color: '#fff', height: '160px', lineHeight: '160px', margin: 0, textAlign: 'center'}}>2</h3></div>,
      <div><h3 style={{background: '#364d79', color: '#fff', height: '160px', lineHeight: '160px', margin: 0, textAlign: 'center'}}>3</h3></div>,
      <div><h3 style={{background: '#364d79', color: '#fff', height: '160px', lineHeight: '160px', margin: 0, textAlign: 'center'}}>4</h3></div>
    ]}
  />)
  })
})