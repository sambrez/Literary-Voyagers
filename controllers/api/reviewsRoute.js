const express = require('express');
const router = express.Router();
const { Reviews } = require('../../models');

router.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

// GET all reviews
router.get('/', async (req, res) => {
    try {
      console.log('Fetching all reviews...');
      const reviews = await Reviews.findAll();
      console.log('Reviews:', reviews); 
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// GET a review by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Reviews.findByPk(id);

    if (!review) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new review
router.post('/', async (req, res) => {
  const { reviewTitle, review, recommendation, user_id, book_id } = req.body;

  try {
    const newReview = await Reviews.create({
      reviewTitle,
      review,
      recommendation,
      user_id,
      book_id,
    });

    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a review by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const review = await Reviews.findByPk(id);

//     if (!review) {
//       res.status(404).json({ error: 'Review not found' });
//       return;
//     }

//     await review.destroy();

//     res.json({ message: 'Review deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = router;
