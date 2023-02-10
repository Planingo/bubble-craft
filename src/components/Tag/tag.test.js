import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Tag from './Tag';

describe('Tag component', () => {
  const textContent = "C'est un super tag";
  const onClose = jest.fn();
  const tag = (
    <Tag onClose={e => onClose()} closable={true}>{textContent}</Tag>
  );

  it('Snapshot tag', () => {
    const { baseElement } = render(tag);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render given children', () => {
    render(tag);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it('clicks on button', () => {
    render(tag);
    const tagClick = screen.getByRole('img');
    fireEvent.click(tagClick);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});