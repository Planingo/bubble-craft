import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {Spin} from './Spin';

describe('Spin component', () => {
  const spin = (
    <Spin />
  );

  it('Snapshot spin', () => {
    const { baseElement } = render(spin);
    expect(baseElement).toMatchSnapshot();
  });
});