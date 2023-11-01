import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('renders without crashing', () => {
  render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
});

test('renders correct html with dummy type and value props', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
  const item = getByText('test');
  expect(item).toBeInTheDocument();
  expect(item.parentElement).toHaveAttribute('data-notification-type', 'default');
  expect(item.parentElement).toHaveProperty('innerHTML', '<u>test</u>');
});

test('renders correct html with dummy html prop', () => {
  const { getByText } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} value="test" />);
  const item = getByText('test');
  expect(item).toBeInTheDocument();
  expect(item.parentElement).toHaveAttribute('data-notification-type', 'default');
  expect(item.parentElement).toHaveProperty('innerHTML', '<u>test</u>');
});

