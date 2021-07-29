# Knex Cheat Sheet

> [Migrations] Setting up            Create knexfile.js      ./node_modules/.bin/knex init...

### [](#migrations-setting-up)\[Migrations\] Setting up

#### [](#create-knexfilejs)Create knexfile.js

    ./node_modules/.bin/knex init
    

Enter fullscreen mode Exit fullscreen mode

#### [](#create-a-migration)Create a migration

    knex migrate:make migration_name
    knex migrate:make migration_name --env production
    

Enter fullscreen mode Exit fullscreen mode

#### [](#run-migrations)Run migrations

    knex migrate:latest
    knex migrate:latest --env production
    

Enter fullscreen mode Exit fullscreen mode

#### [](#rollback)Rollback

    knex migrate:rollback
    knex migrate:rollback --env production
    

Enter fullscreen mode Exit fullscreen mode

See: [Migrations](http://knexjs.org/#Migrations)

### [](#modifying-delete)\[Modifying\] Delete

    knex('users')
      .where({ id: 2 })
      .del()
    

Enter fullscreen mode Exit fullscreen mode

See: [Delete](http://knexjs.org/#Builder-del)

### [](#modifying-update)\[Modifying\] Update

    knex('users')
      .where({ id: 2 })
      .update({ name: 'Homer' })
    

Enter fullscreen mode Exit fullscreen mode

See: [Update](http://knexjs.org/#Builder-update)

### [](#modifying-insert)\[Modifying\] Insert

    knex('users')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#insert-one)Insert one

      .insert({ name: 'John' })
    

Enter fullscreen mode Exit fullscreen mode

#### [](#insert-many)Insert many

      .insert([
        { name: 'Starsky' },
        { name: 'Hutch' }
      ])
    

Enter fullscreen mode Exit fullscreen mode

See: [Insert](http://knexjs.org/#Builder-insert)

### [](#modifying)Modifying

{: .-three-column}

### [](#schema-other-methods)\[Schema\] Other methods

    knex.schema
      .renameTable('persons', 'people')
      .dropTable('persons')
    

Enter fullscreen mode Exit fullscreen mode

      .hasTable('users').then(exists => ···)
      .hasColumn('users', 'id').then(exists => ···)
    

Enter fullscreen mode Exit fullscreen mode

See: [Schema builder](http://knexjs.org/#Schema)

### [](#schema-alter-table)\[Schema\] Alter table

    knex.schema.table('accounts', table => {
    

Enter fullscreen mode Exit fullscreen mode

#### [](#create)Create

      table.string('first_name')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#alter)Alter

      table.string('first_name').alter()
      table.renameColumn('admin', 'is_admin')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#drop)Drop

      table.dropColumn('admin')
      table.dropTimestamps('created_at')
    

Enter fullscreen mode Exit fullscreen mode

    })
    

Enter fullscreen mode Exit fullscreen mode

{: .-setup}

See: [Schema builder](http://knexjs.org/#Schema)

### [](#schema-create-table)\[Schema\] Create table

    knex.schema.createTable('accounts', table => {
    

Enter fullscreen mode Exit fullscreen mode

#### [](#columns)Columns

      table.increments('id')
      table.string('account_name')
      table.integer('age')
      table.float('age')
      table.decimal('balance', 8, 2)
      table.boolean('is_admin')
      table.date('birthday')
      table.time('created_at')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.json('profile')
      table.jsonb('profile')
      table.uuid('id').primary()
    

Enter fullscreen mode Exit fullscreen mode

#### [](#constraints)Constraints

      table.unique('email')
      table.unique(['email', 'company_id'])
      table.dropUnique(···)
    

Enter fullscreen mode Exit fullscreen mode

#### [](#indices)Indices

      table.foreign('company_id')
        .references('companies.id')
      table.dropForeign(···)
    

Enter fullscreen mode Exit fullscreen mode

#### [](#variations)Variations

      table.integer('user_id')
        .unsigned()
        .references('users.id')
    

Enter fullscreen mode Exit fullscreen mode

    })
    .then(() => ···)
    

Enter fullscreen mode Exit fullscreen mode

{: .-setup}

See: [Schema builder](http://knexjs.org/#Schema)

### [](#select-etc)\[Select\] Etc

    knex('users')
      .pluck('id')
      .then(ids => { ··· })
    

Enter fullscreen mode Exit fullscreen mode

    knex('users')
      .first()
      .then(user => { ··· })
    

Enter fullscreen mode Exit fullscreen mode

#### [](#booleans)Booleans

      .count('active')
      .count('active as is_active')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#numbers)Numbers

      .min('age')
      .max('age')
      .sum('age')
      .sumDistinct('age')
      .avg('age')
    

Enter fullscreen mode Exit fullscreen mode

See: [Query builder](http://knexjs.org/#Builder)

### [](#select-others)\[Select\] Others

    knex('users')
      .distinct()
    

Enter fullscreen mode Exit fullscreen mode

#### [](#group)Group

      .groupBy('count')
      .groupByRaw('year WITH ROLLUP')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#order)Order

      .orderBy('name', 'desc')
      .orderByRaw('name DESC')
    

Enter fullscreen mode Exit fullscreen mode

#### [](#offsetlimit)Offset/limit

      .offset(10)
      .limit(20)
    

Enter fullscreen mode Exit fullscreen mode

#### [](#having)Having

      .having('count', '>', 100)
      .havingIn('count', [1, 100])
    

Enter fullscreen mode Exit fullscreen mode

#### [](#union)Union

      .union(function() {
        this.select(···)
      })
      .unionAll(···)
    

Enter fullscreen mode Exit fullscreen mode

See: [Query builder](http://knexjs.org/#Builder)

### [](#reference)Reference

*   [Knex Cheat Sheet](https://cheatsheetmaker.com/knex) - [Cheat Sheet Maker](https://cheatsheetmaker.com/)


[Source](https://dev.to/hoanganhlam/knex-cheat-sheet-79o)