const express = require("express"); //create an express application

const app = express(); // initialize our express application

function delay(duration) {
  const startTime = Date.now(); //current date and time in milliseconds

  while (Date.now() - startTime < duration) {
    //event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Testing testing -> ${process.pid}`);
});

app.get("/timer", (re, res) => {
  delay(9000); //duration in milliseconds
  res.send(`Ding ding->  ${process.pid}`);
});

console.log("Running server.js");
console.log("Worker has started");
app.listen(3000);
