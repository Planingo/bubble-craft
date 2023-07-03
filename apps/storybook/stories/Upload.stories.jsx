import React from 'react';

import { Upload } from '@planingo/design-system'

export default {
  title: 'Organismes/Upload',
  component: Upload,
};

const UploadGlobal = (args) => <Upload {...args} />;

export const Default = UploadGlobal.bind({});

Default.args = {
    children: "Upload"
};