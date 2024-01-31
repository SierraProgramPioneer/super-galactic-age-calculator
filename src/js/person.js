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

    calculateMercuryAge() {
        const currentMercuryAge = parseFloat((this.currentAge / .24).toFixed(2));
        const elapsedMercuryYears = parseFloat(((this.currentAge - this.pastAge) / .24).toFixed(2));
        const remainingMercuryYears = parseFloat(((this.futureAge - this.currentAge) / .24).toFixed(2));
        const mercuryValues = [elapsedMercuryYears, currentMercuryAge, remainingMercuryYears];
        return mercuryValues;
    }


}