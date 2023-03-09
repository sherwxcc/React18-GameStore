/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tblBrands", (table) => {
    table.increments("brand_id").primary({
      constraintName: "PK_tblBrands_brand_id",
    });
    table.string("brand_name").notNullable().unique();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tblBrands");
};
