const express = require('express');
const app = express();
require('dotenv').config()
require('./db/associations')

//Parses incoming requests (eg POST body)
app.use(express.urlencoded({extended: true}))

app.use('/', require('./api'))


app.listen(process.env.PORT || 8080, ()=> {
  console.log(`A server session has been created on port ${port}. \nAccessible via http://localhost:${port}`)
});