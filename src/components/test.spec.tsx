import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import Test from "./Test";

describe("Test", () => {
  it("should render", () => {
    render(<Test />);

    expect(screen.getByText("Test Component")).toBeInTheDocument();
  });
});
