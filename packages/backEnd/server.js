const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
require("dotenv").config();
require("./db/associations");

// Cors configuration
const whitelist = ["http://localhost:3000", "https://tripplanner-client.herokuapp.com"];

const cors_options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(cors_options));

// Parses incoming requests (eg POST body)
app.use(express.urlencoded({extended: true}));

// API endpoints directory
app.use("/", require("./api"));

// Connect Server
app.listen(port, () => {
  console.log(`A server session has been created on port ${port}. \nAccessible via http://localhost:${port}`);
});
