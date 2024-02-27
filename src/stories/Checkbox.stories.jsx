import {Checkbox} from '../components/Checkbox/Checkbox';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

const meta = {
  title: 'Atomes/Checkbox',
  component: Checkbox,
  decorators: [withTests({ results })],
};

export default meta;
meta.parameters = {
  jest: ['checkbox.test.jsx'],
};

export const Playground = {
  args: {
    autofocus: false,
    checked: false,
    disabled: false,
    defaultChecked: false,
    indeterminate: false,
    onChange: null,
    children: "Coucou",
  },
};
