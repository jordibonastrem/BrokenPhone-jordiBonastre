import Action from "./Action";
import { render, screen } from "@testing-library/react";

describe("Given a Action component", () => {
  describe("When it receives a text and a function", () => {
    test("Then it should display a button", () => {
      const text = "delete";
      // const className = "delete";

      render(<Action text={text}></Action>);

      const expectedResult = screen.getByText(text);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
