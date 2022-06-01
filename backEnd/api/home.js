const router = require('express').Router();

const html = `
<section class='tabs'>
<h1>Overview</h1>
<h1><b>Itinerary</b></h1>
<h1>Explore</h1>
<h1>$</h1>
</section>
<div>Tue, 6/14</div>
<div>Tue, Jun 14th symbol 3 hrs 51mins, 111 mi</div>
<div>Start at 1:30pm</div>
<section>
<h3>Parque de estacionamento Levada 25 Fontes</h3>
<div>symbol 19 mins drive * 8.9 mi arrow <a href=''>Directions</a>
</section>
<section>
  <h3>Anjos Waterfall</h3>
  <div>symbol 1 mins drive * 0.54 mi arrow <a href=''>Directions</a>
</section>`

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