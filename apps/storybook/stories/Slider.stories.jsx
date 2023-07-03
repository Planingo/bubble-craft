import React from 'react';

import { Slider } from '@planingo/design-system'

export default {
  title: 'Atomes/Slider',
  component: Slider,
};

const SliderGlobal = (args) => <Slider {...args} />;

export const Default = SliderGlobal.bind({});

Default.args = {
    children: "Slider"
};