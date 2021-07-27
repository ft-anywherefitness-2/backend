exports.up = async function(knex) {
    await knex.schema
    .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 200).notNullable()
        table.string('password', 200).notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users')
};