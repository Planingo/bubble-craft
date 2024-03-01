import { render, screen } from '@testing-library/react';
import React from 'react';
import {Radio} from '../components/Radio/Radio';

describe('Radio component', () => {
  const textContent = 'radio';
  const radio = (<Radio>{textContent}</Radio>);

  it('should render given children', () => {
    render(radio);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it('should render given children', () => {
    render(radio);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
});