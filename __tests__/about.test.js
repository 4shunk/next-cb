import { render, screen } from "@testing-library/react";
import AboutPage from "../pages/about";

describe("AboutPage", () => {
  it("About us", () => {
    render(<AboutPage />);
    expect(screen.getByText("About us")).toBeInTheDocument();
  });
});
