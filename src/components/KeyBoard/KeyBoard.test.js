import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import KeyBoard from "./KeyBoard";

describe("Given a KeyBoard component", () => {
  describe("When it receives an array of keys", () => {
    test("Then it should display the number of key components passed", () => {
      const arrayKeys = [
        { number: 0, actionOnclick: () => {} },
        { number: 1, actionOnclick: () => {} },
        { number: 2, actionOnclick: () => {} },
        { number: 3, actionOnclick: () => {} },
        { number: 4, actionOnclick: () => {} },
        { number: 5, actionOnclick: () => {} },
      ];

      const totalKeys = 6;

      render(<KeyBoard keyGroup={arrayKeys}></KeyBoard>);

      const totalKeysElement = screen.getAllByTestId("total-words").length;

      expect(totalKeysElement).toBe(totalKeys);
    });
  });
});
