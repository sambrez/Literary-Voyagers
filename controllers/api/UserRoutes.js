const router = require('express').Router();
const { User } = require('../../models');
const { sendEmail } = require('../../utils/sendEmail');

// signup new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Send a welcome email to the new user
    const welcomeSubject = 'Welcome to Liteary Voyagers!';
    const welcomeMessage = `Hello ${userData.name},\n\nThank you for joining Literary Voyagers! Stay Tuned for the most up-to-date book reviews!`;

    await sendEmail(userData.email, welcomeSubject, welcomeMessage);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(400).json(err);
  }
});

// login a user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout a user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
