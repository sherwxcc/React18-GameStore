/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tblProducts", (table) => {
    table.increments("prod_id").primary({
      constraintName: "PK_tblProducts_prod_id",
    });
    table.string("prod_name").notNullable().unique();
    table.string("img_url");
    table.foreign("brand_id").references("tblBrands.brand_id").unsigned();
    table.foreign("cat_id").references("tblCategories.cat_id").unsigned();
    table.decimal("price", 2).notNullable();
    table
      .foreign("status_id")
      .references("tbProductStatuses.status_id")
      .unsigned();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblProducts");
};
