import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Empty } from './Empty';

describe('Empty component', () => {
  const empty = (
    <Empty description="#f50" />
  );

  it('Empty contains text', () => {
    const { baseElement } = render(empty);
    expect(baseElement).toHaveTextContent("#f50");
  });

});