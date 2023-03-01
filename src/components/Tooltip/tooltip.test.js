import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import {Tooltip} from './Tooltip';

describe('Tooltip component', () => {
  const props = {
    children: <p>Minerva McGonagall</p>,
    title: <p data-testid="tooltip">C'est le prénom et le nom</p>,
  };

  const tooltip = (
    <Tooltip {...props} />
  );
});