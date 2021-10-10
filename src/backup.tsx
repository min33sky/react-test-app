import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('the counter starts at 0', () => {
//   render(<App />);
//   const counterElement = screen.getByTestId('counter');
//   expect(counterElement).toHaveTextContent('0');
// });

// test('minus button has correct text', () => {
//   render(<App />);
//   const minusButtonElement = screen.getByTestId('minusButton');
//   expect(minusButtonElement).toHaveTextContent('-');
// });

// test('plus button has correct text', () => {
//   render(<App />);
//   const plusButtonElement = screen.getByTestId('plusButton');
//   expect(plusButtonElement).toHaveTextContent('+');
// });

// test('when the minus button clicked, the count decresed', () => {
//   render(<App />);
//   const minusButtonElement = screen.getByTestId('minusButton');
//   const counterElement = screen.getByTestId('counter');
//   fireEvent.click(minusButtonElement);
//   expect(counterElement).toHaveTextContent('-1');
// });

// test('when the plus button clicked, the count increased', () => {
//   render(<App />);
//   const plusButtenElement = screen.getByTestId('plusButton');
//   const counterElement = screen.getByTestId('counter');
//   fireEvent.click(plusButtenElement);
//   expect(counterElement).toHaveTextContent('1');
// });

// test('on/off button has blue color', () => {
//   render(<App />);
//   const onOffButtonElement = screen.getByTestId('on/offButton');
//   expect(onOffButtonElement).toHaveStyle({ backgroundColor: 'blue' });
// });

// test('prevent the +/- button from being pressed when the on/off button is clicked', () => {
//   render(<App />);
//   const onOffButtonElement = screen.getByTestId('on/offButton');
//   const plusButtonElement = screen.getByTestId('plusButton');
//   // const minusButtonElement = screen.getByTestId('minusButton');

//   fireEvent.click(onOffButtonElement);

//   expect(plusButtonElement).toBeDisabled();
// });
