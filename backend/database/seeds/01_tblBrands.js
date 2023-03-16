/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblBrands").del();
  await knex("tblBrands").insert([
    {
      brand_id: 1,
      brand_name: "Playstation",
    },
    {
      brand_id: 2,
      brand_name: "Nintendo",
    },
    {
      brand_id: 3,
      brand_name: "XBOX",
    },
  ]);
};
