import { render, screen } from "@testing-library/react";
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
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
