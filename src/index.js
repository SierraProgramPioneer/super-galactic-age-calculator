import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import SpaceAgeCalculator from "./js/person";

// Display Results

function displayResults(mercuryResults, venusResults, earthResults, marsResults, jupiterResults) {

    const mercuryElapsed = document.getElementById("mercuryElapsed");
    mercuryElapsed.textContent = " " + mercuryResults[0];
    const mercuryCurrent = document.getElementById("mercuryCurrent");
    mercuryCurrent.textContent = " " + mercuryResults[1];
    const mercuryRemaining = document.getElementById("mercuryRemaining");
    mercuryRemaining.textContent = " " + mercuryResults[2];

    const venusElapsed = document.getElementById("venusElapsed");
    venusElapsed.textContent = " " + venusResults[0];
    const venusCurrent = document.getElementById("venusCurrent");
    venusCurrent.textContent = " " + venusResults[1];
    const venusRemaining = document.getElementById("venusRemaining");
    venusRemaining.textContent = " " + venusResults[2];

    const earthElapsed = document.getElementById("earthElapsed");
    earthElapsed.textContent = " " + earthResults[0];
    const earthCurrent = document.getElementById("earthCurrent");
    earthCurrent.textContent = " " + earthResults[1];
    const earthRemaining = document.getElementById("earthRemaining");
    earthRemaining.textContent = " " + earthResults[2];

    const marsElapsed = document.getElementById("marsElapsed");
    marsElapsed.textContent = " " + marsResults[0];
    const marsCurrent = document.getElementById("marsCurrent");
    marsCurrent.textContent = " " + marsResults[1];
    const marsRemaining = document.getElementById("marsRemaining");
    marsRemaining.textContent = " " + marsResults[2];

    const jupiterElapsed = document.getElementById("jupiterElapsed");
    jupiterElapsed.textContent = " " + jupiterResults[0];
    const jupiterCurrent = document.getElementById("jupiterCurrent");
    jupiterCurrent.textContent = " " + jupiterResults[1];
    const jupiterRemaining = document.getElementById("jupiterRemaining");
    jupiterRemaining.textContent = " " + jupiterResults[2];
}

// Calculate Space Age
function calculateSpaceAges(human) {
    const mercuryResults = human.calculateMercuryAge();
    const venusResults = human.calculateVenusAge();
    const earthResults = human.calculateEarthAge();
    const marsResults = human.calculateMarsAge();
    const jupiterResults = human.calculateJupiterAge();
    displayResults(mercuryResults, venusResults, earthResults, marsResults, jupiterResults);
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