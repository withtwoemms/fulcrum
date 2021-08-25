import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('renders Content title', () => {
  const { getAllByText, debug } = render(<App />);
  const linkElement = getAllByText('Here\'s a blog post title');
  expect(linkElement[0]).toBeInTheDocument();
});
