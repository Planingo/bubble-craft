import React from 'react'
import { SignupPage } from '../components/LoginPage/SignupPage'
import { IntlProvider } from '../translation/IntlProvider'
import { BrowserRouter } from 'react-router-dom'

describe('<SignupPage />', () => {
  it('renders', () => {
    cy.mount(<IntlProvider>
      <BrowserRouter>
        <SignupPage
          onSubmit={console.log}
          loading={false}
        />
      </BrowserRouter>
    </IntlProvider>)
  })
})