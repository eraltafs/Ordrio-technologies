// Initialize the speech synthesis API
const synth = window.speechSynthesis;

// Create an initial SpeechSynthesisUtterance with an empty string
let utterance = new SpeechSynthesisUtterance("");

// Function to start speaking the entered text
function play() {
    // Get the text from the textarea
    let input = document.getElementById("text");
    let text = input.value;

    try {
        // Create a new SpeechSynthesisUtterance with the input text
        utterance = new SpeechSynthesisUtterance(text);

        // Speak the utterance
        synth.speak(utterance);

        // Update the button text to indicate that it's "Listening..."
        const listenButton = document.getElementById("listenButton");
        listenButton.textContent = "Listening...";

        // Define what happens when speech ends
        utterance.onend = function() {
            // Reset the button text to "Listen"
            const listenButton = document.getElementById("listenButton");
            listenButton.textContent = "Listen";
        };

        // Define what happens when speech is paused
        utterance.onpause = function() {
            // Reset the button text to "Listen"
            const listenButton = document.getElementById("listenButton");
            listenButton.textContent = "Listen";
        };
    } catch (error) {
        console.log(error);
    }
}

// Function to pause speech if it's currently speaking
function pause() {
    if (synth.speaking) {
        // Pause the speech
        synth.pause();

        // Reset the button text to "Listen"
        const listenButton = document.getElementById("listenButton");
        listenButton.textContent = "Listen";
    }
}
