

// Dish Table
exports.up = async function(knex) {

  await knex.schema.createTable('dish', (tbl) => {
      tbl.increments('id')
      tbl.string('name').unique().notNullable()
  })


// Recipe Table
  await knex.schema.createTable('recipes', (tbl) => {
      tbl.increments('id')
      tbl.string('name').notNullable()
      tbl
        .integer('dish_id')
        .references('id')
        .inTable('dish')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
  })

  // Ingredients Table
  await knex.schema.createTable('ingredients', (tbl) => {
      tbl.increments('id')
      tbl.string('name').unique().notNullable();
  })

  // Recipes_Ingredients Table
  await knex.schema.createTable('recipes_ingredients', (tbl) => {
      tbl.increments('id')
      tbl
        .integer('recipe_id')
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
        tbl
        .integer('ingredient_id')
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
        tbl.float('quanitity').notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes_ingredients')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
  await knex.schema.dropTableIfExists('dish')
};
