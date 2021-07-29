const express = require('express');
const router = express.Router();
const Classes = require('./classes-model');

router.get('/', (req, res, next) => {
    Classes.getClasses()
        .then(classes => {
            res.status(200).json(classes)
        })
        .catch(next)
});

router.get('/:id', (req, res, next) => {
    Classes.getById(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(next)
});

module.exports = router;