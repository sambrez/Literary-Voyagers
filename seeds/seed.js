const sequelize = require('../config/connection');
const { User, Books, Reviews } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const reviewData = require('./bookData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const book of bookData) {
    await Books.create({
      ...book,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const review = await Reviews.bulkCreate(reviewData);

  process.exit(0);
};

seedDatabase();
