import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from '../components/App';

test('renders testing link', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('appTestID');
  expect(app).toBeInTheDocument();
});
