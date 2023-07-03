import React from 'react';

import { Popconfirm } from './Popconfirm';

export default {
  title: 'Molécules/Popconfirm',
  component: Popconfirm,
};

const PopconfirmGlobal = (args) => <Popconfirm {...args} />;

export const Default = PopconfirmGlobal.bind({});

Default.args = {
  title: "Supprimer la tâche",
  description: "Es-tu sûr de vouloir supprimer cette tâche ?",
  okText: "Oui",
  cancelText: "Non",
  children: <a href="/">Delete</a>,
  onConfirm: (e) => console.log(e),
  onCancel: (e) => console.log(e) 
};