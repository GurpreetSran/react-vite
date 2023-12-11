import { render, fireEvent } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import Assignment from "./assignment-1";

describe("Selection", () => {
  it("should select Australia", () => {
    const { getByTestId } = render(<Assignment />);

    const countrySelectionBox = getByTestId("change-country");
    expect(countrySelectionBox).toHaveValue("IN");

    fireEvent.change(countrySelectionBox, { target: { value: "AUS" } });

    const citySelectionBox = getByTestId("change-city");
    expect(citySelectionBox).toHaveValue("Sydney");
  });
});
