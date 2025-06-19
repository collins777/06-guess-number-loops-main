document.getElementById("start-button").addEventListener("click", function () {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Set attempts to 0
  let attempts = 0;
  // Variable to store the user's guess
  let guess = 0;

  // Keep asking the user until they guess the correct number
  while (guess !== secretNumber) {
    // Ask the user for a guess
    let input = prompt("Enter a number between 1 and 10:");
    // Convert the input to a number
    guess = Number(input);
    // Increase the number of attempts
    attempts++;

    // Give a hint if the guess is wrong
    if (guess < secretNumber) {
      alert("Too low! Try again.");
    } else if (guess > secretNumber) {
      alert("Too high! Try again.");
    }
    // If guess is correct, the loop will end
  }

  // Show a congratulatory message with the number of attempts
  document.getElementById(
    "message"
  ).textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt.`;
});
