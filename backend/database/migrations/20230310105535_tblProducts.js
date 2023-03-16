/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tblProducts", (table) => {
    table.increments("prod_id");
    table.string("prod_name").notNullable().unique();
    table.string("img_url");
    table.decimal("price", 10, 2).notNullable();
    table.integer("brand_id").unsigned().notNullable();
    table
      .foreign("brand_id")
      .references("brand_id")
      .inTable("tblBrands")
      .onDelete("CASCADE");
    table.integer("cat_id").unsigned().notNullable();
    table
      .foreign("cat_id")
      .references("cat_id")
      .inTable("tblCategories")
      .onDelete("CASCADE");
    table.integer("status_id").unsigned().notNullable();
    table
      .foreign("status_id")
      .references("status_id")
      .inTable("tblProductStatuses")
      .onDelete("CASCADE");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tblProducts");
};
