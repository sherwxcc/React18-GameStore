/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tblOrders", (table) => {
    table.increments("ord_id").primary({
      constraintName: "PK_tblOrders_ord_id",
    });
    table.foreign("user_id").references("tblUsers.user_id").unsigned();
    table.dateTime("order_date").notNullable().defaultTo(knex.fn.now(6));
    table.dateTime("ship_date");
    table
      .foreign("status_id")
      .references("tblOrderStatuses.status_id")
      .unsigned();
    table.string("remark", 1000);
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblOrders");
};
