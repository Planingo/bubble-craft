import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {RadioGroup} from './RadioGroup';

describe('RadioGroup component', () => {
  const options = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
  ]
  const radioGroup = (
    <RadioGroup options={options}/>
  );

  it('Snapshot RadioGroup', () => {
    const { baseElement } = render(radioGroup);
    expect(baseElement).toHaveTextContent("Apple");
  });
});