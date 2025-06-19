document.getElementById("start-button").addEventListener("click", function () {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Variable to store the user's guess
  let guess = 0;
  // Variable to track if the player guessed correctly
  let guessedCorrectly = false;

  // Give the player 5 attempts using a for loop
  for (let attempts = 1; attempts <= 5; attempts++) {
    // Ask the user for a guess
    let input = prompt("Enter a number between 1 and 10:");
    // Convert the input to a number
    guess = Number(input);

    // Check if the guess is correct
    if (guess === secretNumber) {
      // Player guessed correctly
      guessedCorrectly = true;
      // Show a congratulatory message with the number of attempts
      document.getElementById(
        "message"
      ).textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      // Exit the loop early
      break;
    } else if (guess < secretNumber) {
      // Give a hint if the guess is too low
      alert("Too low! Try again.");
    } else if (guess > secretNumber) {
      // Give a hint if the guess is too high
      alert("Too high! Try again.");
    }
    // If guess is wrong, the loop continues
  }

  // If the player did not guess correctly after 5 attempts
  if (!guessedCorrectly) {
    document.getElementById(
      "message"
    ).textContent = `❌ Game over! The number was ${secretNumber}.`;
  }
});
