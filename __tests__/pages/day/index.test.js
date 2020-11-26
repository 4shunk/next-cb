import { render, screen } from "@testing-library/react";
import DayPage from "../../../pages/day/index";

describe("DayPage", () => {
  it("Hello Day", () => {
    render(<DayPage />);
    expect(screen.getByText("Hello Day")).toBeInTheDocument();
  });
});
