/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tblOrderDetails", (table) => {
      table.foreign("ord_id").references("tblOrders.ord_id").unsigned();
      table.foreign("prod_id").references("tblProducts.prod_id").unsigned();
      table.integer("quantity").unsigned().notNullable();
      table.timestamps(false, true);
    })
    .then(() => {
      return knex.schema.alterTable("tblOrderDetails", function (t) {
        t.primary(["ord_id", "prod_id"], {
          constraintName: "PK_tblOrderDetails_ordid_prodid",
        });
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblOrderDetails");
};
