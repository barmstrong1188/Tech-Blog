const router = require('express').Router();
const { User } = require('../../models');

//get route to /api/users  --get all users
router.get('/', (req, res) => {
    //access user model and run .findAll() method
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
//get users by id
//post /api/users ---create user
//put /api/users --update user
//delete /api/users  --delete user

//export
module.exports = router;