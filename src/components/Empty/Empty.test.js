import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Empty from './Empty';

describe('Empty component', () => {
  const empty = (
    <Empty color="#f50" text="#f50" />
  );

  it('Snapshot empty', () => {
    const { baseElement } = render(empty);
    expect(baseElement).toMatchSnapshot();
  });

});