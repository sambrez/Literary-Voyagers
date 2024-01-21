const router = require("express").Router();
const { Books, User, Reviews } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userBooks = await Books.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Reviews,
                    attributes: ['reviewTitle', 'review', 'date_created', 'recommendation', 'user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['name'],
                            where: {
                                user_id: user_id
                            }
                        }
                    ]
                }
            ]
        });

        const books = userBooks.map((book) => book.get({ plain: true }));

        res.render("profile", {
            books,
            logged_in: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;