exports.seed = function(knex) {
  return knex('roles').insert([
    { role_name: 'student'},
    { role_name: 'instructor'},
  ]);
};
