/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("tblUsers", (table) => {
    table.increments("user_id");
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.boolean("admin").notNullable();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tblUsers");
};
