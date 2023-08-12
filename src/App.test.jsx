import { render, screen } from "@testing-library/react";
import App from "./App";
import PropTypes from "prop-types";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
