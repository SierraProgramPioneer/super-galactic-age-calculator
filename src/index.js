import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import SpaceAgeCalculator from "./js/person";



// Get Age

// Update User Interface

// Handle Form Submission
function handleFormSubmission(event) {
    event.preventDefault();
    const human = new SpaceAgeCalculator;
    console.log(human);
}


function submitButton() {
    const submitButton = document.querySelector("form");
    submitButton.addEventListener("submit", handleFormSubmission);
}

window.onload = submitButton;