exports.up = async function(knex) {
  await knex.schema
    .createTable('roles', table => {
        table.increments('role_id')
        table.string('role_name')
    })
  .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 200).notNullable()
        table.string('password', 200).notNullable()
        // table
        //     .integer('role_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('role_id')
        //     .inTable('roles')
        //     .onDelete('CASCADE')
        //     .onUpdate('CASCADE')
    })
    .createTable('enrollments', table => {
        table.increments('enrollment_id')
        // table
        //     .integer('user_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('user_id')
        //     .inTable('users')
        //     .onDelete('CASCADE')
        //     .onUpdate('CASCADE')
        // table
        //     .integer('class_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('class_id')
        //     .inTable('class')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE')
    })
    .createTable('class', table => {
        table.increments('class_id')
        table.string('class_name', 200).notNullable()
        table.string('class_type', 200).notNullable()
        table.time('start_time').notNullable()
        table.string('duration', 200).notNullable()
        table.string('intensity_level', 150).notNullable()
        table.string('class_location', 150).notNullable()
        table.integer('max_size').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('class')
    .dropTableIfExists('enrollments')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
};
