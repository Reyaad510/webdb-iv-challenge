
exports.seed = async function(knex) {
  await knex('recipes').insert([
    { id: 1, name:'Pizza Hut Cheese Pizza Recipe', dish_id: 1 },
    { id: 2, name:'Home Made Taco Recipe', dish_id: 2 }
  ])
};
