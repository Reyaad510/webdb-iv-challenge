
exports.seed = async function(knex ) {
  await knex('ingredients').insert([
    { id: 1, name: 'cup of corn flour' },
    { id: 2, name: 'gram of butter' }
  ])
};
