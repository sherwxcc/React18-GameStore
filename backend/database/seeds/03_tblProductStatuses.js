/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblProductStatuses").del();
  await knex("tblProductStatuses").insert([
    {
      status_id: 1,
      status_name: "available",
    },
    {
      status_id: 2,
      status_name: "removed",
    },
  ]);
};
