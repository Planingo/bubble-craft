import {CheckboxGroup} from '../components/Checkbox/CheckboxGroups/CheckboxGroup';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/CheckboxGroup',
  component: CheckboxGroup,
  decorators: [withTests({ results })],
  parameters: { jest: ['checkboxGroup.test.jsx'] }
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
