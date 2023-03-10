/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("tblOrders", (table) => {
    table.increments("ord_id");
    table.dateTime("order_date").defaultTo(knex.fn.now(6));
    table.dateTime("ship_date");
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("tblUsers")
      .onDelete("CASCADE");
    table.integer("status_id").unsigned().notNullable();
    table
      .foreign("status_id")
      .references("status_id")
      .inTable("tblOrderStatuses")
      .onDelete("CASCADE");
    table.string("remark", 1000);
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tblOrders");
};
