
exports.seed = async function(knex) {
  await knex('dish').insert([
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Tacos' }
  ])
};
