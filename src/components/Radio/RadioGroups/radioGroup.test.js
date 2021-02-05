import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {RadioGroup} from './RadioGroup';

describe('RadioGroup component', () => {
  const radioGroup = (
    <RadioGroup />
  );

  it('Snapshot RadioGroup', () => {
    const { baseElement } = render(radioGroup);
    expect(baseElement).toMatchSnapshot();
  });
});