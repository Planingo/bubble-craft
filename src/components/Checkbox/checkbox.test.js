import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {Checkbox} from './Checkbox';

describe('Checkbox component', () => {
  const onChange = jest.fn();
  const textContent = 'Coucou'
  const checkbox = (
    <Checkbox onChange={onChange}>{textContent}</Checkbox>
  );

  it('should render given children', () => {
    render(checkbox);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it('should render given children', () => {
    render(checkbox);
    expect(screen.getByLabelText('checkbox')).toBeInTheDocument();
  });

  it('clicks on checkbox', () => {
    render(checkbox);
    const checkboxClick = screen.getByLabelText('checkbox');
    fireEvent.click(checkboxClick);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});