import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Rate from './Rate';

describe('Rate component', () => {
  const rate = (
    <Rate color="#f50" text="#f50" />
  );

  it('Snapshot rate', () => {
    const { baseElement } = render(rate);
    expect(baseElement).toMatchSnapshot();
  });

});