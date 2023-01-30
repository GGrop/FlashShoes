import React from "react";
import '@testing-library/jest-dom';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import ItemCount from "./ItemCount";

beforeEach(() => {
  render(<ItemCount />);
});

test('should render all content', async () => {
  const btnMinus = screen.getByText('-');
  expect(btnMinus).toBeInTheDocument();
  const spanCount = screen.queryByTestId('test-span');
  const spanValue = spanCount.getAttribute('value');
  // expect(spanCount).toBeInTheDocument();
  console.log(spanValue);
  screen.debug(spanCount);
  const btnPlus = screen.getByText('+');
  expect(btnPlus).toBeInTheDocument();
  const btnAddToCart = screen.getByText('Añadir al carrito');
  expect(btnAddToCart).toBeInTheDocument();
});
test('should addToCount', () => {
  const btnPlus = screen.getByRole('button', { name: '+' });
  fireEvent.click(btnPlus);
});

// test('render content', () => {
//   const props = {
//     init: 0,
//     stock: 20,
//   };

//   const component = render(<ItemCount props={props} />);
//   component.getByText('Añadir al carrito');
// });

// test('clicking the button', () => {
//   const props = {
//     init: 0,
//     stock: 20,
//   };

//   const component = render(<ItemCount
//     props={props}
//     onAdd={() => { console.log('asd'); }}
//   />);

//   const button = component.getByText('+');
//   // console.log(prettyDOM(button));
//   fireEvent.click(button);
// });
