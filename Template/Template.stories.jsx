

import { Template } from './Template';

export default {
  title: 'Granularity/Template',
  component: Template,
};

const TemplateGlobal = (args) => <Template {...args} />;

export const Default = TemplateGlobal.bind({});


Default.args = {
    children: "Template"
};