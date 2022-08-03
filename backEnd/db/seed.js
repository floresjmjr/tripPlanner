const { db, User } = require('./associations')


const seedUsers = async()=> {
  user = {"firstName": "Jorge", "lastName": "Flores", "email": "jorge@wanderbranch.com", "password": "123456"}
  await User.create(user)
}

const seed = async()=> {
  await db.sync({force: true})
  console.log('Database schema applied.');
  await seedUsers()
  console.log('Database seeded.')
}

seed();