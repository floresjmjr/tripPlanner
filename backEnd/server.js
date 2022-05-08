const express = require('express');
const app = express();
const port = 3000;




app.listen(port, ()=> {
  console.log(`A server session has been created on port: ${port}`)
});