exports.seed = async function(knex) {
  await knex('users').insert([
    { username: "janeDoe", password: '1234', role_id:1 },
    { username: "bobDoe", password: '1234', role_id: 2 },
    { username: "joeDoe", password: '1234', role_id: 2 }
  ]);
};