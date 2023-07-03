import React from 'react';

import { QRCode } from './QRCode';

export default {
  title: 'Atomes/QRCode',
  component: QRCode,
};

const QRCodeGlobal = (args) => <QRCode {...args} />;

export const Default = QRCodeGlobal.bind({});

Default.args = {
  value: "https://ant.design/"
};