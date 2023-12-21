import { fireEvent, render, screen } from "@testing-library/react";
import Pokemon from ".";

describe("POKEMON", () => {
  beforeEach(() => {
    render(<Pokemon />);
  });

  it("should render", () => {
    render(<Pokemon />);
  });

  it("Next selection should work", () => {
    const nextButton = screen.getByTestId("next");
    fireEvent.click(nextButton);
    expect(screen.getByTestId("name").textContent).toBe("B XXX");
  });

  it("Previous selection should work", () => {
    const previousButton = screen.getByTestId("previous");
    fireEvent.click(previousButton);
    expect(screen.getByTestId("name").textContent).toBe("F MMEEE");
  });

  it("Dropdown should work too :)", () => {
    const selectionDropdown = screen.getByTestId("selection");
    fireEvent.change(selectionDropdown, { target: { value: "DESTINATOO" } });
    expect(screen.getByTestId("name").textContent).toBe("DESTINATOO");
  });
});
