import React from 'react';
import { AddItem } from './AddItem'

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