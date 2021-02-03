import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {Switch} from './Switch';

describe('Switch component', () => {
  const swi = (<Switch/>);

  it('Snapshot button', () => {
    const { baseElement } = render(swi);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render given children', () => {
    render(swi);
    expect(screen.getByLabelText('switch')).toBeInTheDocument();
  });
});