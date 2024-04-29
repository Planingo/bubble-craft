
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Switch } from '../components/Switch/Switch';

describe('Switch component', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();
  const swi = (<Switch onChange={onChange} onClick={onClick} />);

  it('should render given children', () => {
    render(swi);
    expect(screen.getByLabelText('switch')).toBeInTheDocument();
  });

  it('clicks on Switch', () => {
    render(swi);
    const switchChance = screen.getByLabelText('switch');
    fireEvent.click(switchChance);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('clicks on Switch', () => {
    render(swi);
    const switchClick = screen.getByLabelText('switch');
    fireEvent.click(switchClick);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});