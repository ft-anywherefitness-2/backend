exports.up = async function(knex) {
    await knex.schema.createTable('users', table => {
        table.increments('user_id')
        table.string('username', 200).notNullable()
        table.string('password', 200).notNullable()
        table.integer('role_id')
            .unsigned()
            .notNullable()
            .references('role_id')
            .inTable('roles')
            .onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users')
};