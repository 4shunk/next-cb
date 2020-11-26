import { render, screen } from "@testing-library/react";
import IndexPage from "../pages/index";

describe("IndexPage", () => {
  it("Hello World.", () => {
    render(<IndexPage />);
    expect(screen.getByText("Hello World.")).toBeInTheDocument();
  });
  it("About", () => {
    render(<IndexPage />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
