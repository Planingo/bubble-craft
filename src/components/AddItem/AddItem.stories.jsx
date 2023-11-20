import React from 'react';
import { AddItem } from '@planingo/design-system'

export default {
  title: 'Templates/AddItem',
  component: AddItem,
};

const AddItemGlobal = (args) => <AddItem {...args} />;

export const Default = AddItemGlobal.bind({});

Default.args = {
    title: "AddItem",
    cta: "Ajouter"
};