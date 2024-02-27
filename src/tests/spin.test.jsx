import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {Spin} from '../components/Spin/Spin';

describe('Spin component', () => {
  const spin = (
    <Spin tip="Loading"/>
  );

  it('Spin content text', () => {
    const { baseElement } = render(spin);
    expect(baseElement).toHaveTextContent("Loading");
  });
});