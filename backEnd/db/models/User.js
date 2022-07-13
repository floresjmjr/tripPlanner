const db = require('../configuration');
const {Model, DataTypes} = require('sequelize/types');

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        isAlpha: true,
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail:true,

      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = User;

