exports.up = async function(knex) {
    await knex.schema.createTable('classes', table => {
        table.increments('class_id')
        table.string('class_name', 200).notNullable()
        table.string('class_type', 200)
        table.time('start_time').notNullable()
        table.string('duration', 150)
        table.string('intensity_level', 125).notNullable()
        table.string('class_location', 200).notNullable()
        table.integer('max_class_size').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('classes')
};