exports.up = async function(knex) {
    await knex.schema.createTable('roles', table => {
        table.increments('role_id')
        table.string('role_name')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('roles')
};