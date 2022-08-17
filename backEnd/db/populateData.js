const { db, User, Itinerary } = require('./associations')


const seedUsers = async()=> {
  user = {"firstName": "Jorge", "lastName": "Flores", "email": "jorge@wanderbranch.com", "password": "123456"}
  seq_user = await User.create(user)
  seq_itinerary = await Itinerary.create({'location': 'Japan'})
  await seq_user.addItinerary(seq_itinerary)
}

const seed = async()=> {
  await db.sync({force: true})
  console.log('Database schema applied.');
  await seedUsers()
  console.log('Database seeded.')
}

seed();