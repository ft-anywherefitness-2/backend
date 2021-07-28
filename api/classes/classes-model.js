const db = require('../../data/db-config');

function getClasses() {
    return db('classes')
}

module.exports = {
    getClasses,
}