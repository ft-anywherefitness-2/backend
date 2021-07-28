const express = require('express');
const router = express.Router();
const Users = require('./users-model');

router.get('/', (req, res, next) => {
    Users.getAllUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
});

router.post('/', async (req, res, next) => {
    Users.insertUser(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
});

module.exports = router;