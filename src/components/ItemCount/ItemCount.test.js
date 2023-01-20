import React from "react";
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ItemCount from "./ItemCount";

test('render content', () => {
  const component = render(<ItemCount />);
  console.log(component);
});
