

import { RadioGroup } from '../components/Radio/RadioGroups/RadioGroup';

const meta = {
  title: 'Molécules/RadioGroup',
  component: RadioGroup,
};

export default meta;

export const Playground = {
  args: {
    value: 'Apple',
    buttonStyle: 'outline',
    disabled: false,
    optionType: 'button',
    size: 'large',
    options: [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ],
    onChange: function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }
  },
};
