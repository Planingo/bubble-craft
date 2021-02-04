import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {CheckboxGroup} from './CheckboxGroup';

describe('CheckboxGroup component', () => {
  const checkboxGroup = (
    <CheckboxGroup />
  );

  it('Snapshot CheckboxGroup', () => {
    const { baseElement } = render(checkboxGroup);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render given children', () => {
    render(checkboxGroup);
    expect(screen.getByRole('checkbox-group')).toBeInTheDocument();
  });
});