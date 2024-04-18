import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("button starts with correct color", () => {
//   render(<App />);
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   expect(buttonElement).toHaveClass("red");
// });
// test("button starts with correct text", () => {});
// test("button has correct color after click", () => {});
// test("button has correct text after click", () => {});

test("checkbox flow", () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  // check initial conditions
  expect(checkboxElement).not.toBeChecked();

  expect(buttonElement).not.toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
