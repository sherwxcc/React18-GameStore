/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblCategories").del();
  await knex("tblCategories").insert([
    {
      cat_id: 1,
      cat_name: "Console",
    },
    {
      cat_id: 2,
      cat_name: "Game",
    },
    {
      cat_id: 3,
      cat_name: "Accessories",
    },
  ]);
};
