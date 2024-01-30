import "jest";
import AgeCalculator from "../src/js/AgeCalculator.js";

describe("AgeCalculator", () => {

  test("Should create a human with past, current, and future age", () => {
    const human = new AgeCalculator(1, 30, 80);
    expect(human.pastAge).toEqual(1);
    expect(human.currentAge).toEqual(30);
    expect(human.futureAge).toEqual(80);
  });
});