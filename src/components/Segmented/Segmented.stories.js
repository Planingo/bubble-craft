import React from 'react';

import { Segmented } from './Segmented';

export default {
  title: 'Organismes/Segmented',
  component: Segmented,
};

const SegmentedGlobal = (args) => <Segmented {...args} />;

export const Default = SegmentedGlobal.bind({});

Default.args = {
    options: ['Quotidient', 'Hebdomadaire', 'Mensuel', 'Trimestriel', 'Annuel']
};