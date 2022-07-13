const router = require('express').Router();



router.get('/home', (req, res)=>{
  console.log('test')
  res.send(html)
})

//By Day - Title
// Lodging (link/price)  //Date  //Day  //Location  //Day breakdown
                         //links
                         //Notes


//Date     //If flight show flight info (also if rental that day)

//Item (place or thing to visit) 
////Drive time, distance  (estimate what time it will be)
//--Check in to 'update' 
//--if closing alert
////Clicking on item display notes, place info, etc


module.exports = router;