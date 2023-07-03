import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { LoginPage, IntlProvider } from '@planingo/design-system'

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  args: {
    onSubmit: () => console.log(),
    loading: false
  }
};

const LoginPageLogin = (args) => <IntlProvider>
    <BrowserRouter>
      <LoginPage {...args} />
    </BrowserRouter>
  </IntlProvider>;

export const Default = LoginPageLogin.bind({});

Default.args = {
};

Default.argTypes = {
};
