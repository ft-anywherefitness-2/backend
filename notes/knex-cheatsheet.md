# Knex cheatsheet

> One-page guide to Knex: usage, examples, and more. Knex is an SQL query builder for Node.js.This guide targets v0.13.0.

### Where

    knex
      .from('books')
      .select('title', 'author', 'year')
    

#### Where

      .where('title', 'Hello')
      .where({ title: 'Hello' })
      .whereIn('id', [1, 2, 3])
      .whereNot(···)
      .whereNotIn('id', [1, 2, 3])
    

#### Where conditions

      .whereNull('updated_at')
      .whereNotNull(···)
    

      .whereExists('updated_at')
      .whereNotExists(···)
    

      .whereBetween('votes', [1, 100])
      .whereNotBetween(···)
    

      .whereRaw('id = ?', [1])
    

#### Where grouping

      .where(function () {
        this
          .where('id', 1)
          .orWhere('id', '>', 10)
      })
    

See: [Where clauses](http://knexjs.org/#Builder-wheres)

### Join

    knex('users')
    

#### Basic join

      .join('contacts', 'users.id', '=', 'contacts.id')
      .join('contacts', {'users.id': 'contacts.id'})
    

#### Strings

      .join('accounts', 'accounts.type', '=', knex.raw('?', ['admin']))
    

#### Directions

      .leftJoin(···)
      .leftOuterJoin(···)
      .rightJoin(···)
      .rightOuterJoin(···)
      .outerJoin(···)
      .fullOuterJoin(···)
      .crossJoin(···)
    

#### Raw

      .joinRaw('natural full join table1')
    

#### Grouping

      .join('accounts', function () {
        this
          .on('accounts.id', '=', 'users.account_id')
          .orOn('accounts.owner_id', '=', 'users.id')
    
          .onIn('accounts.id', [1, 2, 3, 5, 8])
          .onNotIn(···)
    
          .onNull('accounts.email')
          .onNotNull(···)
    
          .onExists(function () {
            this.select(···)
          })
          .onNotExists(···)
      })
    

See: [Join methods](http://knexjs.org/#Builder-join)

### Others

    knex('users')
      .distinct()
    

#### Group

      .groupBy('count')
      .groupByRaw('year WITH ROLLUP')
    

#### Order

      .orderBy('name', 'desc')
      .orderByRaw('name DESC')
    

#### Offset/limit

      .offset(10)
      .limit(20)
    

#### Having

      .having('count', '>', 100)
      .havingIn('count', [1, 100])
    

#### Union

      .union(function() {
        this.select(···)
      })
      .unionAll(···)
    

See: [Query builder](http://knexjs.org/#Builder)

### Etc

    knex('users')
      .pluck('id')
      .then(ids => { ··· })
    

    knex('users')
      .first()
      .then(user => { ··· })
    

#### Booleans

      .count('active')
      .count('active as is_active')
    

#### Numbers

      .min('age')
      .max('age')
      .sum('age')
      .sumDistinct('age')
      .avg('age')
    

See: [Query builder](http://knexjs.org/#Builder)


[Source](https://devhints.io/knex)