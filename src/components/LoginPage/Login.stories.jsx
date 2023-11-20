import React from 'react';

import { LoginPage } from './LoginPage';
import { IntlProvider } from '../../translation/IntlProvider'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  args: {
    onSubmit: () => console.log(),
    loading: false
  }
};

const LoginPageGlobal = (args) => 
<IntlProvider locale='fr'>
  <BrowserRouter>
    <LoginPage {...args} />
  </BrowserRouter>
</IntlProvider>;

export const Default = LoginPageGlobal.bind({});

Default.argTypes = {
};
