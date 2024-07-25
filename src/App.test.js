import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('increments counter on button click', () => {
  render(<App />);
  
  // Find the button element with the text "Increment"
  const buttonElement = screen.getByText(/increment/i);
  
  // Simulate a click event on the button
  fireEvent.click(buttonElement);
  
  // Check if the counter element has the expected text
  const counterElement = screen.getByText(/count: 1/i);
  
  // Verify if the counter element is in the document
  expect(counterElement).toBeInTheDocument();
});
