/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tblCategories", (table) => {
    table.increments("cat_id").primary({
      constraintName: "PK_tblCategories_cat_id",
    });
    table.string("cat_name").notNullable().unique();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblCategories");
};
