exports.up = async function(knex) {
    await knex.schema.createTable('enrollments', table => {
        table.increments('enrollment_id')
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE').onDelete('CASCADE')
        table.integer('class_id')
            .unsigned()
            .notNullable()
            .references('class_id')
            .inTable('classes')
            .onUpdate('CASCADE').onDelete('CASCADE')
        })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('enrollments')
};