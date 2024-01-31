export default class SpaceAgeCalculator {

    constructor(pastAge, currentAge, futureAge) {
        this.pastAge = pastAge;
        this.currentAge = currentAge;
        this.futureAge = futureAge;
    }

    calculateEarthAge() {
        const elapsedEarthYears = this.currentAge - this.pastAge;
        const remainingEarthYears = this.futureAge - this.currentAge;
        const earthValues = [elapsedEarthYears, remainingEarthYears];
        return earthValues;
    }
}