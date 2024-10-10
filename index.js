const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// routes
app.get("/hello", (req, res) => {
  res.send("Task Management API.");
});

app.use("/api/v1/tasks", tasks);

// listener
const port = 4000;
app.listen(port, console.log(`The server is running on port ${port}...`));
