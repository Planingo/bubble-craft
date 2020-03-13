import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './index';

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
    const { getByText } = render(button);
    expect(getByText(textContent)).toBeInTheDocument();
  });

  it('clicks on button', () => {
    const { getByRole } = render(button);
    const buttonClick = getByRole('button');
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});