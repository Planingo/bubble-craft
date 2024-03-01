import { render } from '@testing-library/react';
import React from 'react';
import { Avatar } from '../components';

describe('Avatar component', () => {
  const avatar = (
    <Avatar>User</Avatar>
  );

  it('Alert content text', () => {
    const { baseElement } = render(avatar);
    expect(baseElement).toHaveTextContent("User");
  });
});
