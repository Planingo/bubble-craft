import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {Checkbox} from './Checkbox';

describe('Checkbox component', () => {

  const checkbox = (
    <Checkbox/>
  );

  it('Snapshot Checkbox', () => {
    const { baseElement } = render(checkbox);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render given children', () => {
    render(checkbox);
    expect(screen.getByLabelText('checkbox')).toBeInTheDocument();
  });
});