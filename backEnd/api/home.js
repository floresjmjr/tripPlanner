const router = require('express').Router();


router.get('/home', (req, res)=>{
  res.send('Home page')
})


module.exports = router;