import React from 'react'
import { Header } from '../components/Header/Header'
import { IntlProvider } from '../translation/IntlProvider'
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider>
      <BrowserRouter>
        <Header 
          placeholder="Rechercher"
          isRefinementList={true}
          refinementList={null}
          refinementDetails={null}/>
      </BrowserRouter>
    </IntlProvider>)
  })
})