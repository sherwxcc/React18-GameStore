/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tblOrderStatuses").del();
  await knex("tblOrderStatuses").insert([
    {
      status_id: 1,
      status_name: "unpaid",
    },
    {
      status_id: 2,
      status_name: "paid",
    },
    {
      status_id: 3,
      status_name: "delivered",
    },
    {
      status_id: 4,
      status_name: "cancelled",
    },
    {
      status_id: 5,
      status_name: "refunded",
    },
  ]);
};
