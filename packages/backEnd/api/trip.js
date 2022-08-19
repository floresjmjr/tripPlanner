const router = require('express').Router();
const User = require('../db/models/User')
const Itinerary = require('../db/models/Itinerary')

router.post('/plan', async (req, res)=> {
  console.log(req.body)
  const itinerary_obj = {}
  location = req.body.location
  startDate = req.body.startDate
  endDate = req.body.endDate
  if(location) itinerary_obj['location'] = location
  if(startDate) itinerary_obj['startDate'] = startDate
  if(endDate) itinerary_obj['endDate'] = endDate
  try {
    const user = await User.findOne()
    console.log('user')
    try {
      const itinerary_instance = await Itinerary.create(itinerary_obj)
      console.log('itinerary_instance', itinerary_instance)
      try {
        const result = await user.addItinerary(itinerary_instance)
        console.log('result', result)
        return send(result)
      } catch (error) {
        return res.send(error)
      }
    } catch (error) {
      console.log('error', error)
      return res.send(error)
    }

  } catch (error) {}
})

router.get('/all', async(req, res)=> {
  const user = await User.findOne()
  console.log('all', user)
  try {
    const all_itineraries = await user.getItineraries()
    console.log('itinaraires', all_itineraries)
    return res.send(all_itineraries)
  } catch (error) {
    console.log('error', error)
  }
})

module.exports = router