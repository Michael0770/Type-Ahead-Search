
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TypeAheadSearch from './TypeAheadSearch';

test('renders input and updates results based on user input', async () => {
  render(<TypeAheadSearch />);

  const input = screen.getByPlaceholderText(/search/i);
  fireEvent.change(input, { target: { value: 'Alice' } });

  const resultItem = await screen.findByText(/Alice Johnson/i);
  expect(resultItem).toBeInTheDocument();
});

test('renders no results when query is too short', () => {
  render(<TypeAheadSearch />);

  const input = screen.getByPlaceholderText(/search/i);
  fireEvent.change(input, { target: { value: 'Al' } });

  const resultItem = screen.queryByText(/Alice Johnson/i);
  expect(resultItem).not.toBeInTheDocument();
});
