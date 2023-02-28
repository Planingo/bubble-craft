import React, { useState } from 'react';

import { Drawer } from './Drawer';
import { Button } from '../Button/Button'

export default {
  title: 'Molécules/Drawer',
  component: Drawer,
};

const DrawerGlobal = (args) => <Drawer {...args} />

export const Default = DrawerGlobal.bind({});

Default.args = {
  title: "Basic Drawer",
  placement: "right",
  children: <>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </>,
  open: true
};