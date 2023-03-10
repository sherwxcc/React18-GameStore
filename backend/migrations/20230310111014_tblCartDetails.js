/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("tblCartDetails", (table) => {
    table.primary(["user_id", "prod_id"]);
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("tblUsers")
      .onDelete("CASCADE");
    table.integer("prod_id").unsigned().notNullable();
    table
      .foreign("prod_id")
      .references("prod_id")
      .inTable("tblProducts")
      .onDelete("CASCADE");
    table.integer("quantity").unsigned().notNullable();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tblCartDetails");
};
