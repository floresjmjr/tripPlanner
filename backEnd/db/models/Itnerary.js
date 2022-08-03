const db = require('../configuration');
const {Model, DataTypes} = require('sequelize');

class Itnerary extends Model {}

Itnerary.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Itnerary;

