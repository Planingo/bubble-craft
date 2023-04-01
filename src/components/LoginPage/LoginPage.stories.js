import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from '../../translation/IntlProvider'
import { LoginPage } from './LoginPage';

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
