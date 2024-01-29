const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Books extends Model { }

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recommendation: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
        // true for thumbs up, false for thumbs down (this can be changed to 0/10 if time allows)
    },
    review: {
      type: DataTypes.STRING,
      // allowNull: false
    }, // remove review
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  }
);

module.exports = Books;
