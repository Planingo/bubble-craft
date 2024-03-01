import { render } from '@testing-library/react';
import React from 'react';
import {Spin} from '../components/Spin/Spin';

describe('Spin component', () => {
  const spin = (
    <Spin tip={<p>Loading</p>} fullscreen={true}/>
  );

  it('Spin content text', () => {
    const { baseElement } = render(spin);
    expect(baseElement).toHaveTextContent("Loading");
  });
});