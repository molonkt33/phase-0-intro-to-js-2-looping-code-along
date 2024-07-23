// index.js

// Function to generate thank you messages
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  // Function to count down and log each number
  function countDown(start) {
    while (start >= 0) {
      console.log(start);
      start--;
    }
  }
  