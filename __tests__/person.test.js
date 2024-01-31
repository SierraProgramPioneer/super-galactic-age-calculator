/* eslint-disable no-undef */
import SpaceAgeCalculator from "../src/js/person.js";

describe("SpaceAgeCalculator", () => {

    test("should create a person with past, current, and future age", () => {
        const person = new SpaceAgeCalculator(1, 30, 80);
        expect(person.pastAge).toEqual(1);
        expect(person.currentAge).toEqual(30);
        expect(person.futureAge).toEqual(80);
    });

    test("should calculate earth years since past age and earth years until future age", () => {
        const person = new SpaceAgeCalculator(1, 30, 80);
        expect(person.calculateEarthAge()).toEqual([29, 30]);
    });

});