const db = require('./configuration')
const User = require('./models/User')
const Flight = require('./models/Flight')
const Itnerary = require('./models/Itnerary')

User.hasMany(Itnerary)
Itnerary.belongsTo(User)
Itnerary.hasMany(Flight)
Flight.belongsTo(Itnerary)

module.exports = { db, User, Itnerary, Flight };