/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tblCartDetails", (table) => {
      table.foreign("user_id").references("tblUsers.user_id").unsigned();
      table.foreign("prod_id").references("tblProducts.prod_id").unsigned();
      table.integer("quantity").unsigned().notNullable();
      table.timestamps(false, true);
    })
    .then(() => {
      knex.schema.alterTable("tblCartDetails", function (t) {
        t.primary(["user_id", "prod_id"], {
          constraintName: "PK_tblCartDetails_userid_prodid",
        });
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblCartDetails");
};
