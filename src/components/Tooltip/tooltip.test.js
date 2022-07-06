import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import {Tooltip} from './Tooltip';

describe('Tooltip component', () => {
  const textContent = {
    children: "Minerva McGonagall",
    title: <p>C'est le prénom et le nom</p>,
  };

  const tooltip = (
    <Tooltip {...textContent} />
  );

  it('Snapshot tooltip', () => {
    const { baseElement } = render(tooltip);
    expect(baseElement).toMatchSnapshot();
  });
});