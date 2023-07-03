import React from 'react';

import { Navigation, IntlProvider, Roles } from '@planingo/design-system'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Templates/Navigation',
  component: Navigation,
  args: {
    roles: [Roles.PLANING_KEEPER]
  }
};

const NavigationGlobal = (args) => 
<IntlProvider locale='fr'>
  <BrowserRouter>
    <Navigation {...args} />
  </BrowserRouter>
</IntlProvider>;

export const Default = NavigationGlobal.bind({});

Default.argTypes = {
  roles: {
    type: 'multi-select',
    options: [
      Roles.SUPER_ADMIN,
      Roles.PLANING_KEEPER,
      Roles.STUDENT,
      Roles.PROFESSOR,
      Roles.COMPANY
    ]
  }
};
