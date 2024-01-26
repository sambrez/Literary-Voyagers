const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');


class Reviews extends Model {}

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reviewTitle: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }, 
    recommendation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
        // true for thumbs up, false for thumbs down (this can be changed to 0/10 if time allows)
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);

module.exports = Reviews;