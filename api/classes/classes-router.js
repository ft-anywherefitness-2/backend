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
        .then(newClass => {
            res.status(200).json(newClass)
        })
        .catch(next)
});

router.put('/:id', (req, res, next) => {
    const { changes } = req.body;

    Classes.update(req.params.id, changes)
        .then(changes => {
            console.log(changes)
        })
        .catch(next)
});

router.delete('/:id', (req, res, next) => {
    Classes.remove(req.params.id)
        .then(removedClass => {
            res.status(200).json(removedClass)
        })
        .catch(next)
});

module.exports = router;