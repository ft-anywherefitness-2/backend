const db = require('../../data/db-config');

function getClasses() {
    return db('classes')
}

function getById(class_id) {
    return db('classes').where({ class_id }).first()
}

async function addClass(newClass) {
    const [class_id] = await db('classes').insert(newClass)
    return getById(class_id)
}

function update(id) {
    return db('classes')
}

function remove(id) {

}

module.exports = {
    getClasses,
    getById,
    addClass,
    update,
    remove
}