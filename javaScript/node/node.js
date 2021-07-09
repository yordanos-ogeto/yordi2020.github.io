const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
getNumber();
let sum = 0;
function getNumber() {
  readline.question(
    "Enter your number or type Stop to finish :",
    (inputData) => {
      if (inputData.toLowerCase() === "stop") {
        console.log("Total sum = " + sum);
        readline.close();
      } else {
        sum = sum + parseInt(inputData);
        getNumber();
      }
    }
  );
}
