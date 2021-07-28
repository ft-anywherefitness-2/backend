exports.seed = function(knex) {
  return knex('roles').insert([
    { role_name: 'instructor'},
    { role_name: 'client'},
  ]);
};
