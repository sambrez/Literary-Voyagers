// to be reformatted
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

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
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true,
      }
    },
    // description: {
    //   type: DataTypes.STRING,
    // }, for review.js
    // date_created: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // }, for reviews.js
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true,
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        notEmpty: true,
      }

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
