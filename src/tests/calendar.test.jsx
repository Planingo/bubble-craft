import { render } from '@testing-library/react';
import React from 'react';
import { Calendar } from '../components';
import dayjs from 'dayjs';

describe('Calendar component', () => {
  const calendar = (
    <Calendar value={dayjs('2023-02-27', 'YYYY-MM-DD')} />
  );

  it('Calendar content text', () => {
    const { baseElement } = render(calendar);
    expect(baseElement).toHaveTextContent("Month");
  });

});