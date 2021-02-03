import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {Badge} from './Badge';

describe('Badge component', () => {
  const textContent = 'LOGIN';

  const badge = (
    <Badge >{textContent}</Badge>
  );

  it('Snapshot button', () => {
    const { baseElement } = render(badge);
    expect(baseElement).toMatchSnapshot();
  });
});