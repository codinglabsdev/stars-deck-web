import React from 'react';
import { render } from '@testing-library/react';
import App from '~/App';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}));

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Coding Labs/i);
  expect(linkElement).toBeInTheDocument();
});
