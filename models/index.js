const User = require('./user');
const Books = require('./books');
const Reviews = require('./reviews')
const Wishlist = require('./wishlist')

// This all may be need to altered to 
User.hasMany(Books, {
  foreignKey: 'user_id'
});

User.hasMany(Reviews, {
  foreignKey: 'user_id',
});

Books.belongsTo(User, {
  foreignKey: 'user_id'
});

Books.hasMany(Reviews, {
  foreignKey: 'book_id'
});

Books.hasMany(Wishlist, {
  foreignKey: 'book_id',
  sourceKey: 'id', 
});

Reviews.belongsTo(User, {
  foreignKey: 'user_id'
});

Wishlist.belongsTo(Books, {
  foreignKey: 'book_id',
  targetKey: 'id',
});

Wishlist.belongsTo(User, {
  foreignKey: 'user_id'
});

Wishlist.hasMany(Books, {
  foreignKey: 'book_id'
});

module.exports = { User, Books, Reviews, Wishlist };
