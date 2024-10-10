const express = require("express");
const app = express();

// routes
app.get("/hello", (req, res) => {
  res.send("Task Management API.");
});




const port = 4000;
app.listen(port, console.log(`The server is running on port ${port}...`));
