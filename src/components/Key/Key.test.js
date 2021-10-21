import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives a number", () => {
    test("Then it should display a button with the innerhtml of that number", () => {
      const key = {
        number: "2",
      };

      const expectedKey = "2";

      render(<Key number={key.number} onActionClick={() => {}}></Key>);

      const number = screen.getByText(expectedKey);

      expect(number).toBeInTheDocument();
    });
  });
});
