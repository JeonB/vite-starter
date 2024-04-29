import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "../summary/SummaryForm";
describe("SummaryForm component", () => {
  test("renders", () => {
    render(<SummaryForm />);
  });

  test("check initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test("check checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
  });

  test("check checkbox disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});

describe("SummaryForm component", () => {
  test("renders", () => {
    render(<SummaryForm />);
  });

  test("check initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test("check checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
  });

  test("check checkbox disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test("check checkbox toggles state", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test("check button click toggles state", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    fireEvent.click(checkbox);
    fireEvent.click(confirmButton);
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});
