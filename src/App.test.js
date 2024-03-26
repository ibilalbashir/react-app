import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NY Times', () => {
  render(<App />);
  const linkElement = screen.getByText(/NY Times/i);
  expect(linkElement).toBeInTheDocument();
});
