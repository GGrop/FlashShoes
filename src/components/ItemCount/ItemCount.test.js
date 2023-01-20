import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, prettyDOM, render } from '@testing-library/react';
import ItemCount from "./ItemCount";

test('render content', () => {
  const props = {
    init: 0,
    stock: 20,
  };

  const component = render(<ItemCount props={props} />);
  component.getByText('Añadir al carrito');
});

test('clicking the button', () => {
  const props = {
    init: 0,
    stock: 20,
  };

  const component = render(<ItemCount
    props={props}
    onAdd={() => {
      console.log("hole");
    }}
  />);

  const button = component.getByText('-');
  console.log(prettyDOM(button));
  fireEvent.click(button);
});
