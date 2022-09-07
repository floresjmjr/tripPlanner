const express = require('express');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8080;
require('dotenv').config()
require('./db/associations')

// Cors configuration
const whitelist = ["http://localhost:3000", "http://tripplanner-client.herokuapp.com", "http://wanderbranch.herokuapp.com", "https://tripplanner-client.herokuapp.com", "https://wanderbranch.herokuapp.com"]

const cors_options = {
  origin: (origin, callback)=> {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(cors_options))

// Parses incoming requests (eg POST body)
app.use(express.urlencoded({extended: true}))

// API endpoints directory
app.use('/', require('./api'))

//When no method and/or path matches, returns 404
app.use((req, res) => {
  res
    .status(404)
    .send(
      `Sorry, the "${req.method}" method to the path "${req.path}" is not a valid, please change the either the request, path or both.`
    );
  //Ideally a cool 404 page would be rendered
});
//Error handling function
app.use((err, req, res, next) => {
  console.error(`Start of Error:\n ${err} \nEnd of Error`);
  res.status(500).send("Server error, please try again or at some other time.");
  //Ideally a cool 500 page would be rendered
});


// Connect Server
app.listen(port, ()=> {
  console.log(`A server session has been created on port ${port}. \nAccessible via http://localhost:${port}`)
});