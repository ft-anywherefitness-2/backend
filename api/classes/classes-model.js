const db = require('../../data/db-config');

function getClasses() {
    return db('class')
}

module.exports = {
    getClasses,
}