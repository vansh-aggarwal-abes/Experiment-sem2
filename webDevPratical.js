function checkCharacter() {
    // Get the input value
    const input = document.getElementById("charInput").value;
    const resultDisplay = document.getElementById("resultDisplay");

    // Clear display if input is empty
    if (input === "") {
        resultDisplay.textContent = "Enter a letter to check...";
        return;
    }

    // Convert to lowercase to handle both upper and lower case cases easily
    const char = input.toLowerCase();

    // Check if the input is a valid letter using Regular Expression
    if (char >= "a" && char <= "z") {
        
        // Core Logic: If-Else Condition to check for vowels
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            resultDisplay.textContent = `"${input}" is a Vowel.`;
        } else {
            resultDisplay.textContent = `"${input}" is a Consonant.`;
        }

    } else {
        // Handle numbers or special characters
        resultDisplay.textContent = "Please enter a valid alphabetic letter.";
        resultDisplay.style.color = "#e74c3c"; // Red for errors
    }
}