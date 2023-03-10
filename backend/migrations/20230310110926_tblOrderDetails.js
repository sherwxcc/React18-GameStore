/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("tblOrderDetails", (table) => {
    table.primary(["ord_id", "prod_id"]);
    table.integer("ord_id").unsigned().notNullable();
    table
      .foreign("ord_id")
      .references("ord_id")
      .inTable("tblOrders")
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
  return knex.schema.dropTableIfExists("tblOrderDetails");
};
