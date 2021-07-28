exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'janeDoe', password: '12345', role_id: 1 },
    { username: 'johnDoe', password: '12321', role_id: 2 },
    { username: 'bobDylan', password: 'Groot', role_id: 2 }
  ]);
};
