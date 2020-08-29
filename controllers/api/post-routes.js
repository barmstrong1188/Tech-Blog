const router = require('express').Router();
const { Post, User } = require('../../models');


router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'comment_text', 'created_at'],
        include: [
        {
            model: User,
            aatributes: ['username']
        }
      ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;