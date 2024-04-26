import { CheckboxGroup } from '../components/Checkbox/CheckboxGroups/CheckboxGroup';


const meta = {
  title: 'Atomes/CheckboxGroup',
  component: CheckboxGroup,
};

export default meta;

export const Playground = {
  args: {
    value: ['Apple'],
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
