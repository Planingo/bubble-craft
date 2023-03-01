import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Badge from './Badge';

describe('Badge component', () => {
  const badge = (
    <Badge color="#f50" text="#f50" onClick={console.log}/>
  );

  it('Snapshot badge', () => {
    const { baseElement } = render(badge);
    expect(baseElement).toHaveTextContent("#f50");
  });

});