require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  try {
    // Your code here
    console.log("Inside try block");
    res.status(200).send("Success");
  } catch (error) {
    // Handle any errors
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Code to execute regardless of success or failure
    console.log("Inside finally block");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
