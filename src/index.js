import "./css/styles.css";



// Get Age

// Update User Interface

// Handle Form Submission
function handleFormSubmission(event) {
    event.preventDefault();
    console.log("event");
}


window.addEventListener("load", function () {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("submit", handleFormSubmission);
});