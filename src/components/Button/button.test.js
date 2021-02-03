import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {Button} from './Button';

describe('Button component', () => {
  const textContent = 'LOGIN';
  const onClick = jest.fn();

  const button = (
    <Button onClick={e => onClick()} label='test' >{textContent}</Button>
  );

  it('Snapshot button', () => {
    const { baseElement } = render(button);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render given children', () => {
    render(button);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it('clicks on button', () => {
    render(button);
    const buttonClick = screen.getByRole('button');
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});