export default class SpaceAgeCalculator {

    constructor(pastEarthAge, currentEarthAge, futureEarthAge) {
        this.pastEarthAge = pastEarthAge;
        this.currentEarthAge = currentEarthAge;
        this.futureEarthAge = futureEarthAge;
    }

    calculateEarthAge() {
        const elapsedEarthYears = this.currentEarthAge - this.pastEarthAge;
        const remainingEarthYears = this.futureEarthAge - this.currentEarthAge;
        const earthValues = [elapsedEarthYears, remainingEarthYears];
        return earthValues;
    }

    calculateMercuryAge() {
        const currentMercuryAge = parseFloat((this.currentEarthAge / .24).toFixed(2));
        const elapsedMercuryYears = parseFloat(((this.currentEarthAge - this.pastEarthAge) / .24).toFixed(2));
        const remainingMercuryYears = parseFloat(((this.futureEarthAge - this.currentEarthAge) / .24).toFixed(2));
        const mercuryValues = [elapsedMercuryYears, currentMercuryAge, remainingMercuryYears];
        return mercuryValues;
    }

    calculateVenusAge() {
        const currentVenusAge = parseFloat((this.currentEarthAge / .62).toFixed(2));
        const elapsedVenusYears = parseFloat(((this.currentEarthAge - this.pastEarthAge) / .62).toFixed(2));
        const remainingVenusYears = parseFloat(((this.futureEarthAge - this.currentEarthAge) / .62).toFixed(2));
        const venusValues = [elapsedVenusYears, currentVenusAge, remainingVenusYears];
        return venusValues;
    }

    calculateMarsAge() {
        const currentMarsAge = parseFloat((this.currentEarthAge / 1.88).toFixed(2));
        const elapsedMarsYears = parseFloat(((this.currentEarthAge - this.pastEarthAge) / 1.88).toFixed(2));
        const remainingMarsYears = parseFloat(((this.futureEarthAge - this.currentEarthAge) / 1.88).toFixed(2));
        const marsValues = [elapsedMarsYears, currentMarsAge, remainingMarsYears];
        return marsValues;
    }

    calculateJupiterAge() {
        const currentJupiterAge = parseFloat((this.currentEarthAge / 11.86).toFixed(2));
        const elapsedJupiterYears = parseFloat(((this.currentEarthAge - this.pastEarthAge) / 11.86).toFixed(2));
        const remainingJupiterYears = parseFloat(((this.futureEarthAge - this.currentEarthAge) / 11.86).toFixed(2));
        const jupiterValues = [elapsedJupiterYears, currentJupiterAge, remainingJupiterYears];
        return jupiterValues;
    }

}