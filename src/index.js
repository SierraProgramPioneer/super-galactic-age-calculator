import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import SpaceAgeCalculator from "./js/person";



// Get Age

// Update User Interface
function calculateSpaceAges(human) {
    const earthResults = human.calculateEarthAge();
    console.log(earthResults);
    const mercuryResults = human.calculateMercuryAge();
    console.log(mercuryResults);
    const venusResults = human.calculateVenusAge();
    console.log(venusResults);
    const marsResults = human.calculateMarsAge();
    console.log(marsResults);
    const jupiterResults = human.calculateJupiterAge();
    console.log(jupiterResults);
}


// Handle Form Submission
function handleFormSubmission(event) {
    event.preventDefault();
    const pastEarthAge = document.getElementById("pastEarthAge").value;
    const currentEarthAge = document.getElementById("currentEarthAge").value;
    const futureEarthAge = document.getElementById("futureEarthAge").value;
    const human = new SpaceAgeCalculator(pastEarthAge, currentEarthAge, futureEarthAge);
    calculateSpaceAges(human);
}


function submitButton() {
    const submitButton = document.querySelector("form");
    submitButton.addEventListener("submit", handleFormSubmission);
}


window.onload = submitButton;