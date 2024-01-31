/* eslint-disable no-undef */
import SpaceAgeCalculator from "../src/js/person.js";

describe("SpaceAgeCalculator", () => {

    test("should create a person with past, current, and future age", () => {
        const person = new SpaceAgeCalculator(1, 30, 80);
        expect(person.pastAge).toEqual(1);
        expect(person.currentAge).toEqual(30);
        expect(person.futureAge).toEqual(80);
    });

    test("should calculate earth years elapsed & remaining", () => {
        const person = new SpaceAgeCalculator(1, 30, 80);
        expect(person.calculateEarthAge()).toEqual([29, 50]);
    });

    test("should calculate elapsed years, current age, and remaining years for Mercury", () => {
        const person = new SpaceAgeCalculator(1, 30, 80);
        expect(person.calculateMercuryAge()).toEqual([120.83, 125.00, 208.33]);
    });
});