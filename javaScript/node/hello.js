const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("What is your name? ", (name) => {
  console.log(`Welcome ${name}`);

  readline.question("Whate is your age :?", (age) => {
    if (age < 16) {
      console.log("you're not allowed to drive in iowa");
    } else {
      console.log("you are allowed to get a drivers license in iowa");
    }
    readline.close();
  });
});
