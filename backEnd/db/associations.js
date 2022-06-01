const db = require('./configuration')
const User = require('./models/User')

db.sync({force: true})

module.exports = { db, User };