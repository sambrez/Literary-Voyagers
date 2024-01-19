const User = require('./User');
const Books = require('./books');
const Reviews = require('./reviews')

// This all may be need to altered to 
User.hasMany(Books, {
  foreignKey: 'user_id'
})

Books.belongsTo(User, {
  foreignKey: 'user_id'
})

Reviews.belongsTo(Books, {
  foreignKey: 'books_id'
})

module.exports = { User, Books, Reviews };
