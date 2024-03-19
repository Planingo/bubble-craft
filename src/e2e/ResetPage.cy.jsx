import React from 'react'
import { ResetPage } from '../components/LoginPage/ResetPage'
import { IntlProvider } from '../translation/IntlProvider'
import { BrowserRouter } from 'react-router-dom'

describe('<ResetPage />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider>
      <BrowserRouter>
        <ResetPage
          onSubmit={console.log}
          loading={false}
        />
      </BrowserRouter>
    </IntlProvider>)
  })
})