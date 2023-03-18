import React from 'react';

import { Header } from './Header';

export default {
  title: 'Templates/Header',
  component: Header,
};

const HeaderGlobal = (args) => <Header {...args} />;

export const Default = HeaderGlobal.bind({});

Default.args = {
  placeholder: "Rechercher"
};