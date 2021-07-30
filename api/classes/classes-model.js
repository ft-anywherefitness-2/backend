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

function update(class_id, changes) {
    return db('classes')
    .update(changes)
    .where({ class_id })
}

function remove(class_id) {
    return db('classes')
    .where({ class_id })
    .del()
}



module.exports = {
    getClasses,
    getById,
    addClass,
    update,
    remove
}